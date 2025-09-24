import { Link } from "react-router";
import GithubIcon from "../assets/Octicons-mark-github.svg?react"
import { useVTNavigate } from "../hooks/useVTNavigate";

export default function NavBar() {
  const vtNavigate = useVTNavigate();

  function handleInternalNav(e: React.MouseEvent, to: string) {
    e.preventDefault();
    vtNavigate(to);
  };

  return (
    <nav
      className="group fixed top-2 grid grid-cols-2 left-1/2 -translate-x-1/2 w-[calc(100%-12rem)] 
    bg-gray-500/10 hover:bg-gray-100/90 hover:shadow-2xl px-8 py-1 rounded-4xl transition-colors duration-100 z-50"
    >
      <Link to="/" onClick={(e) => handleInternalNav(e, "/")} className="flex gap-4 items-center justify-self-start">
        <img src="/imgs/HCM.png" className="size-10" />
        <h1 className="text-xl font-semibold text-black/10 group-hover:text-black hover:text-red-700 transition-colors duration-100">
          Đại Đoàn Kết
        </h1>
      </Link>

      <div className="flex gap-8 items-center justify-self-end">
        <Link to="/quiz" onClick={(e) => handleInternalNav(e, "/quiz")}>
          <p className="font-semibold text-black/10 group-hover:text-black hover:text-red-700 transition-colors duration-100">
            Quiz
          </p>
        </Link>

        <Link to="/quiz" onClick={(e) => handleInternalNav(e, "/q&a")}>
          <p className="font-semibold text-black/10 group-hover:text-black hover:text-red-700 transition-colors duration-100">
            Hỏi Đáp
          </p>
        </Link>

        <Link to="/quiz" onClick={(e) => handleInternalNav(e, "/members")}>
          <p className="font-semibold text-black/10 group-hover:text-black hover:text-red-700 transition-colors duration-100">
            Thành viên
          </p>
        </Link>

        <Link to="/sources" onClick={(e) => handleInternalNav(e, "/sources")}>
          <p className="font-semibold text-black/10 group-hover:text-black hover:text-red-700 transition-colors duration-100">
            Nguồn
          </p>
        </Link>

        <Link
          to="https://github.com/PTPhongKMF/hcm202-daidoanket-sucmanhdantocvietnam-web"
          target="_blank"
        >
          <GithubIcon className="size-7 text-black/10 group-hover:text-black hover:text-red-700 transition-colors duration-100" />
        </Link>
      </div>
    </nav>
  );
}
