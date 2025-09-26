import { ShootingStars } from "../components/aceternityui/shooting-stars";
import { StarsBackground } from "../components/aceternityui/stars-background";
import { AuroraText } from "../components/magicui/aurora-text";
import { Target, Users, ShieldCheck, Scale, Workflow } from "lucide-react";
import ChatGPTLogo from "../assets/ChatGPT_logo.svg?react"
import ChatGPT from "../assets/ChatGPT.svg?react"
import GeminiLogo from "../assets/Google-gemini-icon.svg?react"
import GeminiLetter from "../assets/Google_Gemini_logo.svg?react"
import { Pointer } from "../components/magicui/pointer";

const rules = [
  {
    title: "Nguyên tắc 1",
    content:
      "AI được sử dụng với vai trò công cụ hỗ trợ, không thay thế tư duy, phân tích và sáng tạo của nhóm.",
  },
  {
    title: "Nguyên tắc 2",
    content:
      "Mọi thông tin do AI cung cấp đều được kiểm chứng, đối chiếu với nguồn chính thống.",
  },
  {
    title: "Nguyên tắc 3",
    content:
      "Nội dung cuối cùng được chỉnh sửa, biên tập bởi các thành viên, không sao chép nguyên văn từ AI.",
  },
  {
    title: "Nguyên tắc 4",
    content:
      "Đảm bảo tính minh bạch, liêm chính học thuật và đạo đức trong việc ứng dụng công nghệ.",
  },
];

const LOs = [
  {
    code: "LO3",
    content:
      "Hiểu hệ thống tư tưởng Hồ Chí Minh (độc lập dân tộc, CNXH, đại đoàn kết, đoàn kết quốc tế, xây dựng Đảng – Nhà nước, đạo đức – văn hóa – con người).",
  },
  {
    code: "LO4",
    content:
      "Hiểu được vai trò nền tảng lý luận của Chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh đối với đường lối của Đảng, Nhà nước.",
  },
  {
    code: "LO6",
    content:
      "Phát triển kỹ năng làm việc nhóm, tư duy phân tích – đánh giá, tìm kiếm và trình bày tài liệu, ứng dụng AI có đạo đức.",
  },
  {
    code: "LO7",
    content:
      "Củng cố tinh thần yêu nước, ý thức công dân, kỷ luật, thái độ nghề nghiệp đúng đắn, tinh thần học tập suốt đời.",
  },
  {
    code: "LO8",
    content:
      "Hình thành tác phong chuyên nghiệp, khoa học, có khả năng cập nhật kiến thức mới chủ động.",
  },
];

