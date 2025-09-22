export default function Part4() {
  return (
    <div className="min-h-screen relative pt-20">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/imgs/Bác%20Hồ%20với%20quân%20đội.jpg")'
        }}
      ></div>
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      ></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
            <h1 className="text-5xl font-bold mb-4">
              Hình thức, nguyên tắc tổ chức
            </h1>
            <h2 className="text-3xl font-semibold">
              Khối đại đoàn kết toàn dân tộc
            </h2>
          </div>
          <div className="mt-6 inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <p className="text-xl text-white font-medium">
              Mặt trận dân tộc thống nhất
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section A: Hình thức tổ chức */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-6">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Hình thức tổ chức</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>

            {/* Definition Card */}
            <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/30 shadow-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mặt trận dân tộc thống nhất</h3>
                  <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                    Là hình thức tập hợp, quy tụ mọi lực lượng yêu nước thành một khối vững chắc.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Đây là nơi đoàn kết mọi tổ chức, cá nhân yêu nước, mọi tầng lớp nhân dân Việt Nam, 
                    cả trong nước và kiều bào sinh sống ở nước ngoài.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-emerald-400/50 shadow-2xl">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Nhiệm vụ</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Đưa quần chúng vào các tổ chức yêu nước phù hợp với từng giai đoạn cách mạng, 
                    từng ngành nghề, giới, lứa tuổi, tôn giáo.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Các tên gọi của Mặt trận qua từng giai đoạn
              </h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-purple-500 rounded-full"></div>
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {[
                    { year: "1936", name: "Mặt trận Dân chủ Đông Dương", color: "from-red-500 to-red-600" },
                    { year: "1939", name: "Mặt trận Nhân dân phản đế Đông Dương", color: "from-orange-500 to-orange-600" },
                    { year: "1941", name: "Mặt trận Việt Minh", color: "from-yellow-500 to-yellow-600" },
                    { year: "1951", name: "Mặt trận Liên Việt", color: "from-green-500 to-green-600" },
                    { year: "1960", name: "Mặt trận Dân tộc Giải phóng miền Nam Việt Nam", color: "from-blue-500 to-blue-600" },
                    { year: "1968", name: "Liên minh các lực lượng Dân tộc, Dân chủ và Hòa bình Việt Nam", color: "from-indigo-500 to-indigo-600" },
                    { year: "1955, 1976", name: "Mặt trận Tổ quốc Việt Nam", color: "from-purple-500 to-purple-600" }
                  ].map((item, index) => (
                    <div key={index} className="relative flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center z-10 border-4 border-white/20 shadow-lg`}>
                        <span className="text-white font-bold text-sm">{item.year}</span>
                      </div>
                      <div className="ml-8 bg-black/30 backdrop-blur-sm rounded-2xl p-6 flex-1 border border-white/30 hover:bg-black/40 transition-all duration-300">
                        <h4 className="text-xl font-semibold text-white mb-2">{item.name}</h4>
                        <p className="text-gray-300">({item.year})</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section B: Nguyên tắc xây dựng và hoạt động */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mr-6">
                <span className="text-2xl font-bold text-white">B</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Nguyên tắc xây dựng và hoạt động</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Principle 1 */}
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-blue-400/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Nền tảng liên minh</h3>
                <p className="text-gray-200 mb-4">
                  Xây dựng trên nền tảng liên minh công – nông – trí thức, dưới sự lãnh đạo của Đảng
                </p>
                <div className="space-y-3">
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-sm text-gray-200">
                      <span className="font-semibold text-blue-300">Công – nông</span> là lực lượng chủ yếu, chiếm số đông, trực tiếp sản xuất ra của cải.
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-sm text-gray-200">
                      <span className="font-semibold text-cyan-300">Liên minh công – nông – trí thức</span> là nền tảng vững chắc.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 2 */}
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-purple-400/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Hiệp thương dân chủ</h3>
                <p className="text-gray-200 mb-4">
                  Hoạt động theo nguyên tắc hiệp thương dân chủ
                </p>
                <div className="space-y-3">
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-sm text-gray-200">
                      Mọi vấn đề đều phải bàn bạc công khai, cùng đi đến nhất trí.
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-sm text-gray-200">
                      Đặt lợi ích dân tộc lên trên hết.
                    </p>
                  </div>
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-sm text-gray-200">
                      Tinh thần <span className="font-semibold text-purple-300 italic">"thấu tình đạt lý"</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principle 3 */}
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-yellow-400/50 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Đoàn kết lâu dài</h3>
                <p className="text-gray-200 mb-4">
                  Đoàn kết lâu dài, chặt chẽ, chân thành, thân ái
                </p>
                <div className="space-y-3">
                  <div className="bg-black/30 rounded-lg p-3">
                    <p className="text-sm text-gray-200">
                      Không phải đoàn kết tạm thời mà là sự gắn bó bền vững.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg p-3 border border-red-400/30">
                    <p className="text-sm text-gray-200 italic">
                      <span className="font-semibold text-red-300">Hồ Chí Minh:</span> đoàn kết phải xuất phát từ lợi ích chung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-12 border border-white/30 shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Ý NGHĨA QUAN TRỌNG
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-xl text-gray-200 leading-relaxed">
                  <span className="font-semibold text-yellow-300">Mặt trận dân tộc thống nhất</span> là hình thức tổ chức 
                  <span className="font-bold text-green-300"> đặc sắc và hiệu quả</span> để tập hợp sức mạnh toàn dân tộc.
                </p>
                <p className="text-xl text-gray-200 leading-relaxed">
                  Với các nguyên tắc hoạt động khoa học, nó đã trở thành 
                  <span className="font-bold text-blue-300"> nền tảng vững chắc</span> cho mọi thắng lợi của cách mạng Việt Nam.
                </p>
                <div className="bg-black/40 rounded-2xl p-6 border border-blue-400/50">
                  <p className="text-lg text-blue-100 font-medium">
                    <span className="text-yellow-300 font-bold">Giá trị hiện đại:</span> Nguyên tắc hiệp thương dân chủ và đoàn kết lâu dài 
                    vẫn là kim chỉ nam cho việc xây dựng khối đại đoàn kết toàn dân tộc trong thời kỳ mới.
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