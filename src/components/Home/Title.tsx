import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Title() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200); // match animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="h-[50rem] bg-[url(/imgs/part1-1.jpg)] bg-cover">
        <div className="size-full bg-yellow-800/50 grid grid-rows-[1fr_5rem]">
          <div className="flex flex-col gap-6 justify-center items-center
         text-gray-200 text-center text-7xl font-title px-80">
            <h2 className={clsx("drop-shadow-lg drop-shadow-black", !loaded ? "animate-fallDown" : "hover:animate-wiggle")}>ĐẠI ĐOÀN KẾT</h2>
            <p className={clsx("drop-shadow-lg drop-shadow-black font-sans", !loaded ? "animate-slideLeft" : "hover:animate-wiggle")}>-</p>
            <h2 className={clsx("drop-shadow-lg drop-shadow-black", !loaded ? "animate-slideRight" : "hover:animate-wiggle")}>Sức mạnh dân tộc Việt Nam</h2>

            <em className={clsx("flex min-h-20 hover:animate-wiggle font-sans justify-center items-center w-full text-white text-2xl text-center mt-20 drop-shadow-lg drop-shadow-black",
              !loaded ? "animate-riseUp" : "hover:animate-wiggle"
            )}>
              “Kết nối truyền thống – Ứng dụng công nghệ – Lan tỏa giá trị đoàn kết”
            </em>
          </div>

          <img src="/imgs/vn-ctr.png"
            className={clsx("z-50 absolute top-26 left-10 rotate-12", !loaded ? "animate-fallDown" : "hover:animate-spin")} />
        </div>
      </div>

      <div className="relative flex flex-col py-6 justify-center items-center bg-gradient-to-br from-red-400/60 to-yellow-400/60">
        <ChevronDownIcon className="size-10 animate-arrowFlow text-white font-bold" />
        <ChevronDownIcon className="size-10 animate-arrowFlow text-white font-bold" />
        <ChevronDownIcon className="size-10 animate-arrowFlow text-white font-bold" />

        <div className="pointer-events-none absolute top-0 size-full bg-gradient-to-b from-transparent from-50% to-gray-50" />
      </div>


    </>
  )
}
