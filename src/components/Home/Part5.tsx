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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/imgs/part1-1.jpg")' }}
      ></div>
      <div className="z-0 absolute size-full top-0 bg-linear-to-b from-gray-50 from-[0.1%] via-transparent to-gray-50 to-99%" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              ref={sec1.ref}
              className={`text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent inline-block transition-all duration-700 ease-out ${sec1.inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
                }`}
            >
              Phương thức xây dựng khối đại đoàn kết dân tộc
            </h1>
            <div className="mt-4 inline-block px-6 py-2 bg-black/40 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl">
              <p className="text-lg text-white/90 font-medium">
                Thực hành dân vận, tổ chức, quy tụ sức mạnh
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Phần 1 */}
            <div
              ref={sec2.ref}
              className={`bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/50 shadow-2xl transition-all duration-700 ease-out transform ${sec2.inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                } hover:shadow-3xl hover:-translate-y-1`}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Làm tốt công tác vận động quần chúng (dân vận)
              </h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                Đây là phương thức cơ bản nhất. Hồ Chí Minh khẳng định:
                <span className="font-bold text-yellow-300 italic">
                  {' '}
                  "Dân vận khéo thì việc gì cũng thành công."
                </span>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Phải gần dân, hiểu dân, tin dân và làm cho dân tin Đảng</li>
                <li>
                  Hồ Chí Minh dặn:
                  <span className="italic text-blue-300">
                    "cần phải chịu khó tìm đủ cách giải thích cho họ hiểu rằng: những việc đó là vì ích lợi của họ mà phải làm"
                  </span>
                </li>
                <li>
                  Theo Hồ Chí Minh mọi phương pháp tiếp cận và vận động quần chúng đều phải phù hợp với tâm tư, nguyện vọng của quần chúng
                </li>
                <li>
                  Phải xuất phát từ thực tế trình độ dân trí và văn hoá, theo cả nghĩa rộng và nghĩa hẹp, bao gồm cả phong tục, tập quán và cụ thể đối với từng địa phương, từng đối tượng của nhân dân
                </li>
              </ul>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open1
                  ? 'max-h-[1000px] opacity-100 mt-4'
                  : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="bg-black/30 rounded-2xl p-4 border border-white/20">
                  <p className="text-gray-200 leading-relaxed">
                    Dân vận không chỉ là tuyên truyền mà còn là tổ chức, lắng
                    nghe và phản hồi kịp thời lợi ích chính đáng của nhân dân.
                    Theo Hồ Chí Minh, mọi phương pháp tiếp cận và vận động quần chúng đều phải phù hợp với tâm tư, nguyện vọng của quần chúng; đồng thời phải xuất phát từ thực tế trình độ dân trí và văn hoá, theo cả nghĩa rộng và nghĩa hẹp, bao gồm cả phong tục, tập quán và cụ thể đối với từng địa phương, từng đối tượng của nhân dân.
                  </p>
                  <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1">
                    <li>
                      Cán bộ dân vận cần "gần dân, trọng dân, hiểu dân, học
                      dân".
                    </li>
                    <li>
                      Phải gần dân, hiểu dân, tin dân và làm cho dân tin Đảng.
                    </li>
                    <li>
                      Xây dựng cơ chế đối thoại định kỳ giữa chính quyền và người dân.
                    </li>
                    <li>
                      Phát huy vai trò giám sát, phản biện xã hội của Mặt trận và các đoàn thể.
                    </li>
                    <li>
                      Nhân rộng các mô hình "Dân vận khéo" gắn với mục tiêu cụ thể.
                    </li>
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

            {/* Phần 2 */}
            <div
              ref={sec3.ref}
              className={`bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-emerald-400/50 shadow-2xl transition-all duration-700 ease-out transform ${sec3.inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                } hover:shadow-3xl hover:-translate-y-1`}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Mỗi tầng lớp đều có tổ chức đại diện để tập hợp quần chúng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Công nhân',
                    org: 'Công đoàn',
                    color: 'bg-red-500'
                  },
                  {
                    name: 'Thanh niên',
                    org: 'Đoàn Thanh niên',
                    color: 'bg-green-500'
                  },
                  {
                    name: 'Phụ nữ',
                    org: 'Hội Liên hiệp Phụ nữ',
                    color: 'bg-pink-500'
                  },
                  {
                    name: 'Nông dân',
                    org: 'Hội Nông dân',
                    color: 'bg-yellow-500'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-black/30 p-4 rounded-2xl border border-white/20 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                      <span className="font-semibold text-gray-200">
                        {item.name}
                      </span>
                      <span className="text-gray-400">→</span>
                      <span className="text-blue-300 font-medium">
                        {item.org}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-200 italic">
                <strong>Mục đích:</strong> Gắn kết các tầng lớp vào khối đoàn
                kết chung.
              </p>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open2
                  ? 'max-h-[1000px] opacity-100 mt-4'
                  : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="bg-black/30 rounded-2xl p-4 border border-white/20">
                  <p className="text-gray-200 leading-relaxed">
                    Ngoài các tầng lớp cơ bản, cần mở rộng mặt trận đoàn kết tới
                    các trí thức, doanh nhân, văn nghệ sĩ, kiều bào ở nước
                    ngoài. Bên cạnh đó, phải hoàn thiện khung pháp lý để bảo đảm
                    các tổ chức này hoạt động hiệu quả, minh bạch.
                  </p>
                  <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1">
                    <li>
                      Thiết lập cơ chế phối hợp liên thông, tránh chồng chéo.
                    </li>
                    <li>
                      Kết nối mạng lưới chuyên gia, trí thức để đóng góp sáng
                      kiến phát triển.
                    </li>
                    <li>
                      Khuyến khích các hoạt động tình nguyện, an sinh xã hội
                      thường xuyên.
                    </li>
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

            {/* Phần 3 */}
            <div
              ref={sec4.ref}
              className={`bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/50 shadow-2xl transition-all duration-700 ease-out transform ${sec4.inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                } hover:shadow-3xl hover:-translate-y-1`}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Quy tụ các đoàn thể vào Mặt trận dân tộc thống nhất
              </h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                Đây là bước phát triển cao hơn: các đoàn thể cùng quy tụ về một
                <span className="font-bold text-purple-300">
                  {' '}
                  “ngôi nhà chung”
                </span>{' '}
                – Mặt trận dân tộc thống nhất.
              </p>
              <div className="bg-black/30 p-4 rounded-2xl border border-white/20">
                <p className="text-gray-200">
                  <strong>Kết quả:</strong> Nhờ đó tránh chia rẽ, tạo nên sức
                  mạnh tổng hợp của toàn dân tộc.
                </p>
              </div>
              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open3
                  ? 'max-h-[1000px] opacity-100 mt-4'
                  : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="bg-black/30 rounded-2xl p-4 border border-white/20">
                  <p className="text-gray-200 leading-relaxed">
                    Hồ Chí Minh chỉ rõ:
                    <span className="italic text-purple-300">
                      "Mặt trận dân tộc thống nhất vẫn là một trong những lực lượng to lớn của cách mạng Việt Nam...Phải đoàn kết tốt các đảng phái, các đoàn thể, các nhân sĩ trong Mặt trận Tổ quốc Việt Nam, thực hiện hợp tác lâu dài, giúp đỡ lẫn nhau, cùng nhau tiến bộ. Phải đoàn kết các dân tộc anh em,cùng nhau xây dựng Tổ quốc... Phải đoàn kết chặt chẽ giữa đồng bào lương và đồng bào các tôn giáo, cùng nhau xây dựng đời sống hòa thuận ấm no, xây dựng Tổ quốc"
                    </span>
                  </p>
                  <ul className="mt-3 list-disc list-inside text-gray-200 space-y-1">
                    <li>
                      Đoàn kết các dân tộc anh em, đồng bào lương – giáo trong
                      tinh thần hòa hợp.
                    </li>
                    <li>
                      Phải đoàn kết tốt các đảng phái, các đoàn thể, các nhân sĩ trong Mặt trận Tổ quốc Việt Nam.
                    </li>
                    <li>
                      Thực hiện hợp tác lâu dài, giúp đỡ lẫn nhau, cùng nhau tiến bộ.
                    </li>
                    <li>
                      Đẩy mạnh công tác đối ngoại nhân dân, mở rộng đoàn kết quốc
                      tế.
                    </li>
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

            {/* Phần 4 - Ý nghĩa */}
            <div
              ref={sec5.ref}
              className={`bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-red-400/50 text-center shadow-2xl transition-all duration-700 ease-out transform ${sec5.inView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                } hover:shadow-3xl`}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Ý nghĩa của đại đoàn kết dân tộc
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Đại đoàn kết dân tộc là sức mạnh nội sinh, là động lực quan
                trọng để xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.
              </p>
            </div>

            {/* Kết luận */}
            <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-12 border border-white/30 shadow-2xl transition-all duration-700 ease-out">
              <h2 className="text-4xl font-bold text-center mb-6 text-white">
                KẾT LUẬN
              </h2>
              <div className="space-y-4 text-lg">
                <p className="text-center leading-relaxed text-gray-200">
                  <span className="font-semibold text-yellow-300">
                    Đại đoàn kết toàn dân tộc
                  </span>{' '}
                  là chiến lược cách mạng cơ bản, xuyên suốt và lâu dài trong tư tưởng
                  <span className="font-bold text-red-300"> Hồ Chí Minh</span>.
                </p>
                <p className="text-center leading-relaxed text-gray-200">
                  Đây là{' '}
                  <span className="font-bold text-green-300">
                    cội nguồn sức mạnh vô địch
                  </span>
                  , quyết định mọi thắng lợi của cách mạng Việt Nam trong kháng chiến và xây dựng đất nước.
                </p>
                <p className="text-center leading-relaxed text-gray-200">
                  Hồ Chí Minh khẳng định: đoàn kết vừa là mục tiêu, vừa là động lực, là then chốt của thành công.
                </p>

                <div className="bg-black/40 rounded-2xl p-6 border border-blue-400/50 mt-6">
                  <h3 className="text-xl font-bold text-center mb-4 text-blue-300">
                    Để xây dựng đoàn kết cần:
                  </h3>
                  <ul className="list-disc list-inside text-blue-100 space-y-2">
                    <li>Đặt lợi ích chung dân tộc lên cao nhất</li>
                    <li>Kế thừa truyền thống yêu nước – nhân nghĩa – đoàn kết</li>
                    <li>Có lòng khoan dung, tin dân và dựa vào dân</li>
                    <li>Hình thức tổ chức là Mặt trận dân tộc thống nhất</li>
                    <li>Hoạt động theo nguyên tắc liên minh công – nông – trí thức dưới sự lãnh đạo của Đảng</li>
                    <li>Hiệp thương dân chủ, đoàn kết lâu dài</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 border border-green-400/50 mt-6">
                  <h3 className="text-xl font-bold text-center mb-4 text-green-300">
                    Phương thức cơ bản:
                  </h3>
                  <ul className="list-disc list-inside text-green-100 space-y-2">
                    <li>Dân vận khéo</li>
                    <li>Tổ chức quần chúng</li>
                    <li>Quy tụ vào Mặt trận để tạo sức mạnh tổng hợp</li>
                  </ul>
                </div>

                <div className="bg-black/40 rounded-2xl p-6 border border-yellow-400/50 mt-6">
                  <p className="text-center text-yellow-100 font-medium">
                    <span className="text-yellow-300 font-bold">
                      Trong giai đoạn hiện nay:
                    </span>{' '}
                    Cần gắn đoàn kết dân tộc với đoàn kết quốc tế, kết hợp sức
                    mạnh dân tộc với sức mạnh thời đại.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-2xl p-6 border border-red-400/50 mt-6">
                  <p className="text-center text-white font-medium">
                    Qua chuyên đề này, bài viết đã làm rõ một phần quan trọng trong hệ thống tư tưởng Hồ Chí Minh, đáp ứng một phần yêu cầu môn học, đồng thời giúp người học củng cố tinh thần yêu nước và trách nhiệm công dân.
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
