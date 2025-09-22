
import { useEffect, useRef, useState } from 'react'

function useInView(options?: IntersectionObserverInit) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!elementRef.current) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      })
    }, options ?? { threshold: 0.15, rootMargin: '0px 0px -10% 0px' })

    observer.observe(elementRef.current)
    return () => observer.disconnect()
  }, [options])

  return { ref: elementRef, inView }
}

export default function Part5() {
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  const sec1 = useInView()
  const sec2 = useInView()
  const sec3 = useInView()
  const sec4 = useInView()
  const sec5 = useInView()
  return (
    <div className="min-h-screen relative pt-20">
      {/* Background Image + Overlay giống Part 4 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/imgs/part1-1.jpg")' }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.55) 50%, rgba(0, 0, 0, 0.85) 100%)'
        }}
      ></div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header tương đồng Part 4 */}
          <div className="text-center mb-16">
            <h1
              ref={sec1.ref}
              className={`text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent inline-block transition-all duration-700 ease-out ${sec1.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Phương thức xây dựng khối đại đoàn kết dân tộc
            </h1>
            <div className="mt-4 inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <p className="text-lg text-white/90 font-medium">Thực hành dân vận, tổ chức, quy tụ sức mạnh</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Phần 1: Làm tốt công tác vận động quần chúng */}
            <div
              ref={sec2.ref}
              className={`bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/50 shadow-2xl transition-all duration-700 ease-out transform ${sec2.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} hover:shadow-3xl hover:-translate-y-1`}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Làm tốt công tác vận động quần chúng (dân vận)
              </h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                Đây là phương thức cơ bản nhất. Hồ Chí Minh khẳng định:
                <span className="font-bold text-yellow-300 italic"> "Dân vận khéo thì việc gì cũng thành công."</span>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Phải gần dân, hiểu dân, tin dân và làm cho dân tin Đảng</li>
                <li>Thành lập các đoàn thể, tổ chức quần chúng phù hợp</li>
              </ul>
              <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open1 ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="bg-black/30 rounded-2xl p-4 border border-white/20">
                  <p className="text-gray-200 leading-relaxed">
                    Dân vận không chỉ là tuyên truyền mà còn là tổ chức, lắng nghe và phản hồi kịp thời lợi ích chính đáng của nhân dân; xây dựng cơ chế đối thoại định kỳ giữa chính quyền và người dân; phát huy vai trò giám sát, phản biện xã hội của Mặt trận và các đoàn thể.
                  </p>
                  <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1">
                    <li>Xây dựng cán bộ dân vận “gần dân, trọng dân, hiểu dân, học dân”.</li>
                    <li>Ứng dụng công nghệ số để tiếp nhận, xử lý kiến nghị minh bạch.</li>
                    <li>Nhân rộng các mô hình “Dân vận khéo” gắn với mục tiêu cụ thể.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  aria-expanded={open1}
                  onClick={() => setOpen1((v) => !v)}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700 active:scale-[0.98] transition border border-white/10"
                >
                  {open1 ? 'Thu gọn' : 'Xem chi tiết'}
                </button>
              </div>
            </div>

            {/* Phần 2: Tổ chức các tầng lớp */}
            <div
              ref={sec3.ref}
              className={`bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-400/50 shadow-2xl transition-all duration-700 ease-out transform ${sec3.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} hover:shadow-3xl hover:-translate-y-1`}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Mỗi tầng lớp đều có tổ chức đại diện để tập hợp quần chúng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-2xl border border-white/20 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-semibold text-gray-200">Công nhân</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-blue-300 font-medium">Công đoàn</span>
                  </div>
                </div>
                <div className="bg-black/30 p-4 rounded-2xl border border-white/20 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-gray-200">Thanh niên</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-blue-300 font-medium">Đoàn Thanh niên</span>
                  </div>
                </div>
                <div className="bg-black/30 p-4 rounded-2xl border border-white/20 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="font-semibold text-gray-200">Phụ nữ</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-blue-300 font-medium">Hội Liên hiệp Phụ nữ</span>
                  </div>
                </div>
                <div className="bg-black/30 p-4 rounded-2xl border border-white/20 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-semibold text-gray-200">Nông dân</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-blue-300 font-medium">Hội Nông dân</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-200 italic">
                <strong>Mục đích:</strong> Gắn kết các tầng lớp vào khối đoàn kết chung.
              </p>
              <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open2 ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="bg-black/30 rounded-2xl p-4 border border-white/20">
                  <p className="text-gray-200 leading-relaxed">
                    Cần hoàn thiện khung pháp lý để các tổ chức đại diện hoạt động hiệu quả, minh bạch; mở rộng mặt trận đoàn kết tới các trí thức, doanh nhân, văn nghệ sĩ, người Việt Nam ở nước ngoài; tạo cơ chế phối hợp liên thông giữa các tổ chức nhằm tránh chồng chéo.
                  </p>
                  <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1">
                    <li>Xây dựng bộ quy tắc ứng xử, bảo đảm dân chủ trong tổ chức.</li>
                    <li>Kết nối mạng lưới chuyên gia, trí thức đóng góp sáng kiến phát triển.</li>
                    <li>Khuyến khích các hoạt động tình nguyện, an sinh xã hội thường xuyên.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  aria-expanded={open2}
                  onClick={() => setOpen2((v) => !v)}
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm font-medium shadow hover:bg-emerald-700 active:scale-[0.98] transition border border-white/10"
                >
                  {open2 ? 'Thu gọn' : 'Xem chi tiết'}
                </button>
              </div>
            </div>

            {/* Phần 3: Quy tụ các đoàn thể */}
            <div
              ref={sec4.ref}
              className={`bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/50 shadow-2xl transition-all duration-700 ease-out transform ${sec4.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} hover:shadow-3xl hover:-translate-y-1`}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Quy tụ các đoàn thể vào Mặt trận dân tộc thống nhất
              </h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                Đây là bước phát triển cao hơn: các đoàn thể cùng quy tụ về một
                <span className="font-bold text-purple-300"> "ngôi nhà chung"</span> – Mặt trận dân tộc thống nhất.
              </p>
              <div className="bg-black/30 p-4 rounded-2xl border border-white/20">
                <p className="text-gray-200">
                  <strong>Kết quả:</strong> Nhờ đó tránh chia rẽ, tạo nên sức mạnh tổng hợp của toàn dân tộc.
                </p>
              </div>
              <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open3 ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="bg-black/30 rounded-2xl p-4 border border-white/20">
                  <p className="text-gray-200 leading-relaxed">
                    Mặt trận dân tộc thống nhất cần hoạt động theo nguyên tắc hiệp thương dân chủ, đồng thuận xã hội, tôn trọng sự đa dạng trong thống nhất; tăng cường đối thoại, xây dựng niềm tin, giải quyết bất đồng trên tinh thần xây dựng vì lợi ích chung của quốc gia, dân tộc.
                  </p>
                  <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1">
                    <li>Thiết lập cơ chế phối hợp liên ngành, liên tổ chức hiệu quả.</li>
                    <li>Đẩy mạnh công tác đối ngoại nhân dân, mở rộng đoàn kết quốc tế.</li>
                    <li>Ứng dụng dữ liệu, số hóa để quản trị thống nhất, minh bạch.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  aria-expanded={open3}
                  onClick={() => setOpen3((v) => !v)}
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium shadow hover:bg-purple-700 active:scale-[0.98] transition border border-white/10"
                >
                  {open3 ? 'Thu gọn' : 'Xem chi tiết'}
                </button>
              </div>
            </div>

            {/* Phần kết luận */}
            <div
              ref={sec5.ref}
              className={`bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-red-400/50 text-center shadow-2xl transition-all duration-700 ease-out transform ${sec5.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} hover:shadow-3xl`}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Ý nghĩa của đại đoàn kết dân tộc
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Đại đoàn kết dân tộc là sức mạnh nội sinh, là động lực quan trọng để xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.
              </p>
            </div>

            {/* Kết luận */}
            <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-12 border border-white/30 shadow-2xl transition-all duration-700 ease-out">
              <h2 className="text-4xl font-bold text-center mb-6 text-white">
                KẾT LUẬN
              </h2>
              <div className="space-y-4 text-lg">
                <p className="text-center leading-relaxed text-gray-200">
                  <span className="font-semibold text-yellow-300">Đại đoàn kết dân tộc</span> là chiến lược cách mạng xuyên suốt do
                  <span className="font-bold text-red-300"> Hồ Chí Minh</span> khởi xướng từ rất sớm.
                </p>
                <p className="text-center leading-relaxed text-gray-200">
                  Đây là <span className="font-bold text-green-300">cội nguồn sức mạnh vô địch</span>, quyết định mọi thắng lợi của cách mạng Việt Nam.
                </p>
                <div className="bg-black/40 rounded-2xl p-6 border border-blue-400/50 mt-6">
                  <p className="text-center text-blue-100 font-medium">
                    <span className="text-yellow-300 font-bold">Ý nghĩa hiện nay:</span> Phải gắn đoàn kết dân tộc với đoàn kết quốc tế,
                    kết hợp sức mạnh dân tộc với sức mạnh thời đại.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
