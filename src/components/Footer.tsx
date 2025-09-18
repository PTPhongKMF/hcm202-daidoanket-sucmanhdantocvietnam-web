import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-100 px-4 py-1 flex gap-4">
      <p>
        Made with luv ❤ by
      </p>

      <div>
        <Link to="https://github.com/PTPhongKMF" target="_blank" className="text-blue-400 underline">Phong</Link>{", "}
        <Link to="https://github.com/khiemvuong2310" target="_blank" className="text-blue-400 underline">Văn Khiêm</Link>{", "}
        <Link to="https://github.com/benzhoang" target="_blank" className="text-blue-400 underline"> Nhat Minh</Link>{", "}
        <Link to="https://github.com/TeddyPhamDat" target="_blank" className="text-blue-400 underline"> Tấn Đạt</Link>
      </div>

    </footer>
  )
}
