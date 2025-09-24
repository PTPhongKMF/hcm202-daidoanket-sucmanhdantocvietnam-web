import { Link } from "react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import NavBar from "../NavBar";
import data from "../../data/dai-doan-ket.json";

type SectionData = {
  id: string;
  label: string;
  subtitle: string;
  teaser: string;
  color: string;
  image: string;
  content: string;
};

type CarouselItem = {
  id: string;
  index: number;
  title: string;
  teaser: string;
  heroImage: string;
  badge: string;
  highlight: boolean;
  contentHtml: string;
  color: string;
  // Detailed content for modal
  subtitle?: string;
  quote?: {
    text: string;
    source: string;
  };
  mainPoints?: string[];
  media?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
    caption?: string;
  };
  examples?: Array<{
    title: string;
    desc: string;
    link?: string | null;
    external?: boolean;
  }>;
  references?: string[];
  footerNote?: string;
};

type PageData = {
  pageTitle: string;
  hero: {
    subtitle: string;
    highlight: string;
  };
  sections: SectionData[];
  references: Array<{
    title: string;
    note: string;
  }>;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
};

// Carousel data structure
const carouselData: CarouselItem[] = [
  {
    id: "a-loi-ich-chung",
    index: 1,
    title: "Phải lấy lợi ích chung làm điểm quy tụ",
    teaser: "đồng thời tôn trọng những lợi ích khác biệt chính đáng",
    heroImage: "/imgs/Part3/Phải lấy lợi ích chung làm điểm quy tụ.jpg",
    badge: "Mục tiêu 1",
    highlight: true,
    contentHtml: "Phải lấy lợi ích chung làm điểm quy tụ, đồng thời tôn trọng những lợi ích khác biệt chính đáng. Phải xử lý tốt quan hệ lợi ích, tìm ra điểm tương đồng và lợi ích chung. Lấy lợi ích tối cao của dân tộc và lợi ích căn bản của nhân dân lao động làm mục tiêu phấn đấu.",
    color: "#dc2626",
    subtitle: "Xây dựng khối đại đoàn kết toàn dân tộc",
    quote: {
      text: "Phải xử lý tốt quan hệ lợi ích, tìm ra điểm tương đồng và lợi ích chung. Lấy lợi ích tối cao của dân tộc và lợi ích căn bản của nhân dân lao động làm mục tiêu phấn đấu.",
      source: "Chủ tịch Hồ Chí Minh"
    },
    mainPoints: [
      "Xử lý tốt quan hệ lợi ích giữa các tầng lớp xã hội",
      "Tìm ra điểm tương đồng và lợi ích chung",
      "Lấy lợi ích tối cao của dân tộc làm mục tiêu",
      "Tôn trọng những lợi ích khác biệt chính đáng"
    ],
    media: {
      type: "image",
      src: "/imgs/Part3/Phải lấy lợi ích chung làm điểm quy tụ.jpg",
      alt: "Đại đoàn kết dân tộc",
      caption: "Đại đoàn kết toàn dân tộc là sức mạnh vô địch"
    },
    examples: [
      {
        title: "Chính sách đại đoàn kết dân tộc",
        desc: "Xây dựng khối đại đoàn kết toàn dân tộc trong thời kỳ đổi mới",
        link: "https://example.vn/dai-doan-ket",
        external: true
      },
      {
        title: "Đoàn kết các tôn giáo",
        desc: "Tôn trọng quyền tự do tín ngưỡng, tôn giáo của nhân dân",
        link: null,
        external: false
      }
    ],
    references: [
      "Toàn tập Hồ Chí Minh — tập 5, trang 123",
      "Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc"
    ],
    footerNote: "Tư tưởng Hồ Chí Minh về đại đoàn kết dân tộc"
  },
  {
    id: "b-truyen-thong",
    index: 2,
    title: "Kế thừa truyền thống yêu nước",
    teaser: "nhân nghĩa – đoàn kết",
    heroImage: "/imgs/Part3/Kế thừa truyền thống yêu nước.jpg",
    badge: "Mục tiêu 2",
    highlight: false,
    contentHtml: "Yêu nước – nhân nghĩa – đoàn kết là cội nguồn sức mạnh giúp dân tộc vượt qua thiên tai, địch họa và giành thắng lợi.",
    color: "#d97706",
    subtitle: "Truyền thống dân tộc Việt Nam",
    quote: {
      text: "Yêu nước – nhân nghĩa – đoàn kết là cội nguồn sức mạnh giúp dân tộc vượt qua thiên tai, địch họa và giành thắng lợi.",
      source: "Chủ tịch Hồ Chí Minh"
    },
    mainPoints: [
      "Truyền thống yêu nước nồng nàn",
      "Tinh thần nhân nghĩa cao cả",
      "Truyền thống đoàn kết dân tộc",
      "Sức mạnh vượt qua mọi khó khăn"
    ],
    media: {
      type: "image",
      src: "/imgs/Part3/Kế thừa truyền thống yêu nước.jpg",
      alt: "Truyền thống yêu nước",
      caption: "Truyền thống yêu nước của dân tộc Việt Nam"
    },
    examples: [
      {
        title: "Lịch sử dựng nước và giữ nước",
        desc: "Từ thời Hùng Vương đến thời đại Hồ Chí Minh",
        link: null,
        external: false
      }
    ],
    references: [
      "Toàn tập Hồ Chí Minh — tập 6, trang 89"
    ],
    footerNote: "Truyền thống dân tộc Việt Nam"
  },
  {
    id: "c-khoan-dung",
    index: 3,
    title: "Có lòng khoan dung, độ lượng",
    teaser: "Lời dạy của Chủ tịch Hồ Chí Minh",
    heroImage: "/imgs/Part3/Có lòng khoan dung, độ lượng.jpg",
    badge: "Mục tiêu 3",
    highlight: true,
    contentHtml: "Hồ Chí Minh dạy: \"Năm ngón tay có ngón dài ngón ngắn, nhưng cả năm ngón đều thuộc về một bàn tay. Trong mấy triệu người cũng có người thế này thế khác, nhưng thế này hay thế khác đều dòng dõi tổ tiên ta. Vậy nên phải khoan hồng, đại độ... Có như thế mới thành đoàn kết, có đại đoàn kết thì tương lai chắc chắn sẽ vẻ vang.\"",
    color: "#059669",
    subtitle: "Tinh thần khoan dung, độ lượng",
    quote: {
      text: "Năm ngón tay có ngón dài ngón ngắn, nhưng cả năm ngón đều thuộc về một bàn tay. Trong mấy triệu người cũng có người thế này thế khác, nhưng thế này hay thế khác đều dòng dõi tổ tiên ta. Vậy nên phải khoan hồng, đại độ... Có như thế mới thành đoàn kết, có đại đoàn kết thì tương lai chắc chắn sẽ vẻ vang.",
      source: "Chủ tịch Hồ Chí Minh"
    },
    mainPoints: [
      "Khoan dung với những khác biệt",
      "Độ lượng với những sai lầm",
      "Đoàn kết trong đa dạng",
      "Tương lai vẻ vang nhờ đoàn kết"
    ],
    media: {
      type: "image",
      src: "/imgs/Part3/Có lòng khoan dung, độ lượng.jpg",
      alt: "Lòng khoan dung, độ lượng",
      caption: "Tinh thần khoan dung, độ lượng của Bác Hồ"
    },
    examples: [
      {
        title: "Chính sách hòa hợp dân tộc",
        desc: "Hòa hợp, hòa giải dân tộc sau chiến tranh",
        link: null,
        external: false
      }
    ],
    references: [
      "Toàn tập Hồ Chí Minh — tập 7, trang 156"
    ],
    footerNote: "Tư tưởng Hồ Chí Minh về khoan dung, độ lượng"
  },
  {
    id: "d-tin-nhan-dan",
    index: 4,
    title: "Có niềm tin vào nhân dân",
    teaser: "Nhân dân là nền tảng của cách mạng",
    heroImage: "/imgs/Part3/Có niềm tin vào nhân dân.jpg",
    badge: "Mục tiêu 4",
    highlight: false,
    contentHtml: "Nhân dân là nền tảng, gốc rễ, chủ thể của mặt trận. Là chỗ dựa vững chắc của Đảng, là cội nguồn sức mạnh vô tận quyết định thắng lợi của cách mạng.",
    color: "#2563eb",
    subtitle: "Niềm tin vào sức mạnh nhân dân",
    quote: {
      text: "Nhân dân là nền tảng, gốc rễ, chủ thể của mặt trận. Là chỗ dựa vững chắc của Đảng, là cội nguồn sức mạnh vô tận quyết định thắng lợi của cách mạng.",
      source: "Chủ tịch Hồ Chí Minh"
    },
    mainPoints: [
      "Nhân dân là nền tảng của cách mạng",
      "Tin tưởng vào sức mạnh nhân dân",
      "Dựa vào nhân dân trong mọi hoạt động",
      "Nhân dân quyết định thắng lợi"
    ],
    media: {
      type: "image",
      src: "/imgs/Part3/Có niềm tin vào nhân dân.jpg",
      alt: "Niềm tin vào nhân dân",
      caption: "Bác Hồ với nhân dân"
    },
    examples: [
      {
        title: "Phong trào cách mạng",
        desc: "Nhân dân là lực lượng chính của cách mạng",
        link: null,
        external: false
      }
    ],
    references: [
      "Toàn tập Hồ Chí Minh — tập 8, trang 234"
    ],
    footerNote: "Tư tưởng Hồ Chí Minh về nhân dân"
  }
];

