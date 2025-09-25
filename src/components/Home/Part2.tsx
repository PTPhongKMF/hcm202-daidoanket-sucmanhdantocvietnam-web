import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../aceternityui/draggable-card";
import ReactMarkdown from "react-markdown";
import { TypingAnimation } from "../magicui/Text Animations/TypingAnimation";

const items = [
  {
    text: `
## Ví dụ lịch sử
- **Kháng chiến chống Pháp**: Việt Minh quy tụ công nhân, nông dân, trí thức, tư sản dân tộc.  
- **Kháng chiến chống Mỹ**: Nhân dân cả nước đồng lòng, đồng thời nhận được sự ủng hộ to lớn từ phong trào phản chiến và bạn bè quốc tế.  
    `,
    className: "absolute top-32 left-[55%] rotate-[10deg] prose",
  },
  {
    text: `
## Đoàn kết trong nước và quốc tế
Hồ Chí Minh nhấn mạnh: **đại đoàn kết trong nước phải gắn với đoàn kết quốc tế**, bao gồm:  
- Phong trào cộng sản  
- Phong trào công nhân  
- Các lực lượng tiến bộ  
- Nhân dân yêu chuộng hòa bình trên thế giới  
`,
    className: "absolute top-5 left-[40%] rotate-[8deg] prose",
  },
  {
    text: `
## Vai trò lãnh đạo của Đảng Cộng sản Việt Nam
- Đảng Cộng sản Việt Nam phải là **lực lượng lãnh đạo khối đại đoàn kết**.  
- Muốn làm được điều đó, Đảng:  
  - **Phải đứng vững trên lập trường giai cấp công nhân**  
  - **Kết hợp và giải quyết hài hòa mối quan hệ giữa lợi ích giai cấp và lợi ích dân tộc**  
    `,
    className: "absolute top-40 left-[25%] rotate-[-7deg] prose",
  },
  {
    text: `
# Tư tưởng Hồ Chí Minh về Đại Đoàn Kết

Theo Hồ Chí Minh, **chủ thể của đoàn kết là toàn dân Việt Nam** – không phân biệt:  
- Dân tộc  
- Tôn giáo  
- Giai cấp  
- Giàu nghèo  
- Già trẻ  

Trong đó, lực lượng nòng cốt vững chắc là **liên minh công – nông – trí thức**, dưới sự lãnh đạo của Đảng. Đây là lực lượng đông đảo và trực tiếp trong sản xuất, chiến đấu.  
    `,
    className: "absolute top-10 left-[20%] rotate-[-5deg] prose",
  },
];

const finalText = `
## Ý nghĩa
Điều này cho thấy:  
- Đại đoàn kết **không chỉ là sức mạnh dân tộc** mà còn là **cầu nối để Việt Nam hội nhập quốc tế** trong bối cảnh toàn cầu hóa.  
- Nền tảng càng vững chắc → Khối đại đoàn kết càng mở rộng.  
- **Không một thế lực nào có thể làm suy yếu được sức mạnh ấy.**
`;

export default function Part2() {
  return (
    <div className="w-full h-fit bg-[url(/imgs/anh1-5.jpg)] bg-cover grid auto-rows-auto relative">
      <div className="z-0 absolute size-full top-0 bg-linear-to-b from-gray-50 from-[0.1%] via-transparent to-gray-50 to-99%" />

      <div className="w-full h-210 p-10 bg-amber-100/50">
        <h3 className="flex justify-center items-center relative uppercase text-white font-heading text-5xl mt-6 mb-8 z-10">
          <TypingAnimation
            startOnView={true}
            duration={70}
            className="text-white font-heading text-5xl z-90 [text-shadow:-3px_2px_0px_black] drop-shadow-lg drop-shadow-black"
          >
            Lực lượng của khối đại đoàn kết toàn dân tộc
          </TypingAnimation>
        </h3>

        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip mask-x-from-98% mask-x-to-100% mask-y-from-98% mask-y-to-100%">
          <p className="bg-neutral-100 text-black absolute prose top-1/2 mx-auto max-w-sm -translate-y-3/4 text-start font-semibold p-6 rounded-2xl">
            <ReactMarkdown>{finalText}</ReactMarkdown>
          </p>
          {items.map((item) => (
            <DraggableCardBody className={item.className}>
              <ReactMarkdown>{item.text}</ReactMarkdown>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </div>
  );
}
