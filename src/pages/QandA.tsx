import { AnimatedGridPattern } from "../components/magicui/AnimatedGridPattern";
import { cn } from "../utils/cn";

export default function QandA() {
  return (
    <div className="relative h-[100svh] bg-neutral-200 overflow-hidden flex justify-center items-center">
     <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

        <img className="size-full z-50" src="/imgs/bg-question.png"/>
    </div>
  )
}
