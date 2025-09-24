// Part1.tsx — fixed: no snap-back, fade-to-next in-place
import React, { useRef, useState } from "react";
import { motion, useAnimation } from "motion/react";
import ReactMarkdown from "react-markdown";
import { Hand } from "lucide-react";
import clsx from "clsx";
import { TypingAnimation } from "../magicui/TypingAnimation";
import { Lens } from "../aceternityui/lens";

const texts = [
  `
# Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc

## 1. Đại đoàn kết là chiến lược, không phải thủ đoạn
Trong tư tưởng Hồ Chí Minh, **đại đoàn kết toàn dân tộc** không phải là sách lược hay thủ đoạn chính trị,  
mà là **chiến lược lâu dài, nhất quán** của cách mạng Việt Nam.  

Người nói rõ:  

> “Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do.  
> Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn”.

## 2. Ý nghĩa sống còn của đại đoàn kết
- Đây là vấn đề **mang tính sống còn** của dân tộc Việt Nam.  
- Vì vậy, chiến lược này được duy trì cả trong:
  - Cách mạng dân tộc dân chủ nhân dân.  
  - Cách mạng xã hội chủ nghĩa.  

## 3. Sự điều chỉnh linh hoạt trong từng giai đoạn
Trong mỗi giai đoạn cách mạng:  
- Trước những yêu cầu và nhiệm vụ khác nhau:  
  - **Chính sách và phương pháp tập hợp đại đoàn kết** có thể và cần thiết phải **điều chỉnh** cho phù hợp với từng đối tượng.  
- Tuy nhiên:  
  - **Chủ trương đại đoàn kết toàn dân tộc** không bao giờ được thay đổi.  
  - Vì đó là **nhân tố quyết định sự thành bại của cách mạng**.

`,

  `
### Hồ Chí Minh nhiều lần nhấn mạnh:

> *“Đoàn kết là sức mạnh của chúng ta.”*  
> *“Đoàn kết là sức mạnh, đoàn kết là thắng lợi.”*  
> *“Đoàn kết là sức mạnh, là then chốt của thành công.”*  
> *“Đoàn kết, đoàn kết, đại đoàn kết – Thành công, thành công, đại thành công.”*

Điều này cho thấy, đại đoàn kết là vấn đề **chiến lược, then chốt của thành công cách mạng**, đồng thời vừa là **mục tiêu**, vừa là **nhiệm vụ hàng đầu**. Vì cách mạng là sự nghiệp của quần chúng, do quần chúng và vì quần chúng. Chính vì vậy Đảng phải thức tỉnh, tập hợp, tổ chức, lãnh đạo nhân dân thành khối đại đoàn kết, tạo nên sức mạnh tổng hợp.
`,

  `
### **Thực tiễn chứng minh**

Nhìn lại lịch sử, cuối thế kỷ XIX, các phong trào **Cần Vương, Đông Du, Đông Kinh Nghĩa Thục…** thất bại vì chưa tập hợp được sức mạnh toàn dân.  

Nhưng đến **Cách mạng Tháng Tám 1945**, nhờ có khối đại đoàn kết dân tộc dưới sự lãnh đạo của Đảng, nhân dân ta đã giành được độc lập.  

Trong lời kết thúc buổi ra mắt **Đảng Lao động Việt Nam** ngày *3-3-1951*, Hồ Chí Minh tuyên bố:

> *“Mục đích của Đảng Lao động Việt Nam có thể gồm trong tám chữ là:  
> **ĐOÀN KẾT TOÀN DÂN, PHỤNG SỰ TỔ QUỐC**”*

Trong **kháng chiến chống Pháp, chống Mỹ**, và cả trong **công cuộc Đổi mới sau 1986**, chính sức mạnh đoàn kết đã đưa dân tộc đi đến thắng lợi. Đây là minh chứng hùng hồn cho **tư tưởng Hồ Chí Minh về vai trò của đoàn kết**.

`,
];

