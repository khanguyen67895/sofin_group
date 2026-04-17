import { useState } from "react";
import img01 from "@/assets/images/chuyen-gia-01.png";
import img02 from "@/assets/images/chuyen-gia-02.png";
import img03 from "@/assets/images/chuyen-gia-03.png";
import img04 from "@/assets/images/chuyen-gia-04.png";
import icLeft from "@/assets/images/ic_left.png";
import icRight from "@/assets/images/ic_right.png";

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

  return (
    <section className="py-15 md:py-15 bg-neutral-950">
      <div className="mx-auto px-20 md:px-30">
        {/* ── Top row: label + title trái, nav phải ── */}
        <div className="flex items-end justify-between mb-10 pr-6 md:pr-100">
          <div>
            <span className="block text-[10px] font-heading text-neutral-500 tracking-[0.2em] uppercase mb-2">
              HỘI ĐỒNG CỐ VẤN KHOA HỌC
            </span>
            <h2
              className="font-heading font-bold text-primary-500"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Đội ngũ chuyên gia
            </h2>
          </div>

          <div className="flex absolute right-20 z-100 mb-20 items-center gap-2">
            <button
              onClick={() =>
                setCur((p) => (p === 0 ? experts.length - 1 : p - 1))
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
                setCur((p) => (p === experts.length - 1 ? 0 : p + 1))
              }
              className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <img src={icRight} alt="Next" className="w-12 h-12 object-contain" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* ── LEFT: content ── */}
          <div className="flex flex-col gap-8">
            {/* Quote */}
            <blockquote className="text-base md:text-lg text-neutral-200 leading-[1.8] italic font-light">
              {e.quote}
            </blockquote>

            {/* Name + title */}
            <div>
              <p className="font-heading font-bold text-base text-primary-500">
                {e.name}
              </p>
              <p className="text-neutral-500 text-sm mt-1">{e.title}</p>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-[13px] leading-relaxed">
              {e.description}
            </p>
          </div>

          {/* ── RIGHT: horizontal scroll of all portraits ── */}
          <div
            className="flex gap-3 items-end overflow-x-auto pb-1 -mt-60 md:-mt-60 -mr-6 md:-mr-20"
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
                    width: isActive ? 240 : 160,
                    height: isActive ? 400 : 240,
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
      </div>
    </section>
  );
}
