import { useState } from "react";
import { Link } from "react-router";
import { Particles } from "../magicui/Special Effect/particles";

// Custom CSS for animations
const customStyles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes pulse-gentle {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-out;
  }
  
  .animate-pulse-gentle {
    animation: pulse-gentle 2s ease-in-out infinite;
  }
  
  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
  }
`;

interface QuizChapter {
  id: string;
  title: string;
  description: string;
  parts: number;
  color: string;
  icon: string;
}

const quizChapters: QuizChapter[] = [
  {
    id: "dai-doan-ket",
    title: "Đại đoàn kết toàn dân tộc",
    description:
      "Kiểm tra kiến thức về đại đoàn kết toàn dân tộc trong tư tưởng Hồ Chí Minh thông qua các câu hỏi đa dạng",
    parts: 15,
    color: "from-orange-500 to-red-600",
    icon: "🤝",
  },
  {
    id: "mat-tran-dan-toc",
    title: "Mặt trận dân tộc thống nhất",
    description:
      "Tìm hiểu về vai trò và nguyên tắc hoạt động của Mặt trận dân tộc thống nhất",
    parts: 15,
    color: "from-blue-500 to-indigo-600",
    icon: "🏛️",
  },
  {
    id: "tu-tuong-ho-chi-minh-dai-doan-ket",
    title: "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc",
    description:
      "Ôn tập kiến thức qua 30 thẻ ghi nhớ flashcard về tư tưởng Hồ Chí Minh",
    parts: 30,
    color: "from-green-500 to-emerald-600",
    icon: "📚",
  },
];

export default function QuizSelection() {
  const [selectedChapter, setSelectedChapter] = useState<string>("");

  return (
    <>
      {/* Inject custom animations */}
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <div
        className="min-h-screen relative p-6 pt-20"
        style={{
          backgroundImage: 'url("/imgs/Quiz đại đoàn kết dân tộc.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      {/* Background overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(15, 23, 42, 0.9) 100%)",
        }}
      ></div>

      {/* Particles Background Effect */}
      <Particles
        className="absolute inset-0 z-[11]"
        quantity={80}
        staticity={30}
        ease={70}
        color="#fbbf24"
        size={1.2}
        vx={0.1}
        vy={0.1}
      />

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            Quiz tương tác
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-4"
            style={{ fontFamily: "cursive" }}
          >
            Quiz
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Đại đoàn kết dân tộc
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hãy chọn một chương để bắt đầu luyện tập với các câu hỏi quiz tương
            tác
          </p>

          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <div className="w-8 h-0.5 bg-amber-400"></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
            <div className="w-8 h-0.5 bg-amber-400"></div>
            <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
          </div>
        </div>

        {/* Quiz Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizChapters.map((chapter) => (
            <div
              key={chapter.id}
              className={`group relative bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-amber-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                selectedChapter === chapter.id ? "ring-2 ring-amber-400" : ""
              }`}
              onClick={() => setSelectedChapter(chapter.id)}
            >
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-600/30 to-transparent rounded-bl-2xl"></div>

              {/* Icon */}
              <div className="text-4xl mb-4">{chapter.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                {chapter.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {chapter.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <Link
                  to={chapter.id === "tu-tuong-ho-chi-minh-dai-doan-ket" ? "/flashcard-study" : `/quiz?chapter=${chapter.id}`}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${chapter.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  {chapter.id === "tu-tuong-ho-chi-minh-dai-doan-ket" ? "Bắt đầu ôn tập" : "Bắt đầu Quiz"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                <span className="text-gray-400 text-sm">
                  {chapter.parts} phần
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Featured Quiz Card (Kahoot) */}
        <div className="mt-16">
          <div className="relative group bg-gradient-to-r from-purple-800 via-violet-700 to-purple-600 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in-up overflow-hidden">
            {/* Kahoot Brand Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-violet-400 to-purple-500 p-[2px]">
              <div className="h-full w-full rounded-3xl bg-gradient-to-r from-purple-800 via-violet-700 to-purple-600"></div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="flex items-start gap-6 relative z-10">
              {/* Animated Kahoot Icon */}
              <div className="text-6xl animate-pulse-gentle">🎉</div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc
                </h3>

                <p className="text-purple-100 text-lg leading-relaxed mb-6">
                  Tham gia ngay trò chơi Kahoot! để kiểm tra kiến thức thú vị
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href="https://play.kahoot.it/v2/?quizId=78a20d77-04e5-4064-be5b-adc1d7e67556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:from-purple-500 hover:to-violet-500 overflow-hidden"
                    onClick={(e) => {
                      // Add ripple effect
                      const button = e.currentTarget;
                      const ripple = document.createElement('span');
                      const rect = button.getBoundingClientRect();
                      const size = Math.max(rect.width, rect.height);
                      const x = e.clientX - rect.left - size / 2;
                      const y = e.clientY - rect.top - size / 2;
                      
                      ripple.style.width = ripple.style.height = size + 'px';
                      ripple.style.left = x + 'px';
                      ripple.style.top = y + 'px';
                      ripple.classList.add('ripple');
                      
                      button.appendChild(ripple);
                      
                      setTimeout(() => {
                        ripple.remove();
                      }, 600);
                    }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                    
                    <span className="relative z-10">🚀 Tham gia Kahoot</span>
                    
                    {/* Play icon */}
                    <svg
                      className="w-5 h-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </a>

                  <div className="flex items-center gap-2 text-purple-200 text-lg">
                    <div className="w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>
                    <span>Live Game</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
