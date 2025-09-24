import React, { useEffect, useMemo, useRef, useState } from "react";
import { clsx } from "clsx";
import Part1 from "../components/Home/Part1";
import Part2 from "../components/Home/Part2";
import Part3 from "../components/Home/Part3";
import Part4 from "../components/Home/Part4";
import Part5 from "../components/Home/Part5";
import Title from "../components/Home/Title";
import TOC, { type TocSection } from "../components/TOC";

export default function Home() {
  const sections: TocSection[] = useMemo(() => ([
    { id: "part-title", title: "Tiêu đề" },
    { id: "part-1", title: "1. Vai trò của đại đoàn kết toàn dân tộc" },
    { id: "part-2", title: "2. Lực lượng của khối đại đoàn kết toàn dân tộc" },
    { id: "part-3", title: "3. Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc" },
    { id: "part-4", title: "4. Hình thức, nguyên tắc tổ chức của khối đại đoàn kết toàn dân tộc – Mặt trận dân tộc thống nhất" },
    { id: "part-5", title: "5. Phương thức xây dựng khối đại đoàn kết dân tộc" },
  ]), []);

  const [activeId, setActiveId] = useState<string | null>(null);

  const titleRef = useRef<HTMLDivElement>(null);
  const part1Ref = useRef<HTMLDivElement>(null);
  const part2Ref = useRef<HTMLDivElement>(null);
  const part3Ref = useRef<HTMLDivElement>(null);
  const part4Ref = useRef<HTMLDivElement>(null);
  const part5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionOrder = [
      { id: "part-title", ref: titleRef },
      { id: "part-1", ref: part1Ref },
      { id: "part-2", ref: part2Ref },
      { id: "part-3", ref: part3Ref },
      { id: "part-4", ref: part4Ref },
      { id: "part-5", ref: part5Ref },
    ];

    let raf = 0;
    const updateActiveByCenter = () => {
      const viewportCenter = window.innerHeight / 2;
      let foundId: string | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;
      let bestId: string | null = null;

      for (const s of sectionOrder) {
        const el = s.ref.current;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const containsCenter = rect.top <= viewportCenter && rect.bottom >= viewportCenter;
        if (containsCenter) {
          foundId = s.id;
          break;
        } else {
          const distance = Math.min(
            Math.abs(rect.top - viewportCenter),
            Math.abs(rect.bottom - viewportCenter)
          );
          if (distance < bestDistance) {
            bestDistance = distance;
            bestId = s.id;
          }
        }
      }

      const nextId = foundId ?? bestId ?? null;
      if (nextId && nextId !== activeId) {
        setActiveId(nextId);
      }
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActiveByCenter);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    // Initial compute
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize as EventListener);
      window.removeEventListener("resize", onScrollOrResize as EventListener);
    };
  }, [activeId]);

  const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {
    "part-title": titleRef,
    "part-1": part1Ref,
    "part-2": part2Ref,
    "part-3": part3Ref,
    "part-4": part4Ref,
    "part-5": part5Ref,
  };

  const handleSelect = (id: string) => {
    const el = refs[id]?.current;
    if (el) {
      setActiveId(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Section id="part-title" ref={titleRef}><Title /></Section>
      <div className="mt-20 flex flex-col gap-30">
        <Section id="part-1" ref={part1Ref}><Part1 /></Section>
        <Section id="part-2" ref={part2Ref}><Part2 /></Section>

        <div className="bg-gray-500">
          <Section id="part-3" ref={part3Ref}><Part3 /></Section>
          <Section id="part-4" ref={part4Ref}><Part4 /></Section>
          <Section id="part-5" ref={part5Ref}><Part5 /></Section>
        </div>
      </div>

      <TOC sections={sections} activeId={activeId} onSelect={handleSelect} />
    </>
  )
}

type SectionProps = React.PropsWithChildren<{ id: string } & React.HTMLAttributes<HTMLDivElement>>;

const Section = React.forwardRef<HTMLDivElement, SectionProps>(function Section({ id, children, className, ...rest }, ref) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [variant] = useState<"slide-left" | "slide-right" | "scale-in">(() => {
    const arr = ["slide-left", "slide-right", "scale-in"] as const;
    return arr[Math.floor(Math.random() * arr.length)];
  });
  const localRef = useRef<HTMLDivElement | null>(null);

  const assignRef = (r: React.Ref<HTMLDivElement> | undefined, value: HTMLDivElement | null) => {
    if (!r) return;
    if (typeof r === "function") {
      r(value);
    } else {
      (r as unknown as { current: HTMLDivElement | null }).current = value;
    }
  };

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      })
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [hasAnimated]);

  const preClass = variant === "slide-left"
    ? "opacity-0 -translate-x-6"
    : variant === "slide-right"
      ? "opacity-0 translate-x-6"
      : "opacity-0 scale-95";
  const doneClass = "opacity-100 translate-x-0 scale-100";

  return (
    <div id={id} ref={(node) => { localRef.current = node; assignRef(ref, node); }}
      className={clsx("block transition-all duration-700 ease-out will-change-transform", hasAnimated ? doneClass : preClass, className)}
      {...rest}
    >
      {children}
    </div>
  );
});