// Center Mode Carousel Component
function CenterModeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = carouselData.length;

  // Autoplay functionality
  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 5000);
  }, [totalItems]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Handle autoplay based on state
  useEffect(() => {
    if (isPlaying && !isHovered && !isModalOpen) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isPlaying, isHovered, isModalOpen, startAutoplay, stopAutoplay]);

  // Handle modal open/close
  const handleOpenModal = (item: CarouselItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setIsPlaying(false); // Pause autoplay when modal opens
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    // Resume autoplay if it was playing before
    if (isPlaying) {
      setIsPlaying(true);
    }
  };

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlayPause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Get visible items (center + adjacent)
  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalItems) % totalItems;
      items.push({
        ...carouselData[index],
        position: i,
        isCenter: i === 0
      });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-[600px] flex items-center justify-center"
      role="region"
      aria-roledescription="carousel"
      aria-label="Danh sách mục tiêu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress indicator */}
      <div className="absolute top-4 left-4 flex items-center gap-2 text-sm text-gray-600">
        <span className="font-semibold">{currentIndex + 1} / {totalItems}</span>
      </div>

      {/* Play/Pause button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 px-3 py-1 rounded-full border border-gray-300 bg-white shadow-sm text-sm flex items-center gap-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
        aria-label={isPlaying ? "Tạm dừng phát tự động" : "Tiếp tục phát tự động"}
        aria-pressed={!isPlaying}
      >
        {isPlaying ? (
          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
        {isPlaying ? 'Tạm dừng' : 'Phát'}
      </button>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 z-40"
        aria-label="Trước"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 z-40"
        aria-label="Sau"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel items */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-16">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {visibleItems.map((item, index) => {
            const isCenter = item.isCenter;
            const isLeft = item.position === -1;
            
            return (
              <div
                key={`${item.id}-${index}`}
                className={`relative transition-all duration-500 ease-[cubic-bezier(0.22,0.9,0.36,1)] ${
                  isCenter 
                    ? 'w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[760px] h-[400px] sm:h-[450px] md:h-[480px] z-30 scale-100' 
                    : isLeft 
                    ? 'hidden md:block w-[180px] lg:w-[240px] h-[270px] lg:h-[288px] z-20 scale-90 -translate-x-4 lg:-translate-x-8 opacity-60' 
                    : 'hidden md:block w-[180px] lg:w-[240px] h-[270px] lg:h-[288px] z-20 scale-90 translate-x-4 lg:translate-x-8 opacity-60'
                }`}
                role="group"
                aria-label={`${item.badge}: ${item.title}`}
              >
                <div className="relative w-full h-full bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                  {/* Hero Image */}
                  <div className="relative h-[45%] overflow-hidden">
                    <img
                      src={item.heroImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Image overlay with badge */}
                    <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.badge}
                    </div>
                    {/* Highlight badge */}
                    {item.highlight && (
                      <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Nổi bật
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 h-[55%] flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.teaser}
                      </p>
                      
                      {/* Quote box */}
                      <div className="border-l-4 border-red-300 bg-red-50 rounded-md p-4 mb-4">
                        <p className="text-sm text-gray-700 italic line-clamp-3">
                          {item.contentHtml}
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button 
                      onClick={() => handleOpenModal(item)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Xem chi tiết đầy đủ
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live region for screen readers */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {carouselData[currentIndex]?.title}
      </div>

      {/* Detail Modal */}
      {selectedItem && (
        <DetailModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

// Focus Trap Hook
function useFocusTrap(isActive: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Store the previously focused element
    previousActiveElement.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    // Get all focusable elements
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    // Focus the first element
    firstElement?.focus();

    // Add event listener
    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      // Return focus to the previously focused element
      previousActiveElement.current?.focus();
    };
  }, [isActive]);

  return containerRef;
}

// Detailed Modal Component
function DetailModal({ 
  item, 
  isOpen, 
  onClose 
}: { 
  item: CarouselItem; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const modalRef = useFocusTrap(isOpen);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/part3#${item.id}`;
    try {
      await navigator.clipboard.writeText(url);
      // You could show a toast notification here
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Main Modal */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${item.id}`}
        aria-describedby={`modal-description-${item.id}`}
      >
        <div
          ref={modalRef}
          className="bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] w-full max-w-[min(1100px,92vw)] md:max-w-[min(900px,94vw)] lg:max-w-[1100px]"
        >
          {/* Header */}
          <div 
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-6 relative"
            style={{ minHeight: '140px' }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {/* Badge */}
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
                  {item.index}
                </div>
                
                <div>
                  <h2 
                    id={`modal-title-${item.id}`}
                    className="text-2xl md:text-3xl font-extrabold mb-2"
                  >
                    {item.title}
                  </h2>
                  <p 
                    id={`modal-description-${item.id}`}
                    className="text-lg opacity-90"
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center shadow-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Đóng"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body - Scrollable */}
          <div className="overflow-y-auto max-h-[calc(90vh-140px-80px)]">
            <div className="p-6">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column - Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Quote Box */}
                  {item.quote && (
                    <div className="bg-gray-50 border-l-4 border-red-300 p-6 rounded-lg">
                      <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                        "{item.quote.text}"
                      </blockquote>
                      <cite className="text-red-600 font-semibold">
                        — {item.quote.source}
                      </cite>
                    </div>
                  )}

                  {/* Main Content */}
                  {item.mainPoints && item.mainPoints.length > 0 && (
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Nội dung chính</h3>
                      <ul className="space-y-3">
                        {item.mainPoints.map((point, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Examples */}
                  {item.examples && item.examples.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Ví dụ thực tiễn</h3>
                      <div className="space-y-4">
                        {item.examples.map((example, index) => (
                          <div key={index} className="bg-white rounded-lg p-4 border border-blue-100">
                            <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                            <p className="text-gray-700 mb-3">{example.desc}</p>
                            {example.link && (
                              <a
                                href={example.link}
                                target={example.external ? "_blank" : "_self"}
                                rel={example.external ? "noopener noreferrer" : ""}
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                {example.external && (
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                )}
                                {example.external ? 'Xem thêm' : 'Chi tiết'}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* References */}
                  {item.references && item.references.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Tài liệu tham khảo</h3>
                      <ul className="space-y-2">
                        {item.references.map((ref, index) => (
                          <li key={index} className="text-gray-700 text-sm">
                            {ref}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Column - Media */}
                <div className="lg:col-span-1">
                  {item.media && (
                    <div className="sticky top-6">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                        <div className="relative">
                          <img
                            src={item.media.src}
                            alt={item.media.alt}
                            className="w-full h-64 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => setIsLightboxOpen(true)}
                          />
                          {item.media.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3">
                              <p className="text-sm">{item.media.caption}</p>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <button
                            onClick={() => setIsLightboxOpen(true)}
                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                          >
                            Xem ảnh lớn
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {item.footerNote}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
                aria-label="Chia sẻ"
              >
                Chia sẻ
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-200"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && item.media && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-60 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={item.media.src}
              alt={item.media.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors duration-200"
              aria-label="Đóng ảnh"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Screen reader announcement */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Đã mở chi tiết: {item.title}
      </div>
    </>
  );
}

export default function Part3Detail() {
  const pageData = data as PageData;

  // Set page title and meta description
  useEffect(() => {
    document.title = pageData.seo.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageData.seo.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = pageData.seo.description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', pageData.seo.keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = pageData.seo.keywords;
      document.head.appendChild(meta);
    }
  }, [pageData.seo]);

  // Main page with carousel
  return (
    <main className="relative min-h-screen" lang="vi">
      {/* Local NavBar */}
      <div className="relative z-20">
        <NavBar />
      </div>

      {/* Header - now scrolls with content */}
      <header className="relative z-10 h-80 md:h-96 bg-cover bg-center flex items-center justify-center" 
               style={{ backgroundImage: 'url("/imgs/Part3/Hồ Chí MInh.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {pageData.pageTitle}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-6">
            {pageData.hero.subtitle}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl italic text-slate-100">
            "{pageData.hero.highlight}"
          </p>
        </div>
      </header>

      {/* Main content area with carousel */}
      <div className="relative z-10 bg-gray-50 min-h-screen">
        {/* Page title */}
        <div className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Khám phá chi tiết từng mục tiêu
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto"></div>
        </div>

        {/* Center Mode Carousel */}
        <CenterModeCarousel />

        {/* References Section */}
        <section aria-label="Tài liệu tham khảo" className="bg-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Tài liệu tham khảo</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pageData.references.map((ref, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <p className="font-semibold text-gray-900 mb-2">{ref.title}</p>
                    {ref.note && <p className="text-sm text-gray-600">{ref.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Quay lại trang chủ
            </Link>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          .relative.min-h-screen {
            background: white !important;
            color: black !important;
          }
          .fixed {
            position: static !important;
          }
          .pt-80, .pt-96 {
            padding-top: 0 !important;
          }
          .absolute {
            display: none !important;
          }
          .bg-white\\/5, .bg-white\\/10, .bg-slate-900\\/75, .bg-gradient-to-t {
            background: white !important;
            color: black !important;
          }
          .text-white, .text-slate-200, .text-slate-100 {
            color: black !important;
          }
          .border-white\\/20, .border-white\\/10 {
            border-color: #ccc !important;
          }
          header {
            height: auto !important;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          header .relative.z-10.text-center {
            background: none !important;
            color: black !important;
          }
          header h1, header p {
            color: black !important;
            text-shadow: none !important;
          }
          .w-32.h-1.bg-gradient-to-r {
            background: #ccc !important;
          }
          .bg-white {
            background: white !important;
            box-shadow: none !important;
            border: 1px solid #ccc !important;
          }
          .shadow-lg, .shadow-inner {
            box-shadow: none !important;
          }
          .border {
            border-color: #ccc !important;
          }
          .text-gray-800, .text-gray-700, .text-gray-600 {
            color: black !important;
          }
          /* Carousel print styles */
          .bg-gray-50 {
            background: white !important;
          }
          .rounded-2xl {
            border-radius: 8px !important;
          }
          .shadow-xl {
            box-shadow: none !important;
          }
          .opacity-60 {
            opacity: 1 !important;
          }
          .scale-90 {
            transform: none !important;
          }
          .translate-x-8, .-translate-x-8 {
            transform: none !important;
          }
          .w-\\[760px\\], .w-\\[240px\\] {
            width: 100% !important;
            max-width: 100% !important;
          }
          .h-\\[480px\\], .h-\\[288px\\] {
            height: auto !important;
          }
          .h-\\[45\\%\\] {
            height: 200px !important;
          }
          .h-\\[55\\%\\] {
            height: auto !important;
          }
          .line-clamp-2, .line-clamp-3 {
            -webkit-line-clamp: unset !important;
            display: block !important;
          }
        }
      `}</style>
    </main>
  );
}


