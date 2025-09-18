import { ChevronDownIcon } from "lucide-react";

export default function Title() {
  return (
    <>
      <div className="h-[50rem] bg-[url(/imgs/part1-1.jpg)] bg-cover">
        <div className="size-full bg-yellow-800/50 grid grid-rows-[1fr_5rem]">
          <div className="flex flex-col gap-6 justify-center items-center
         text-gray-200 text-center text-6xl font-title px-80">
            <h2 className="drop-shadow-lg drop-shadow-black">ĐẠI ĐOÀN KẾT</h2>
            <p className="drop-shadow-lg drop-shadow-black font-sans">-</p>
            <h2 className="drop-shadow-lg drop-shadow-black">Sức mạnh dân tộc Việt Nam</h2>

            <em className="flex font-sans justify-center items-center w-full text-white text-2xl text-center mt-20 drop-shadow-lg drop-shadow-black">
              “Kết nối truyền thống – Ứng dụng công nghệ – Lan tỏa giá trị đoàn kết”
            </em>
          </div>


        </div>


      </div>
      <div className="flex flex-col py-6 justify-center items-center bg-linear-to-br from-red-400/60 to-yellow-400/60">
        <ChevronDownIcon className="size-10 animate-arrowFlow text-white font-bold" />
        <ChevronDownIcon className="size-10 animate-arrowFlow text-white font-bold" />
        <ChevronDownIcon className="size-10 animate-arrowFlow text-white font-bold" />
      </div>
    </>
  )
}