export default function Part1() {
  const [hovering, setHovering] = useState(false);

  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const startXRef = useRef<number | null>(null);
  const isPointerDownRef = useRef(false);
  const hasThrownRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const inactivityTimerRef = useRef<number | null>(null);
  const lastRenderedXRef = useRef<number>(0);
  const [showHint, setShowHint] = useState(true);
  const rafIdRef = useRef<number | null>(null);
  const pendingTransformRef = useRef<
    { x: number; y: number; rotate: number } | null
  >(null);

  const throwThreshold = 110; // px threshold to trigger throw

  async function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    startXRef.current = e.clientX;
    isPointerDownRef.current = true;
    hasThrownRef.current = false;
    setIsDragging(true);
    setShowHint(false);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch { /* noop */ }
    await controls.set({ x: 0, opacity: 1, scale: 1, zIndex: 50 });
  }

  async function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (
      !isPointerDownRef.current || hasThrownRef.current ||
      startXRef.current == null
    ) return;
    const distance = Math.abs(e.clientX - startXRef.current);
    const effective = distance < 2 ? 0 : distance; // deadzone to avoid jitter
    const leftX = -effective; // always move left relative to distance
    const rotate = -Math.min(18, distance * 0.08);
    const yLift = -Math.min(40, distance * 0.12);

    // move with the pointer (left only)
    if (Math.abs(leftX - lastRenderedXRef.current) > 0.5) {
      pendingTransformRef.current = { x: leftX, y: yLift, rotate };
      if (rafIdRef.current == null) {
        rafIdRef.current = window.requestAnimationFrame(() => {
          const p = pendingTransformRef.current;
          if (p) {
            controls.set({ x: p.x, y: p.y, rotate: p.rotate });
            lastRenderedXRef.current = p.x;
          }
          rafIdRef.current = null;
        });
      }
    }

    // reset inactivity timer: if user stops moving without releasing, snap back
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }
    inactivityTimerRef.current = window.setTimeout(async () => {
      if (isPointerDownRef.current && !hasThrownRef.current) {
        await controls.start({
          x: 0,
          y: 0,
          rotate: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 300, damping: 26 },
        });
        isPointerDownRef.current = false;
        setIsDragging(false);
      }
    }, 180);

    // if beyond threshold, finish throw immediately
    if (distance > throwThreshold) {
      hasThrownRef.current = true;
      setIsDragging(false);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
        inactivityTimerRef.current = null;
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      pendingTransformRef.current = null;
      controls.stop();
      await controls.start({
        x: -900,
        y: yLift - 40,
        rotate: -25,
        opacity: 0,
        transition: { duration: 0.35, ease: "easeIn" },
      });
      isPointerDownRef.current = false;
      startXRef.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch { /* noop */ }

      setIndex((s) => (s + 1) % texts.length);
      await controls.set({ x: 0, y: 0, rotate: 0, opacity: 0, scale: 1 });
      await controls.start({
        opacity: 1,
        transition: { type: "spring", stiffness: 260, damping: 22 },
      });
    }
  }

  async function handlePointerUp(e?: React.PointerEvent<HTMLDivElement>) {
    // if not thrown, spring back to center
    if (!hasThrownRef.current) {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
        inactivityTimerRef.current = null;
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      pendingTransformRef.current = null;
      controls.stop();
      await controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 26 },
      });
    }
    isPointerDownRef.current = false;
    startXRef.current = null;
    setIsDragging(false);
    if (e) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch { /* noop */ }
    }
  }

  async function handlePointerCancel(e: React.PointerEvent<HTMLDivElement>) {
    await handlePointerUp(e);
  }

  async function handlePointerLeave(e: React.PointerEvent<HTMLDivElement>) {
    // treat leave as up to avoid stuck state
    if (isPointerDownRef.current) {
      await handlePointerUp(e);
    }
  }

  return (
    <div className="w-full h-fit bg-[url(/imgs/hcm.jpg)] bg-cover grid auto-rows-auto relative">
      <div className="z-0 absolute size-full top-0 bg-linear-to-b from-gray-50 from-[0.1%] via-transparent to-gray-50 to-99%" />

      <div className="w-full h-210 p-10 bg-amber-100/50">
        <h3 className="relative uppercase text-white font-heading text-6xl mb-16 z-10">
          <TypingAnimation
            startOnView={true}
            duration={70}
            className="text-white font-heading text-6xl z-90 [text-shadow:-3px_2px_0px_black] drop-shadow-lg drop-shadow-black"
          >
            Vai trò của đại đoàn kết toàn dân tộc
          </TypingAnimation>
        </h3>

        <div
          className="relative inline-block ms-30"
          style={{ touchAction: "none" }}
        >
          {/* BACK LAYERS (visual only) — full note styling */}
          <div
            className="absolute inset-0 translate-x-2 translate-y-2 rounded-sm shadow-md z-10 pointer-events-none border border-black/10"
            style={{
              backgroundColor: "#fbf3df",
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(0,0,0,0.05) 0 1px, transparent 1px 28px)",
              backgroundSize: "100% 28px",
              WebkitMaskImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='1' stitchTiles='stitch' result='turb'/><feDisplacementMap in2='turb' in='SourceGraphic' scale='6'/></filter><rect width='100%' height='100%' filter='url(%23f)' fill='white'/></svg>\")",
              maskImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='1' stitchTiles='stitch' result='turb'/><feDisplacementMap in2='turb' in='SourceGraphic' scale='6'/></filter><rect width='100%' height='100%' filter='url(%23f)' fill='white'/></svg>\")",
              WebkitMaskSize: "cover",
              maskSize: "cover",
              opacity: 0.9,
              transformOrigin: "left top",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 18% 34%, rgba(0,0,0,0.06), transparent 28%), radial-gradient(circle at 78% 68%, rgba(0,0,0,0.04), transparent 30%)",
                mixBlendMode: "multiply",
                opacity: 0.35,
              }}
            />
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-400/40 -translate-x-3 pointer-events-none" />
          </div>
          <div
            className="absolute inset-0 translate-x-1 translate-y-1 rounded-sm shadow-sm -z-10 pointer-events-none border border-black/10"
            style={{
              backgroundColor: "#fbf3df",
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(0,0,0,0.05) 0 1px, transparent 1px 28px)",
              backgroundSize: "100% 28px",
              WebkitMaskImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='1' stitchTiles='stitch' result='turb'/><feDisplacementMap in2='turb' in='SourceGraphic' scale='6'/></filter><rect width='100%' height='100%' filter='url(%23f)' fill='white'/></svg>\")",
              maskImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='1' stitchTiles='stitch' result='turb'/><feDisplacementMap in2='turb' in='SourceGraphic' scale='6'/></filter><rect width='100%' height='100%' filter='url(%23f)' fill='white'/></svg>\")",
              WebkitMaskSize: "cover",
              maskSize: "cover",
              opacity: 0.95,
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 18% 34%, rgba(0,0,0,0.06), transparent 28%), radial-gradient(circle at 78% 68%, rgba(0,0,0,0.04), transparent 30%)",
                mixBlendMode: "multiply",
                opacity: 0.3,
              }}
            />
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-400/40 -translate-x-3 pointer-events-none" />
          </div>

          {/* Swipe hint (hand) */}
          {showHint && !isDragging && (
            <div
              className="absolute right-[-6rem] top-1/2 -translate-y-1/2 z-40 pointer-events-none select-none animate-swipeLeftHint"
              aria-hidden
            >
              {
                /* <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              <path d="M3 12c2-2 4-3 6-3" opacity=".5" />
              <path d="M7 12c2-2 4-3 6-3" opacity=".7" />
              <path d="M9 12c2-2 4-3 6-3" />
              <path d="M12.5 11v-3a1.5 1.5 0 1 1 3 0v3" />
              <path d="M15.5 11v-2a1.5 1.5 0 1 1 3 0v3" />
              <path d="M18.5 12v-1a1.5 1.5 0 1 1 3 0v4c0 2.761-2.239 5-5 5h-2.5c-1.657 0-3-1.343-3-3v-5" />
              <path d="M12.5 12v-1a1.5 1.5 0 1 0-3 0v4" />
            </svg> */
              }
              <Hand className="text-white size-20" />
            </div>
          )}

          {/* TOP (interactive) LAYER */}
          <motion.div
            className="relative rounded-sm shadow-xl border border-black/10 font-handwriting text-gray-800 select-none z-30"
            animate={controls}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onPointerLeave={handlePointerLeave}
            whileTap={{ scale: 0.995 }}
            whileHover={{ scale: 1.01 }}
            style={{
              backgroundColor: "#fbf3df",
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(0,0,0,0.05) 0 1px, transparent 1px 28px)",
              backgroundSize: "100% 28px",
              overflow: "hidden",
              width: "600px",
              maxWidth: "90vw",
              cursor: isDragging ? "grabbing" : "grab",
              opacity: 1,
              scale: 1,
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          >
            {/* subtle deckle edge mask */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                WebkitMaskImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='1' stitchTiles='stitch' result='turb'/><feDisplacementMap in2='turb' in='SourceGraphic' scale='6'/></filter><rect width='100%' height='100%' filter='url(%23f)' fill='white'/></svg>\")",
                maskImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='f'><feTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='1' stitchTiles='stitch' result='turb'/><feDisplacementMap in2='turb' in='SourceGraphic' scale='6'/></filter><rect width='100%' height='100%' filter='url(%23f)' fill='white'/></svg>\")",
                WebkitMaskSize: "cover",
                maskSize: "cover",
                opacity: 0.98,
              }}
            />

            {/* age stains */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 18% 34%, rgba(0,0,0,0.06), transparent 28%), radial-gradient(circle at 78% 68%, rgba(0,0,0,0.04), transparent 30%)",
                mixBlendMode: "multiply",
                opacity: 0.45,
              }}
            />

            {/* left margin line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-red-400/50 -translate-x-3 pointer-events-none" />

            <div className="relative h-150 overflow-y-auto pl-8 pr-6 py-6 prose [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
              <ReactMarkdown>{texts[index]}</ReactMarkdown>
            </div>
          </motion.div>
        </div>

        <div
          className={clsx(
            "w-80 h-auto z-50 overflow-hidden rounded-4xl absolute top-36 right-20",
          )}
        >
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src="/imgs/bacho.webp"
              className={clsx("transform scale-x-[-1] cursor-none")}
            />
          </Lens>
        </div>
      </div>

    </div>
  );
}