export default function Overview() {
  return (
    <div className="relative text-white w-full min-h-[200svh] bg-neutral-800 px-10 pt-16 pb-16 -z-20">
      <img className="fixed brightness-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10" src="/imgs/Vietnam_(orthographic_projection).svg" />

      <div className="z-50">
        <h2 className="flex justify-center items-center tracking-tighter text-white text-6xl font-bold my-8 uppercase">
          <span><AuroraText>Tổng quan </AuroraText> dự án</span>
        </h2>

        <p className="text-white flex justify-center items-center">“Đại Đoàn Kết – Sức mạnh dân tộc Việt Nam”</p>
        <p className="text-white flex justify-center items-center">“Kết nối truyền thống – Ứng dụng công nghệ – Lan tỏa giá trị đoàn kết”</p>

        <div className="flex flex-col gap-20 mt-12 px-20">
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 uppercase">I. Tóm tắt dự án</h3>
            <div className="ps-8 flex flex-col gap-6">
              <p className="text-neutral-200/90 leading-relaxed max-w-4xl">
                Dự án làm rõ <span className="font-semibold text-white">tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc</span>,
                coi đây là <span className="font-semibold text-white">chiến lược cơ bản, lâu dài và xuyên suốt</span> của cách mạng Việt Nam.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6">
                <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-br from-red-600/10 via-transparent to-amber-400/10 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition lg:col-span-4">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2"><Target className="size-5 text-amber-300" />Vai trò</h4>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(320px_200px_at_15%_0%,rgba(245,158,11,0.09),transparent_60%)]" />
                  <p className="text-neutral-300 mt-2">Đại đoàn kết là nhân tố quyết định thành bại của cách mạng.</p>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-br from-red-600/10 via-transparent to-amber-400/10 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition lg:col-span-4">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2"><Users className="size-5 text-amber-300" />Lực lượng</h4>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(320px_200px_at_85%_0%,rgba(245,158,11,0.08),transparent_60%)]" />
                  <p className="text-neutral-300 mt-2">Toàn dân Việt Nam; <span className="font-medium text-white">liên minh công – nông – trí thức</span> là nòng cốt.</p>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-br from-red-600/10 via-transparent to-amber-400/10 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition lg:col-span-4">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2"><ShieldCheck className="size-5 text-amber-300" />Điều kiện</h4>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(300px_180px_at_0%_100%,rgba(245,158,11,0.08),transparent_60%)]" />
                  <p className="text-neutral-300 mt-2">Đặt lợi ích chung lên cao nhất, kế thừa truyền thống, khoan dung và tin dân.</p>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-br from-red-600/10 via-transparent to-amber-400/10 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition lg:col-span-6">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2"><Scale className="size-5 text-amber-300" />Hình thức & nguyên tắc</h4>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(380px_220px_at_100%_0%,rgba(245,158,11,0.07),transparent_60%)]" />
                  <p className="text-neutral-300 mt-2">Mặt trận dân tộc thống nhất dưới sự lãnh đạo của Đảng; hiệp thương dân chủ; đoàn kết lâu dài.</p>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-red-500/20 bg-gradient-to-br from-red-600/10 via-transparent to-amber-400/10 backdrop-blur-md p-5 shadow-sm hover:shadow-md transition md:col-span-2 lg:col-span-6">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2"><Workflow className="size-5 text-amber-300" />Phương thức</h4>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(360px_200px_at_50%_100%,rgba(245,158,11,0.07),transparent_60%)]" />
                  <p className="text-neutral-300 mt-2">Dân vận khéo, tổ chức quần chúng, quy tụ vào mặt trận.</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-transparent to-cyan-400/10 p-6 mt-2">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(280px_140px_at_20%_0%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(260px_120px_at_80%_100%,rgba(34,211,238,0.12),transparent_60%)]" />
                <p className="relative text-emerald-200/90">
                  <span className="block text-sm uppercase tracking-wider text-emerald-300/70">Kết luận</span>
                  <span className="block mt-1 text-base text-white">
                    Đại đoàn kết vừa là mục tiêu, vừa là động lực, là cội nguồn sức mạnh vô địch của dân tộc Việt Nam trong kháng chiến và xây dựng, hội nhập hiện nay.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 uppercase px-4 py-2 rounded-md shadow">II. Learning Outcomes</h3>

            <div className="grid grid-cols-6 items-stretch gap-4">
              {LOs.map((lo, index) => {
                const spanClasses = "col-span-2";
                const positionClasses =
                  index === 3 ? "col-start-2" : index === 4 ? "col-start-4" : "";
                return (
                  <div key={lo.code} className={`${spanClasses} ${positionClasses} h-full`}>
                    <div className="relative h-full overflow-hidden rounded-xl border border-red-500/25 bg-gradient-to-br from-red-500/10 via-transparent to-amber-400/10 p-5 shadow-sm hover:shadow-md transition flex">
                      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(260px_160px_at_15%_0%,rgba(239,68,68,0.12),transparent_60%),radial-gradient(260px_160px_at_85%_100%,rgba(245,158,11,0.10),transparent_60%)]" />
                      <div className="relative z-10 flex items-start gap-3">
                        <span className="shrink-0 px-2 py-1 rounded-md bg-amber-400 text-neutral-900 text-xs font-bold tracking-wider">{lo.code}</span>
                        <p className="text-neutral-200 leading-relaxed">{lo.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold mb-4 uppercase">III. BÁO CÁO SỬ DỤNG AI TRONG DỰ ÁN</h3>
            <div className="ps-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">1. Công cụ đã sử dụng</h4>

                <div className="flex justify-around items-center">
                  <div className="flex justify-center items-center gap-4 text-xl font-semibold py-12 size-full hover:shadow shadow-gray-500 rounded-2xl">
                    <ChatGPTLogo className="size-10" /> ChatGPT
                    <Pointer><ChatGPT className="size-8 text-red-500 animate-spin" /></Pointer>
                  </div>
                  <div className="flex justify-center items-center gap-4 text-xl font-semibold py-12 size-full hover:shadow shadow-gray-500 rounded-2xl">
                    <GeminiLogo className="size-10" /> Google Gemini
                    <Pointer><GeminiLetter className="size-16 animate-spin" /></Pointer>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">2. Cách sử dụng</h4>
                <ul className="ps-6 list-disc marker:text-emerald-300 text-neutral-300 leading-relaxed flex flex-col gap-2">
                  <li>Tổng hợp nội dung từ PDF giáo trình Tư tưởng Hồ Chí Minh.</li>
                  <li>Gợi ý, hệ thống hóa thành bộ câu hỏi – nội dung tinh gọn bám sát giáo trình.</li>
                  <li>Hỗ trợ xây dựng kịch bản thuyết trình, thiết kế web và báo cáo.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">3. Nhiệm vụ nhóm</h4>
                <ul className="ps-6 list-disc marker:text-emerald-300 text-neutral-300 leading-relaxed flex flex-col gap-2">
                  <li>Đối chiếu và kiểm chứng thông tin với nguồn chính thống (giáo trình, văn kiện Đảng, Hồ Chí Minh Toàn tập).</li>
                  <li>Bổ sung ví dụ minh họa, dẫn chứng thực tiễn.</li>
                  <li>Hoàn thiện, chỉnh sửa câu hỏi và nội dung để phù hợp yêu cầu môn học.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">4. Nguyên tắc sử dụng AI</h4>
                <div className="grid grid-cols-4 gap-6">
                  {rules.map((rule, index) => (
                    <div key={index} className="group relative select-none">
                      <div className="relative overflow-hidden rounded-xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-transparent to-orange-400/10 p-5 shadow-sm hover:shadow-md transition">
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(220px_140px_at_15%_0%,rgba(251,191,36,0.12),transparent_60%),radial-gradient(220px_140px_at_85%_100%,rgba(251,146,60,0.10),transparent_60%)]" />
                        <div className="relative z-10 mb-6">
                          <div className="text-sm font-semibold text-amber-200 flex justify-start items-center gap-2"><Scale /> {rule.title}</div>
                        </div>
                        {rule.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ShootingStars minDelay={2000} maxDelay={4000} />
      <StarsBackground twinkleProbability={0.8} />
    </div>
  )
}
