import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import img01 from "@/assets/images/chuyen-gia-01.png";
import img02 from "@/assets/images/chuyen-gia-02.png";
import img03 from "@/assets/images/chuyen-gia-03.png";
import img04 from "@/assets/images/chuyen-gia-04.png";
import icLeft from "@/assets/images/ic_left.png";
import icRight from "@/assets/images/ic_right.png";
import icRec from '@/assets/images/ic_rec.png'
import icCouncil from "@/assets/images/ic_council.png";
import icCouncil2x from "@/assets/images/ic_council@2x.png";

interface Expert {
  name: string;
  title: string;
  quote: string;
  description: string;
  image: string;
}

const experts: Expert[] = [
  {
    name: "Nguyễn Quang Việt",
    title: "CEO / Founder",
    quote:
      '"Công nghệ không chỉ là công cụ, nó là ngôn ngữ của tương lai. Tại SOFIN, chúng tôi đầu tư và kiến tạo những giải pháp định hình thế giới số, mang lại giá trị bền vững cho xã hội."',
    description:
      "Với hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ và đầu tư, ông Nguyễn Quang Việt đã dẫn dắt SOFIN GROUP từ những bước đầu khởi nghiệp đến vị thế tập đoàn công nghệ hàng đầu Việt Nam.",
    image: img01,
  },
  {
    name: "Lê Thanh Hương",
    title: "COO / Director",
    quote:
      '"Hiệu quả vận hành là nền tảng để mọi chiến lược lớn có thể được thực thi và tạo ra giá trị thực."',
    description:
      "Bà Lê Thanh Hương phụ trách điều hành toàn bộ hoạt động của tập đoàn, đảm bảo các quy trình hoạt động trơn tru và mục tiêu chiến lược được thực hiện đúng tiến độ.",
    image: img02,
  },
  {
    name: "Trần Minh Khoa",
    title: "CTO / Co-Founder",
    quote:
      '"Đổi mới sáng tạo bền vững đến từ việc đặt con người vào trung tâm của mọi giải pháp công nghệ."',
    description:
      "Ông Trần Minh Khoa là kiến trúc sư công nghệ của SOFIN, người định hình nền tảng kỹ thuật vững chắc cho toàn bộ hệ sinh thái sản phẩm và dịch vụ của tập đoàn.",
    image: img03,
  },
  {
    name: "Phạm Đức Anh",
    title: "CFO / Head of Investment",
    quote:
      '"Đầu tư thông minh không chỉ về lợi nhuận — mà về việc tạo ra những tác động tích cực và lâu dài."',
    description:
      "Ông Phạm Đức Anh quản lý chiến lược tài chính và danh mục đầu tư của SOFIN GROUP, với chuyên môn sâu trong phân tích thị trường và định giá startup công nghệ.",
    image: img04,
  },
];

export default function ExpertSection() {
  const [cur, setCur] = useState(0);
  const e = experts[cur];
  const scrollRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((idx: number) => {
    setCur(idx);
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[idx] as HTMLElement | undefined;
    if (child) {
      child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, []);

  return (
    <section className="py-15 md:py-15 bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        {/* ── Top row: label + title trái, nav phải ── */}
        <div className="flex items-end justify-between mb-10 pr-6 md:pr-20 lg:pr-100">
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={icCouncil}
              srcSet={`${icCouncil2x} 2x`}
              alt="Hội đồng cố vấn khoa học"
              className="h-8 object-contain mb-2"
            />
            <h2
              className="justify-center text-4xl font-medium font-['Unbounded'] leading-12 text-primary-500"
            >
              Đội ngũ chuyên gia
            </h2>
          </motion.div>

          <div className="hidden md:flex absolute right-5 md:right-20 z-100 mb-20 items-center gap-2">
            <button
              onClick={() =>
                goTo(cur === 0 ? experts.length - 1 : cur - 1)
              }
              className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <img src={icLeft} alt="Previous" className="w-12 h-12 object-contain" />
            </button>
            <span className="text-lm text-[#F0EDE6] tabular-nums w-12 text-center">
              {cur + 1}/{experts.length}
            </span>
            <button
              onClick={() =>
                goTo(cur === experts.length - 1 ? 0 : cur + 1)
              }
              className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <img src={icRight} alt="Next" className="w-12 h-12 object-contain" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* ── LEFT: content ── */}
          <motion.div
            className="flex flex-col gap-5 w-full lg:w-142"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Quote */}
            <blockquote className="self-stretch justify-center text-stone-200 text-3xl font-normal font-['Mona_Sans'] leading-10">
              {e.quote}
            </blockquote>

            <div className="relative mt-14">
              <div className="h-0.5 bg-neutral-700/50" />
              <img src={icRec} alt="" className="absolute left-0 -top-0.5 -translate-y-1/2 h-1.5" />
            </div>

            {/* Name + title */}
            <div>
              <p className="w-44 opacity-60 justify-center text-white text-[10px] font-normal font-['Mona_Sans'] uppercase leading-3 tracking-[4px] mb-2">{e.title}</p>
              <p className="justify-center text-white text-2xl font-medium font-['Unbounded'] leading-8">
                {e.name}
              </p>
            </div>

            {/* Description */}
            <p className="self-stretch justify-start text-stone-100 text-sm font-normal font-['Mona_Sans'] leading-5">
              {e.description}
            </p>
          </motion.div>

          {/* ── RIGHT: horizontal scroll of all portraits ── */}
          <div
            ref={scrollRef}
            className="flex gap-3 items-end overflow-x-auto pb-1 mt-6 lg:-mt-60 mx-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
          >
            {experts.map((ex, idx) => {
              const isActive = idx === cur;
              return (
                <button
                  key={ex.name}
                  onClick={() => setCur(idx)}
                  className="relative shrink-0 overflow-hidden transition-all duration-300"
                  style={{
                    width: isActive ? 'min(330px, 55vw)' : 'min(200px, 33vw)',
                    height: isActive ? 'min(591px, 75vw)' : 'min(297px, 38vw)',
                  }}
                >
                  <img
                    src={ex.image}
                    alt={ex.name}
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                  />
                </button>
              );
            })}
          </div>

        </div>

        {/* ── Mobile nav: bottom-left ── */}
        <div className="flex md:hidden items-center gap-2 mt-6">
          <button
            onClick={() =>
              goTo(cur === 0 ? experts.length - 1 : cur - 1)
            }
            className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icLeft} alt="Previous" className="w-12 h-12 object-contain" />
          </button>
          <span className="text-lm text-neutral-500 tabular-nums w-12 text-center">
            {cur + 1}/{experts.length}
          </span>
          <button
            onClick={() =>
              goTo(cur === experts.length - 1 ? 0 : cur + 1)
            }
            className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icRight} alt="Next" className="w-12 h-12 object-contain" />
          </button>
        </div>
      </div>
    </section>
  );
}
