
export default function Part5() {
  return (
    <div className="min-h-screen bg-[url(/imgs/part1-1.jpg)] bg-cover bg-center bg-fixed pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
            Phương thức xây dựng khối đại đoàn kết dân tộc
          </h1>

          <div className="space-y-8">
            {/* Phần 1: Làm tốt công tác vận động quần chúng */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Làm tốt công tác vận động quần chúng (dân vận)
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Đây là phương thức cơ bản nhất. Hồ Chí Minh khẳng định:
                <span className="font-bold text-red-600 italic"> "Dân vận khéo thì việc gì cũng thành công."</span>
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Phải gần dân, hiểu dân, tin dân và làm cho dân tin Đảng</li>
                <li>Thành lập các đoàn thể, tổ chức quần chúng phù hợp</li>
              </ul>
            </div>

            {/* Phần 2: Tổ chức các tầng lớp */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-500">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Mỗi tầng lớp đều có tổ chức đại diện để tập hợp quần chúng
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">Công nhân</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-blue-600 font-medium">Công đoàn</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">Thanh niên</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-blue-600 font-medium">Đoàn Thanh niên</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">Phụ nữ</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-blue-600 font-medium">Hội Liên hiệp Phụ nữ</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="font-semibold text-gray-800">Nông dân</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-blue-600 font-medium">Hội Nông dân</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic">
                <strong>Mục đích:</strong> Gắn kết các tầng lớp vào khối đoàn kết chung.
              </p>
            </div>

            {/* Phần 3: Quy tụ các đoàn thể */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-800 mb-4">
                Quy tụ các đoàn thể vào Mặt trận dân tộc thống nhất
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Đây là bước phát triển cao hơn: các đoàn thể cùng quy tụ về một
                <span className="font-bold text-purple-600"> "ngôi nhà chung"</span> – Mặt trận dân tộc thống nhất.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <strong>Kết quả:</strong> Nhờ đó tránh chia rẽ, tạo nên sức mạnh tổng hợp của toàn dân tộc.
                </p>
              </div>
            </div>

            {/* Phần kết luận */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border-l-4 border-red-500 text-center">
              <h3 className="text-xl font-semibold text-red-800 mb-3">
                Ý nghĩa của đại đoàn kết dân tộc
              </h3>
              <p className="text-gray-700 text-lg">
                Đại đoàn kết dân tộc là sức mạnh nội sinh, là động lực quan trọng để xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.
              </p>
            </div>

            {/* Kết luận */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-xl shadow-2xl">
              <h2 className="text-3xl font-bold text-center mb-6 text-yellow-400">
                KẾT LUẬN
              </h2>
              <div className="space-y-4 text-lg">
                <p className="text-center leading-relaxed">
                  <span className="font-semibold text-yellow-300">Đại đoàn kết dân tộc</span> là chiến lược cách mạng xuyên suốt do
                  <span className="font-bold text-red-300"> Hồ Chí Minh</span> khởi xướng từ rất sớm.
                </p>
                <p className="text-center leading-relaxed">
                  Đây là <span className="font-bold text-green-300">cội nguồn sức mạnh vô địch</span>, quyết định mọi thắng lợi của cách mạng Việt Nam.
                </p>
                <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-4 rounded-lg mt-6">
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
