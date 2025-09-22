import { clsx } from "clsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcn/tooltip";

export interface TocSection {
  id: string;
  title: string;
}

interface TOCProps {
  sections: TocSection[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function TOC({ sections, activeId, onSelect }: TOCProps) {
  return (
    <div
      className={clsx(
        "fixed right-4 top-1/2 -translate-y-1/2 z-[9000]",
        "bg-white/10 rounded-full p-2",
        "transition-all duration-300 ease-out",
        "hover:bg-white hover:shadow-lg hover:scale-130"
      )}
      aria-label="Table of contents"
    >
      <div className="flex flex-col items-center gap-2 select-none">
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <Tooltip key={s.id}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => onSelect(s.id)}
                  className={clsx(
                    "size-3 rounded-full bg-gray-400 cursor-pointer",
                    "transition-all duration-300 ease-out",
                    "hover:scale-110",
                    isActive && "bg-red-500 size-4"
                  )}
                  aria-label={s.title}
                />
              </TooltipTrigger>
              <TooltipContent side="left" sideOffset={6} className="flex text-white font-semibold size-base bg-gray-700 rounded-2xl">
                {s.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
