import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import icArrowDetail from "@/assets/images/ic_arrow_detail.png";
import icArrowDetail2x from "@/assets/images/ic_arrow_detail@2x.png";
import icSectionPlatform from "@/assets/images/ic_section_platform.png";
import icSectionPlatform2x from "@/assets/images/ic_section_platform@2x.png";
import bgEcosystem from "@/assets/images/bg_ecosystem.png";
import bgEcosystem2x from "@/assets/images/bg_ecosystem@2x.png";
import bgHeSinhThaiL from "@/assets/images/bg-he-sinh-thai-l.png";
import bgHeSinhThaiL2x from "@/assets/images/bg-he-sinh-thai-l@2x.png";
import imgHeSinhThai1 from "@/assets/images/img-he-sinh-thai-1.png";
import imgHeSinhThai1x2 from "@/assets/images/img-he-sinh-thai-1@2x.png";
import imgHeSinhThai2 from "@/assets/images/img-he-sinh-thai-2.png";
import imgHeSinhThai2x2 from "@/assets/images/img-he-sinh-thai-2@2x.png";
import imgHeSinhThai3 from "@/assets/images/img-he-sinh-thai-3.png";
import imgHeSinhThai3x2 from "@/assets/images/img-he-sinh-thai-3@2x.png";
import imgHeSinhThai4 from "@/assets/images/img-he-sinh-thai-4.png";
import imgHeSinhThai4x2 from "@/assets/images/img-he-sinh-thai-4@2x.png";
import { useEcosystemList } from "../hooks/useEcosystem";

interface Item {
  title: string;
  description: string;
  tags: string[];
  icon: string;
  icon2x: string;
}

const fallbackIcons = [
  { icon: imgHeSinhThai1, icon2x: imgHeSinhThai1x2 },
  { icon: imgHeSinhThai2, icon2x: imgHeSinhThai2x2 },
  { icon: imgHeSinhThai3, icon2x: imgHeSinhThai3x2 },
  { icon: imgHeSinhThai4, icon2x: imgHeSinhThai4x2 },
];

const staticItems: Item[] = [
  {
    title: "Công nghệ & AI",
    icon: imgHeSinhThai1,
    icon2x: imgHeSinhThai1x2,
    description:
      "Trung tâm nghiên cứu phát triển AI, machine learning, chuyển đổi số và các giải pháp công nghệ tiên tiến cho doanh nghiệp.",
    tags: ["SOFIN AI", "Interlink", "AVIXO Trading", "SOAFF"],
  },
  {
    title: "SOFIN Academy",
    icon: imgHeSinhThai2,
    icon2x: imgHeSinhThai2x2,
    description:
      "Học viện đào tạo chuyên sâu về công nghệ, AI và kỹ năng số. Ươm mầm và phát triển thế hệ nhân tài công nghệ tương lai.",
    tags: ["AI Bootcamp", "Tech Mentoring", "Workshop", "Corporate Training"],
  },
  {
    title: "SOFIN Media",
    icon: imgHeSinhThai3,
    icon2x: imgHeSinhThai3x2,
    description:
      "Xây dựng hệ sinh thái truyền thông số đa nền tảng, sản xuất nội dung chất lượng cao kết hợp công nghệ AI sáng tạo.",
    tags: ["Content Production", "Digital Marketing", "Branding", "Entertainment"],
  },
  {
    title: "Công ty thành viên",
    icon: imgHeSinhThai4,
    icon2x: imgHeSinhThai4x2,
    description:
      "Quản lý danh mục đầu tư vào các startup công nghệ tiềm năng, khai thác tài nguyên và phát triển các đối tác chiến lược.",
    tags: ["SOFIN Ventures", "Mining & Exploration", "Strategic Partners", "Subsidiaries"],
  },
];

export default function EcosystemSection() {
  const navigate = useNavigate();
  const { data: cmsItems } = useEcosystemList();

  const items: Item[] = cmsItems && cmsItems.length > 0
    ? cmsItems.map((ci, idx) => {
        const fallback = fallbackIcons[idx % fallbackIcons.length];
        return {
          title: ci.title,
          description: ci.description,
          tags: ci.tags,
          icon: ci.bannerUrl || fallback.icon,
          icon2x: ci.bannerUrl || fallback.icon2x,
        };
      })
    : staticItems;

  return (
    <section className="py-10 md:py-16 bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 max-w-350">
        {/* Heading */}
        <motion.div
          className="mb-10 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={icSectionPlatform}
            srcSet={`${icSectionPlatform2x} 2x`}
            alt="Nền tảng tổ chức"
            className="mb-3 h-8 object-contain"
          />
          <h2
            className="text-center text-4xl font-medium font-['Unbounded'] leading-12 text-primary-500"
          >
            Hệ sinh thái SOFIN Group
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-20">
          {items.map((item, idx) => {
            const iconRight = idx % 2 !== 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl sticky"
                style={{
                  top: `${80 + idx * 20}px`,
                  zIndex: idx + 1,
                  boxShadow: "inset 0 0 0 1.5px rgba(229,66,30,0.25)",
                }}
              >
                {/* Card background image */}
                <img
                  src={idx % 2 === 0 ? bgHeSinhThaiL : bgEcosystem}
                  srcSet={`${idx % 2 === 0 ? bgHeSinhThaiL2x : bgEcosystem2x} 2x`}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className={`relative z-10 flex flex-col md:flex-row items-stretch ${iconRight ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Content */}
                  <div className="flex flex-col justify-between max-w-2xl flex-1 px-6 md:px-10 pb-6 pt-4 md:pb-12 md:pt-16">
                    <div className="flex flex-col gap-4">
                      <h3
                        className="self-stretch justify-center text-primary-500 text-4xl font-medium font-['Unbounded'] leading-12"
                      >
                        {item.title}
                      </h3>
                      <p className="self-stretch justify-start text-white text-base font-normal font-['Mona_Sans'] leading-6">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1 rounded-full outline -outline-offset-1 outline-stone-500 inline-flex justify-center items-center gap-2 text-text-neutral-normal text-sm font-semibold font-['Mona_Sans'] leading-5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button
                      className="flex items-center gap-2 mt-4 w-fit group"
                      onClick={() => navigate("/he-sinh-thai")}
                    >
                      <span className="text-primary-500 text-sm font-semibold font-heading tracking-widest uppercase group-hover:opacity-80 transition-opacity duration-200">
                        CHI TIẾT
                      </span>
                      <img
                        src={icArrowDetail}
                        srcSet={`${icArrowDetail2x} 2x`}
                        alt=""
                        className="h-4 w-4 object-contain group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      />
                    </button>
                  </div>


                  {/* Icon */}
                  <div className="order-first md:order-last relative flex items-center justify-center w-full md:w-72 lg:w-100 shrink-0 py-2 md:py-0 overflow-hidden max-h-70 md:max-h-none">
                    <div
                      className="absolute inset-0 opacity-15"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(229,66,30,0.4) 0%, transparent 70%)",
                      }}
                    />
                    <img
                      src={item.icon}
                      srcSet={`${item.icon2x} 2x`}
                      alt={item.title}
                      className="relative z-10 w-full h-full object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
