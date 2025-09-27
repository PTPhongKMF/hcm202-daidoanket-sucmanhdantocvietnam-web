
import { useEffect, useState, useRef, useCallback } from "react"
import { TextMask } from "./TextMask"

export default function EasterEgg() {
  const [isActive, setIsActive] = useState(false)

  const [, setCurrentSequence] = useState<string[]>([])
  const [shiftPressed, setShiftPressed] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [transition, setTransition] = useState(false)

  const SECRET_CODE = useCallback(() => ["p", "h", "o", "n", "g"], [])

  const toggleEasterEgg = useCallback(async (activate: boolean) => {
    if (!containerRef.current) return

    setIsActive(activate)
    await new Promise(resolve => setTimeout(resolve, 50))

    setTransition(true)

    const x = window.innerWidth / 2
    const y = window.innerHeight / 2
    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const animation = containerRef.current.animate(
      {
        clipPath: activate
          ? [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ]
          : [
            `circle(${maxRadius}px at ${x}px ${y}px)`,
            `circle(0px at ${x}px ${y}px)`,
          ],
        opacity: activate ? [0, 1] : [1, 0],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        fill: "forwards"
      }
    )

    await animation.finished

    setTransition(false)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        setShiftPressed(true)
        return
      }

      if (isActive) {
        toggleEasterEgg(false)
        return
      }

      if (shiftPressed) {
        const key = e.key.toLowerCase()
        const secretCode = SECRET_CODE()

        setCurrentSequence(prev => {
          const updatedKeys = [...prev, key]

          const trimmedKeys = updatedKeys.slice(-secretCode.length)

          if (
            trimmedKeys.length === secretCode.length &&
            trimmedKeys.every((k, i) => k === secretCode[i])
          ) {
            toggleEasterEgg(true)
            return []
          }

          return trimmedKeys
        })
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        setShiftPressed(false)
        setCurrentSequence([]) // Reset keys when Shift is released
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [isActive, shiftPressed, toggleEasterEgg, SECRET_CODE])

  return (
    <div
      ref={containerRef}
      style={{
        clipPath: !transition && !isActive ? 'circle(0px at 50% 50%)' : undefined,
        opacity: !transition && !isActive ? 0 : undefined,
      }}
      className={`
        fixed inset-0 z-200 flex flex-col justify-center items-center
        bg-black size-full
        transition-opacity duration-300
        ${!isActive && !transition ? 'pointer-events-none' : ''}
      `}
    >
        <TextMask
          videoSrc="/vids/rickroll.mp4"
          text="Cảm ơn cô\nvà các bạn\nđã lắng nghe"
          fontSize={12}
          fontWeight={700}
          className="h-[90vh]"
        />
        <p className="text-white/50 text-lg mt-4">Bấm phím bất kì để tắt</p>
    </div>
  )
}
