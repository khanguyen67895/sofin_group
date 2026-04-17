import { useState } from "react";
import icRight from "@/assets/images/ic_right.png";
import icSystem1 from "@/assets/images/ic_system1.png";
import icSystem1x2 from "@/assets/images/ic_system1@2x.png";
import icSystem2 from "@/assets/images/ic_system2.png";
import icSystem2x2 from "@/assets/images/ic_system2@2x.png";
import icSystem3 from "@/assets/images/ic_system3.png";
import icSystem3x2 from "@/assets/images/ic_system3@2x.png";
import icSystem4 from "@/assets/images/ic_system4.png";
import icSystem4x2 from "@/assets/images/ic_system4@2x.png";

interface Item {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  icon2x: string;
}

const items: Item[] = [
  {
    number: "01",
    title: "Khoa học công nghệ",
    icon: icSystem1,
    icon2x: icSystem1x2,
    description:
      "Nghiên cứu và phát triển các giải pháp công nghệ đột phá, ứng dụng AI vào thực tiễn doanh nghiệp và y tế, khai thác tài nguyên thông minh.",
    tags: [
      "Trí Tuệ Nhân Tạo",
      "Giải Pháp Doanh Nghiệp",
      "Y Tế Thông Minh",
      "Khai Khoáng",
      "Blockchain",
    ],
  },
  {
    number: "02",
    title: "Đầu tư chiến lược",
    icon: icSystem2,
    icon2x: icSystem2x2,
    description:
      "Quản lý danh mục đầu tư vào các startup công nghệ tiềm năng, bất động sản thông minh và các tài sản kỹ thuật số thế hệ mới.",
    tags: [
      "Venture Capital",
      "PropTech",
      "Digital Assets",
      "M&A",
      "Blockchain",
    ],
  },
  {
    number: "03",
    title: "Truyền thông giải trí",
    icon: icSystem3,
    icon2x: icSystem3x2,
    description:
      "Xây dựng hệ sinh thái truyền thông số đa nền tảng, sản xuất nội dung chất lượng cao kết hợp công nghệ AI sáng tạo.",
    tags: [
      "Digital Media",
      "Content AI",
      "Streaming",
      "Entertainment Tech",
      "Blockchain",
    ],
  },
  {
    number: "04",
    title: "Giáo dục đào tạo",
    icon: icSystem4,
    icon2x: icSystem4x2,
    description:
      "Đào tạo nguồn nhân lực chất lượng cao về công nghệ AI, chuyển đổi số và xuất khẩu lao động kỹ thuật cao vào thị trường Việt Nam và quốc tế.",
    tags: ["AI Academy", "Corporate Training", "R&D Lab", "EdTech Platform"],
  },
];

export default function EcosystemSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="y-10 md:py-10 bg-neutral-950">
      <div>
        {/* Heading */}
        <div className=" mb-10 mx-auto pl-20 md:px-30">
          <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase">
            NỀN TẢNG TỔ CHỨC
          </span>
          <h2
            className="font-heading font-bold text-primary-500"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Hệ sinh thái SOFIN Group
          </h2>
        </div>

        {/* List */}
        <div className="mb-10 mx-auto">
          {items.map((it, idx) => (
            <div
              key={it.number}
              className={`relative ${idx === 1 || idx === 3 ? 'bg-neutral-800/30' : ''}`}
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Row background photo — clipped to row, does NOT overflow */}
              <div
                className={`absolute inset-0 overflow-hidden transition-opacity duration-300 ${
                  active === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={it.icon}
                  srcSet={`${it.icon2x} 2x`}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* Row text */}
              <div className={`relative ml-20 md:pl-10 z-10 flex items-center gap-6 py-10 transition-all duration-300 ${active === idx ? 'pr-20' : 'pr-4'}`}>
                <span
                  className={`font-heading text-sm font-bold w-8 shrink-0 transition-colors duration-200 text-neutral-100`}
                >
                  {it.number}
                </span>
                <span
                  className={`font-heading font-bold flex-1 transition-colors duration-200 ${
                    active === idx ? "text-white" : "text-neutral-300"
                  }`}
                  style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                >
                  {it.title}
                </span>
                <span className={`shrink-0 w-12 h-12 flex items-center justify-center overflow-hidden transition-opacity duration-300 ${active === idx ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src={icRight}
                    alt=""
                    className="w-12 h-12 object-contain"
                    style={active === idx ? { animation: 'slideFromRight 0.4s ease-out' } : undefined}
                  />
                </span>
              </div>

              {/* Popup card */}
              {active === idx && (
                <div
                  className="absolute right-60 top-10 z-30 w-80"
                  style={{
                    background: 'rgba(13,13,13,0.6)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    animation: 'slideDown 0.35s ease-out',
                  }}
                >
                  {/* gradient top border: đỏ từ phải → đen sang trái */}
                  <div style={{ height: '1px', background: 'linear-gradient(to left, #e5421e 0%, #1a1a1a 100%)' }} />
                  {/* gradient right border: đỏ từ trên → đen xuống dưới */}
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '1px', height: '100%', background: 'linear-gradient(to bottom, #e5421e 0%, #1a1a1a 100%)' }} />
                  {/* left border: xám */}
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '100%', background: '#3a3a3a' }} />
                  {/* bottom border: xám */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px', background: '#3a3a3a' }} />

                  {/* card header */}
                  <div className="flex items-center justify-between px-5 pt-4 pb-3">
                    <h3 className="font-heading font-bold text-white text-base leading-snug">
                      {it.title}
                    </h3> 
                  </div>

                  {/* description */}
                  <p className="px-5 pb-4 text-neutral-400 text-[12px] leading-relaxed">
                    {it.description}
                  </p>

                  {/* tags */}
                  <div className="px-5 pb-5 flex flex-wrap gap-2">
                    {it.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-neutral-300 bg-neutral-800 border border-neutral-700 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
