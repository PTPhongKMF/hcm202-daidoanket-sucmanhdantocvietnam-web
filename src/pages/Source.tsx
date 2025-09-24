import { Link } from "react-router";
import { ShootingStars } from "../components/aceternityui/shooting-stars";
import { StarsBackground } from "../components/aceternityui/stars-background";
import { BookText, Brain, Film, Images } from "lucide-react";

const imgSrc = [
  "https://ajc.edu.vn/gia-tri-lich-su-cua-cach-mang-thang-tam-nam-1945-trong-ky-nguyen-phat-trien-moi-cua-dan-toc-14056.htm",
  "https://ussh.vnu.edu.vn/vi/news/nhan-vat-su-kien/bao-chi-ho-chi-minh-ban-sac-va-dau-an-doc-dao-cua-chu-the-sang-tao-15322.html",
  "https://thitruongtaichinhtiente.vn/tu-hao-truyen-thong-ve-vang-cua-quan-doi-nhan-dan-viet-nam-43698.html",
  "https://woodencore.com/tranh-ban-do-viet-nam-bang-go-3d-mix-5-mau-nen-nau-cookie/?srsltid=AfmBOopCUKpW0Z39RpeYahExxYWtf7IOrebXjci_lqU1HMkmZYjdIGkq",
  "https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_Nam"
];

const videoSrc = [
  "https://www.youtube.com/watch?v=AtbQeFo0c0U&utm_source=chatgpt.com",
  "https://youtu.be/euqtheBsAYo?feature=shared"
];

const aiUsage = [
  "Sử dụng Gemini (model gemini-2.5-flash) để làm chatbot",
  "Sử dụng ChatGPT (model gpt5o) để giúp trang trí trang nguồn và thành viên",
  "Sử dụng Gemini (model gemini-2.5-pro) để hỗ trợ tìm kiếm và sàng lọc tài liệu tham khảo."
]

export default function Source() {
  return (
    <div className="relative w-full min-h-[100svh] bg-neutral-800 px-10 pt-16 pb-16">
      <img className="absolute brightness-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="/imgs/Vietnam_(orthographic_projection).svg"/>
      
      <div className="text-white rounded-3xl p-5 z-10">
        <h3 className="flex justify-center items-start text-3xl font-bold mb-12">Nguồn</h3>

        <div className="relative flex flex-col gap-16">
          <div>
            <h4 className="flex justify-center items-center w-fit text-xl gap-2 font-semibold mb-3"><BookText/> Nội dung</h4>
            <p>- Giáo trình</p>
          </div>

          <div>
            <h4 className="flex justify-center items-center w-fit text-xl gap-2 font-semibold mb-3"><Images/> Hình ảnh</h4>

            <div className="flex flex-col gap-2">
              {imgSrc.map(link => (
                <span>
                  - <Link className="underline text-blue-400 hover:text-blue-500" to={link} target="_blank">
                    {link}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex justify-center items-center w-fit text-xl gap-2 font-semibold mb-3"><Film/> Video</h4>

            <div className="flex flex-col gap-2">
              {videoSrc.map(link => (
                <span>
                  - <Link className="underline text-blue-400 hover:text-blue-500" to={link} target="_blank">
                    {link}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="flex justify-center items-center w-fit text-xl gap-2 font-semibold mb-1"><Brain/> Sử dụng AI</h4>
            <h5 className="ps-4 text font-semibold">Nguyên tắc</h5>
            <p className="ps-6 text-sm mb-3">
              - Chỉ dùng AI như công cụ hỗ trợ, không thay thế tư duy nhóm.
              <br />
              - Có kiểm chứng thông tin bằng nguồn chính thống (giáo trình, tài liệu Đảng, HCM toàn tập).
              <br />
              - Đảm bảo tính minh bạch và liêm chính học thuật: AI output được chỉnh sửa, không sao chép nguyên văn.
            </p>

            <div className="flex flex-col gap-2">
              {aiUsage.map(text => (
                <span>
                  - <Link className="underline text-blue-400 hover:text-blue-500" to={text} target="_blank">
                    {text}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ShootingStars minDelay={2000} maxDelay={4000}/>
      <StarsBackground twinkleProbability={0.8}/>
    </div>
  )
}
