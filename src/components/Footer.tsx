import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-100 px-4 py-1 flex justify-between items-center">
      <div className="flex gap-4">
        <p>Made with luv ❤ by</p>

        <div>
          <Link
            to="https://github.com/PTPhongKMF"
            target="_blank"
            className="text-blue-400 underline"
          >
            Phong
          </Link>
          {", "}
          <Link
            to="https://github.com/khiemvuong2310"
            target="_blank"
            className="text-blue-400 underline"
          >
            Khiêm
          </Link>
          {", "}
          <Link
            to="https://github.com/benzhoang"
            target="_blank"
            className="text-blue-400 underline"
          >
            {" "}
            Nhat Minh
          </Link>
          {", "}
          <Link
            to="https://github.com/HoangTranNhat"
            target="_blank"
            className="text-blue-400 underline"
          >
            {" "}
            Nhat Hoang
          </Link>
          {", "}
          <Link
            to="https://github.com/TeddyPhamDat"
            target="_blank"
            className="text-blue-400 underline"
          >
            {" "}
            Tấn Đạt
          </Link>
        </div>
      </div>

      <p className="flex items-center gap-1">
        Bấm giữ 
        <kbd className="px-1 py-[0.1rem] text-sm text-gray-700 font-semibold bg-gray-100 border border-gray-200 rounded-lg shadow-sm">Shift</kbd>
        + lần lượt
        {['P', 'H', 'O', 'N', 'G'].map((key, i) => (
          <kbd key={i} className="px-2 py-[0.1rem] text-sm text-gray-700 font-semibold bg-gray-100 border border-gray-200 rounded-lg shadow-sm">
            {key}
          </kbd>
        ))}
        để xem easter egg
      </p>
    </footer>
  );
}
