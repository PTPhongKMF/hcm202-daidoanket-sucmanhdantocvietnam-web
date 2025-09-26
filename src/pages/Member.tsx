import { CometCard } from "../components/aceternityui/comet-card";
import { DraggableCardBody, DraggableCardContainer } from "../components/aceternityui/draggable-card";
import PinNotePaper from "../components/PinNotePaper";

const members = [
  {
    name: "Phạm Thanh Phong",
    works: "Dev Web, Phản biện, Thiết kế web"
  },
  {
    name: "Nguyễn Vương Văn Khiêm",
    works: "Dev Web, Phản biện, Thiết kế web"
  },
  {
    name: "Hoàng Lê Nhật Minh",
    works: "Dev Web, Phản biện, Thiết kế web"
  },
  {
    name: "Tấn Đạt - TRƯỞNG NHÓM",
    works: "Dev Web, Nghiên cứu giáo trình & rút gọn ý chính, Thuyết trình, điều phối & tổng hợp"
  },
  {
    name: "Trần Nhật Hoàng",
    works: "Dev Web, Phản biện, Thiết kế web"
  },
  {
    name: "Ánh Minh",
    works: "Nghiên cứu giáo trình & rút gọn ý chính, Thuyết trình, Soạn nội dung"
  },
  {
    name: "Yến Vy",
    works: "Nghiên cứu giáo trình & rút gọn ý chính, Thuyết trình, Soạn nội dung"
  }
];

export default function Member() {
  const leftMembers = members.slice(0, 3);
  const centerMember = members[3];
  const rightMembers = members.slice(4, 7);

  return (
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <div className="w-full h-[100svh] bg-amber-100 bg-[url(/imgs/vnmap-3d.png)] bg-blend-multiply bg-cover bg-center flex justify-center items-center gap-32 p-4">
          <div className="flex flex-col gap-8">
            {leftMembers.map((member) => (
              <DraggableCardBody className="size-fit min-h-0 minw-0 bg-transparent overflow-visible p-0">
                <CometCard>
                  <PinNotePaper key={member.name}>
                    <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 text-lg">{member.name}</h3>
                    <p className="text-sm">{member.works}</p>
                  </PinNotePaper>
                </CometCard>
              </DraggableCardBody>

            ))}
          </div>

          <div>
            <DraggableCardBody className="size-fit min-h-0 minw-0 bg-transparent overflow-visible p-0">
              <CometCard>
                <PinNotePaper key={centerMember.name}>
                  <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 text-lg">{centerMember.name}</h3>
                  <p className="text-sm">{centerMember.works}</p>
                </PinNotePaper>
              </CometCard>
            </DraggableCardBody>
          </div>

          <div className="flex flex-col gap-8">
            {rightMembers.map((member) => (
              <DraggableCardBody className="size-fit min-h-0 minw-0 bg-transparent overflow-visible p-0">
                <CometCard>
                  <PinNotePaper key={member.name}>
                    <h3 className="font-bold border-b border-gray-300 pb-1 mb-2 text-lg">{member.name}</h3>
                    <p className="text-sm">{member.works}</p>
                  </PinNotePaper>
                </CometCard>
              </DraggableCardBody>
            ))}
          </div>
        </div>
      </DraggableCardContainer>
  );
}