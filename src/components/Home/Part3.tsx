import { Link } from "react-router";

export default function Part3() {
  const cardData = [
    {
      id: "a",
      title: "Phải lấy lợi ích chung làm điểm quy tụ",
      subtitle: "đồng thời tôn trọng những lợi ích khác biệt chính đáng",
      color: "#FA8072",
      image: "/imgs/Part3/Phải lấy lợi ích chung làm điểm quy tụ.jpg",
      content: [
        "Phải xử lý tốt quan hệ lợi ích, tìm ra điểm tương đồng và lợi ích chung.",
        "Lấy lợi ích tối cao của dân tộc và lợi ích căn bản của nhân dân lao động làm mục tiêu phấn đấu.",
        "Đây là nguyên tắc bất di bất dịch, là ngọn cờ đoàn kết, là mẫu số chung để quy tụ các tầng lớp, giai cấp, dân tộc, tôn giáo trong Mặt trận.",
      ],
    },
    {
      id: "b",
      title: "Kế thừa truyền thống yêu nước",
      subtitle: "nhân nghĩa – đoàn kết",
      color: "#E49B0F",
      image: "/imgs/Part3/Kế thừa truyền thống yêu nước.jpg",
      content: [
        "Yêu nước – nhân nghĩa – đoàn kết là cội nguồn sức mạnh giúp dân tộc vượt qua thiên tai, địch họa và giành thắng lợi.",
      ],
    },
    {
      id: "c",
      title: "Có lòng khoan dung, độ lượng",
      subtitle: "Lời dạy của Chủ tịch Hồ Chí Minh",
      color: "#059669",
      image: "/imgs/Part3/Có lòng khoan dung, độ lượng.jpg",
      content: [
        '"Năm ngón tay có ngón dài ngón ngắn, nhưng cả năm ngón đều thuộc về một bàn tay. Trong mấy triệu người cũng có người thế này thế khác, nhưng thế này hay thế khác đều dòng dõi tổ tiên ta. Vậy nên phải khoan hồng, đại độ... Có như thế mới thành đoàn kết, có đại đoàn kết thì tương lai chắc chắn sẽ vẻ vang."',
      ],
    },
    {
      id: "d",
      title: "Có niềm tin vào nhân dân",
      subtitle: "Nhân dân là nền tảng của cách mạng",
      color: "#6495ED",
      image: "/imgs/Part3/Có niềm tin vào nhân dân.jpg",
      content: [
        "Nhân dân là nền tảng, gốc rễ, chủ thể của mặt trận.",
        "Là chỗ dựa vững chắc của Đảng, là cội nguồn sức mạnh vô tận quyết định thắng lợi của cách mạng.",
        "Muốn thực hiện đại đoàn kết cần yêu dân, tin dân, dựa vào dân, sống và đấu tranh vì hạnh phúc của nhân dân.",
        "Trong kháng chiến, nhờ tin dân và khoan dung, Đảng đã quy tụ được cả những người từng đứng ở phía bên kia nhưng sau đó quay về với dân tộc.",
      ],
    },
  ];

  const renderCard = (card: (typeof cardData)[number]) => (
    <div
      className="card group"
      style={{ "--clr": card.color } as React.CSSProperties}
    >
      <div className="circle">
        <img src={card.image} alt={card.title} className="logo" />
      </div>

      <img
        src={card.image}
        alt={`${card.title} - Đại đoàn kết dân tộc`}
        className="product_img"
      />

      <div className="content">
        <div className="badge">{card.id}</div>
        <h2>{card.title}</h2>
        <p className="subtitle">{card.subtitle}</p>

        <div className="scroll-content">
          {card.content.map((text, index) => (
            <p key={index} className="content-text">
              {card.id === "c" && index === 0 ? (
                <em>"{text.replace(/"/g, "")}"</em>
              ) : (
                text
              )}
            </p>
          ))}
        </div>

        <div className="modern-meaning">
          <strong>Ý nghĩa hôm nay:</strong> Trong xã hội hiện đại, khi mâu thuẫn
          lợi ích xuất hiện, việc đặt lợi ích chung lên cao nhất và có thái độ
          khoan dung vẫn là chìa khóa để giữ gìn sự ổn định và đoàn kết.
        </div>

        <div className="mt-4">
          <Link
            to={`/part3/${card.id}`}
            className="inline-block px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md"
          >
            Xem thêm
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="min-h-screen relative"
      style={{
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/imgs/HCM đoàn kết dân tộc.jpg")',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.75) 50%, rgba(15, 23, 42, 0.85) 100%)",
        }}
      ></div>
      {/* Header */}
      <div className="text-center py-12 relative z-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-6"></div>
        <Link
          to="/part3"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          📖 Xem chi tiết đầy đủ
        </Link>
      </div>

      {/* Cards + Path Stage */}
      <div className="container mx-auto px-6 pb-12 relative z-10">
        <div className="path-stage relative mx-auto" style={{ height: 700 }}>
          {/* Animated star path */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="dashGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
              <filter id="shadow">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="0.6"
                  floodColor="#ef4444"
                  floodOpacity="0.9"
                />
              </filter>
            </defs>
            {/* Five-point star path connecting nodes: A, Meaning, D, B, C, back to A */}
            <path
              id="starPath"
              d="M 12 18 L 50 6 L 88 18 L 70 70 L 30 70 Z"
              fill="none"
              stroke="url(#dashGlow)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="2 3"
              filter="url(#shadow)"
            ></path>
            {/* Moving red dot */}
            <circle r="1.6" fill="#ef4444">
              <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                <mpath href="#starPath" />
              </animateMotion>
            </circle>
            {/* Dash offset animation */}
            <animate
              xlinkHref="#starPath"
              attributeName="stroke-dashoffset"
              from="0"
              to="-50"
              dur="3s"
              repeatCount="indefinite"
            />
          </svg>

          {/* Nodes positioned to match the star points (percent-based, responsive) */}
          <div className="node node-a" style={{ left: "12%", top: "18%" }}>
            {renderCard(cardData[0])}
          </div>
          <div className="node node-mean" style={{ left: "50%", top: "6%" }}>
            <div className="meaning-card">
              <h3>Ôn tập kiến thức</h3>
              <p>Củng cố kiến thức nắm bắt tư tưởng</p>
            </div>
          </div>
          <div className="node node-d" style={{ left: "88%", top: "18%" }}>
            {renderCard(cardData[3])}
          </div>
          <div className="node node-b" style={{ left: "30%", top: "70%" }}>
            {renderCard(cardData[1])}
          </div>
          <div className="node node-c" style={{ left: "70%", top: "70%" }}>
            {renderCard(cardData[2])}
          </div>
        </div>
      </div>

      <style>{`
        .path-stage { max-width: 1100px; }
        .node { position: absolute; transform: translate(-50%, -50%); }
        .meaning-card {
          width: 280px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(2px);
          border-radius: 16px;
          border: 2px dashed #ef4444;
          box-shadow: 0 0 20px rgba(239,68,68,0.35);
          padding: 16px;
          color: #fff;
          text-align: center;
        }
        .meaning-card h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 6px; color: #ef4444; }
        .meaning-card p { font-size: .95rem; color: #e5e7eb; }

        .card {
          position: relative;
          width: 320px;
          height: 380px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
          transition-delay: 0.5s;
          cursor: pointer;
        }

        .card:hover {
          width: 600px;
          transition-delay: 0.5s;
        }

        .card .circle {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .card .circle::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #191919;
          border: 8px solid var(--clr);
          border-radius: 20px;
          transition: 0.5s, background 0.5s;
          transition-delay: 0.75s, 1s;
          filter: drop-shadow(0 0 10px var(--clr)) drop-shadow(0 0 60px var(--clr));
        }

        .card:hover .circle::before {
          transition-delay: 0.5s;
          background: var(--clr);
        }

        .card .circle .logo {
          position: relative;
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 50%;
          transition: 0.5s;
          transition-delay: 0.5s;
          z-index: 2;
        }

        .card:hover .circle .logo {
          transform: scale(0);
          transition-delay: 0s;
        }

        .card .product_img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0) rotate(315deg);
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 50%;
          transition: 0.5s ease-in-out;
        }

        .card:hover .product_img {
          transition-delay: 0.75s;
          top: 50%;
          left: 80%;
          width: 180px;
          height: 180px;
          transform: translate(-50%, -50%) scale(1) rotate(15deg);
        }

        .card .content {
          position: absolute;
          width: 55%;
          left: 15%;
          padding: 20px;
          opacity: 0;
          transition: 0.5s;
          visibility: hidden;
          max-height: 350px;
          overflow-y: auto;
        }

        .card:hover .content {
          transition-delay: 0.75s;
          opacity: 1;
          visibility: visible;
          left: 20px;
        }

        .card .content .badge {
          display: inline-block;
          background: var(--clr);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          text-align: center;
          line-height: 30px;
          font-weight: bold;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .card .content h2 {
          color: #fff;
          text-transform: uppercase;
          font-size: 1.8em;
          line-height: 1.2em;
          margin-bottom: 8px;
        }

        .card .content .subtitle {
          color: #ccc;
          font-size: 0.9em;
          margin-bottom: 15px;
          font-style: italic;
        }

        .card .content .scroll-content {
          max-height: 180px;
          overflow-y: auto;
          margin-bottom: 15px;
          padding-right: 10px;
        }

        .card .content .content-text {
          color: #fff;
          font-size: 0.85em;
          line-height: 1.4em;
          margin-bottom: 10px;
          text-align: justify;
        }

        .card .content .modern-meaning {
          color: #ffd700;
          font-size: 0.8em;
          line-height: 1.3em;
          background: rgba(255, 215, 0, 0.1);
          padding: 8px;
          border-radius: 8px;
          border-left: 3px solid #ffd700;
        }

        .card .content::-webkit-scrollbar {
          width: 4px;
        }

        .card .content::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }

        .card .content::-webkit-scrollbar-thumb {
          background: var(--clr);
          border-radius: 4px;
        }

        .card .content .scroll-content::-webkit-scrollbar {
          width: 4px;
        }

        .card .content .scroll-content::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 4px;
        }

        .card .content .scroll-content::-webkit-scrollbar-thumb {
          background: var(--clr);
          border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .meaning-card { width: 240px; }
          .card { width: 300px; height: 360px; }
        }

        @media (max-width: 768px) {
          .card {
            width: 280px;
            height: 320px;
          }
          
          .card:hover {
            width: 320px;
          }
          
          .meaning-card { width: 210px; }
          .path-stage { height: 620px; }

          .card .content {
            width: 70%;
            left: 10%;
          }
          
          .card:hover .content {
            left: 15px;
          }
          
          .card .content h2 {
            font-size: 1.4em;
          }
        }
      `}</style>
    </section>
  );
}
