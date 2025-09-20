import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const quizData: Question[] = [
  {
    id: 1,
    question:
      'Hồ Chí Minh nhấn mạnh: "Đoàn kết là sức mạnh, đoàn kết là thắng lợi." Câu nói này thể hiện điều gì về vai trò của đại đoàn kết trong cách mạng?',
    options: [
      "Là nhiệm vụ nhất thời",
      "Là mục tiêu và nhiệm vụ hàng đầu",
      "Chỉ cần trong giai đoạn kháng chiến",
      "Chỉ là khẩu hiệu chính trị",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question:
      "Vì sao các phong trào Cần Vương, Đông Du, Đông Kinh Nghĩa Thục… cuối thế kỷ XIX thất bại?",
    options: [
      "Do thiếu sự lãnh đạo của Đảng",
      "Do chưa tập hợp được sức mạnh toàn dân",
      "Do lực lượng vũ trang yếu",
      "Do không có sự ủng hộ quốc tế",
    ],
    correctAnswer: 1,
  },
  {
    id: 3,
    question:
      "Thắng lợi nào chứng minh rõ ràng nhất sức mạnh đại đoàn kết toàn dân tộc?",
    options: [
      "Khởi nghĩa Yên Thế",
      "Cách mạng Tháng Tám 1945",
      "Chiến thắng Điện Biên Phủ 1954",
      "Công cuộc Đổi mới 1986",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question:
      "Theo Hồ Chí Minh, lực lượng nòng cốt vững chắc trong khối đại đoàn kết là:",
    options: [
      "Công – thương – binh",
      "Công – nông – trí thức",
      "Nông dân – trí thức – phụ nữ",
      "Công – nông – quân đội",
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question:
      "Trong kháng chiến chống Mỹ, yếu tố nào thể hiện đoàn kết quốc tế?",
    options: [
      "Sự tham gia của trí thức miền Nam",
      "Sự ủng hộ từ phong trào phản chiến và bạn bè quốc tế",
      "Vai trò lãnh đạo của Đảng",
      "Liên minh công – nông – trí thức",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question:
      "Một trong những điều kiện quan trọng để xây dựng khối đại đoàn kết toàn dân tộc là:",
    options: [
      "Chỉ bảo vệ lợi ích của giai cấp công nhân",
      "Lấy lợi ích tối cao của dân tộc và lợi ích căn bản của nhân dân làm mục tiêu",
      "Ưu tiên lợi ích quốc tế hơn lợi ích dân tộc",
      "Tách biệt lợi ích giai cấp và lợi ích dân tộc",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question:
      'Câu nói: "Năm ngón tay có ngón dài ngón ngắn… nhưng đều thuộc về một bàn tay" thể hiện phẩm chất nào cần có để xây dựng đại đoàn kết?',
    options: [
      "Lòng trung thành",
      "Tinh thần hy sinh",
      "Lòng khoan dung, độ lượng",
      "Ý chí kiên cường",
    ],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "Mặt trận dân tộc thống nhất là gì?",
    options: [
      "Tổ chức quân sự do Đảng lãnh đạo",
      "Nơi quy tụ mọi tổ chức, cá nhân yêu nước trong và ngoài nước",
      "Liên minh chính trị ngắn hạn",
      "Tổ chức của riêng công nhân và nông dân",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "Nguyên tắc hoạt động của Mặt trận dân tộc thống nhất là gì?",
    options: [
      "Hiệp thương dân chủ, đặt lợi ích dân tộc lên trên hết",
      "Đảng quyết định tất cả, không cần bàn bạc",
      "Đoàn kết tạm thời để đạt mục tiêu ngắn hạn",
      "Mỗi thành viên hoạt động riêng rẽ",
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question:
      'Hồ Chí Minh khẳng định: "Dân vận khéo thì việc gì cũng thành công." Câu nói này nhấn mạnh phương thức nào trong xây dựng khối đại đoàn kết?',
    options: [
      "Công tác dân vận",
      "Phát triển kinh tế",
      "Cải cách giáo dục",
      "Đoàn kết quốc tế",
    ],
    correctAnswer: 0,
  },
];

// Function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Quiz() {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>(() => shuffleArray(quizData));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(quizData.length).fill(-1)
  );
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(selectedAnswers[currentQuestion + 1]);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(selectedAnswers[currentQuestion - 1]);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === shuffledQuestions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setShuffledQuestions(shuffleArray(quizData));
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quizData.length).fill(-1));
    setShowResults(false);
    setSelectedOption(-1);
  };

  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / shuffledQuestions.length) * 100;

    return (
      <div 
        className="min-h-screen relative p-6 pt-20"
        style={{
          backgroundImage: 'url("/imgs/Quiz đại đoàn kết dân tộc.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1
        }}
      >
        {/* Background overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(15, 23, 42, 0.9) 100%)',
            zIndex: 2
          }}
        ></div>
        <div className="max-w-4xl mx-auto relative z-40">
          {/* Header Results */}
          <div className="bg-black/80 rounded-3xl shadow-2xl p-8 mb-6">
            <div className="flex items-center justify-between text-white mb-6">
              <div className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <h1 className="text-3xl font-bold">Kết quả Quiz</h1>
              </div>
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Làm lại Quiz
              </button>
            </div>

            <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">
                  {score}/{shuffledQuestions.length}
                </div>
                <p className="text-xl text-gray-300 mb-4">
                  Bạn đã trả lời đúng {score} trên {shuffledQuestions.length} câu hỏi
                </p>

              <div className="mb-6">
                {percentage >= 80 ? (
                  <div className="text-green-400">
                    <p className="text-lg font-semibold">Xuất sắc! 🎉</p>
                    <p>
                      Bạn đã nắm vững kiến thức về đại đoàn kết dân tộc trong tư
                      tưởng Hồ Chí Minh.
                    </p>
                  </div>
                ) : percentage >= 60 ? (
                  <div className="text-blue-400">
                    <p className="text-lg font-semibold">Khá tốt! 👍</p>
                    <p>
                      Bạn có hiểu biết cơ bản, hãy tiếp tục học tập để nâng cao
                      kiến thức.
                    </p>
                  </div>
                ) : (
                  <div className="text-orange-400">
                    <p className="text-lg font-semibold">
                      Cần cố gắng thêm! 💪
                    </p>
                    <p>Hãy ôn tập lại các nội dung về đại đoàn kết dân tộc.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="space-y-4">
            {shuffledQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;

              return (
                <div
                  key={question.id}
                  className="bg-black/80 rounded-2xl border-2 border-gray-700 p-6"
                >
                  {/* Question */}
                  <h3 className="text-white font-semibold mb-4 leading-relaxed">
                    {question.question}
                  </h3>

                  {/* User's Answer */}
                  {userAnswer !== -1 && (
                    <div
                      className={`flex items-start gap-3 p-4 rounded-xl border-2 mb-3 ${
                        isCorrect
                          ? "border-green-500 bg-green-500/10"
                          : "border-red-500 bg-red-500/10"
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                          isCorrect ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {isCorrect ? (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <p
                          className={`font-medium ${
                            isCorrect ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {isCorrect ? "Đáp án đúng: " : "Đáp án sai: "}
                          {question.options[userAnswer]}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Correct Answer (if user was wrong) */}
                  {!isCorrect && (
                    <div className="flex items-start gap-3 p-4 rounded-xl border-2 border-green-500 bg-green-500/10">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-green-400 font-medium">
                          Đáp án đúng:{" "}
                          {question.options[question.correctAnswer]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen relative flex items-center justify-center p-6 pt-20"
      style={{
        backgroundImage: 'url("/imgs/Quiz đại đoàn kết dân tộc.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1
      }}
    >
      {/* Background overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(15, 23, 42, 0.9) 100%)',
          zIndex: 2
        }}
      ></div>
      <div className="max-w-4xl w-full relative z-40">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Progress */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-6">
            <div className="flex items-center justify-between text-white mb-4">
              <h1 className="text-2xl font-bold">Quiz: Đại Đoàn Kết Dân Tộc</h1>
              <span className="text-lg font-semibold">
                {currentQuestion + 1}/{shuffledQuestions.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Content */}
          <div className="p-8">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
                {shuffledQuestions[currentQuestion].question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {shuffledQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                    selectedOption === index
                      ? "border-red-500 bg-red-50 text-red-700 shadow-lg"
                      : "border-gray-200 hover:border-red-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <span
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 text-sm font-semibold ${
                        selectedOption === index
                          ? "border-red-500 bg-red-500 text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {String.fromCharCode(97 + index)}
                    </span>
                    <span className="text-gray-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentQuestion === 0
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-600 text-white hover:bg-gray-700 transform hover:scale-105"
                }`}
              >
                ← Câu trước
              </button>

              <button
                onClick={handleNext}
                disabled={selectedOption === -1}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedOption === -1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-red-600 to-yellow-600 text-white hover:from-red-700 hover:to-yellow-700 transform hover:scale-105 shadow-lg"
                }`}
              >
                {currentQuestion === shuffledQuestions.length - 1
                  ? "Hoàn thành"
                  : "Câu tiếp →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
