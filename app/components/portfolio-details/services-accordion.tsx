import Image from "next/image";
import { motion } from "framer-motion";
export default function ServicesAccordion() {
  const services = [
    "MVP (12)",
    "UI/UX Design (12)",
    "Branding (5)",
    "Web Development (21)",
    "Website Design (18)",
  ];
  const works = [
    {
      id: 1,
      title: "Hairrules",
      description:
        "Built a clean, user-friendly e-commerce site for Hair Rules, with texture-based categorization, product listings, and virtual consultation features. Ensured intuitive navigation, branded layout, and responsive design to highlight their mission: ‘Love your texture",
      tags: ["ReactJs", "Alpine.js", "jQuery"],
      img: "/jpg/hairrules.jpg",
      link: "https://hairrules.com",
    },
    {
      id: 2,
      title: "Youdera",
      description:
        "Developed Youdera’s platform for solar financing, enabling solar professionals to simulate PPA rates, submit projects, and get real-time approvals. Built a responsive site that presents project portfolios, partner onboarding, and energy transition messaging.",
      tags: ["ReactJs", "NextJs", "Headless UI"],
      img: "/jpg/youdera1.jpg",
      link: "https://www.youdera.com/",
    },
    {
      id: 3,
      title: "Iecl",
      description:
        "We redesigned and maintained the IECL website to improve navigation, mobile responsiveness, and UI. We optimized access to ICF-accredited courses and integrated digital resources like blogs and podcasts to boost engagement and SEO. We implemented SEO practices and web analytics to improve visibility and ensured consistent branding across all platforms.",
      tags: ["ReactJs", "NextJs", "Tailwind CSS"],
      img: "/jpg/iecl.jpg",
      link: "https://www.iecl.com/",
    },
    {
      id: 4,
      title: "Travelstride",
      description:
        "We redesigned and built the TravelStride site to deliver a smooth, immersive travel browsing experience—crafting a responsive UI, intuitive navigation, and showcases of destinations and packages. We integrated smooth booking workflows, vivid media displays, and SEO-driven content to boost engagement and discoverability",
      tags: ["ReactJs", "NextJs", "Open Graph"],
      img: "/jpg/travel-stride.jpg",
      link: "https://www.travelstride.com/",
    },
    {
      id: 5,
      title: "Arielle Music Shop",
      description:
        "We redesigned the Arielle Music Shop platform to deliver a seamless shopping experience for musicians. The responsive UI features intuitive navigation, engaging product showcases, and secure checkout flows. Optimized with vivid media and SEO-driven content, the site boosts discoverability, engagement, and customer trust.",
      tags: ["ReactJs", "Vue.Js", "Shopify"],
      img: "/jpg/ariellie-site.jpg",
      link: "https://arielle.store/",
    },
  ];

  return (
    <div className="px-6 sm:px-12 xl:px-28  py-16 xl:py-24 w-full h-full items-center justify-center text-center bg-[url('/png/cards.png')] bg-center bg-no-repeat bg-cover">
      <div className="flex flex-col xl:flex-row justify-between gap-8 2xl:gap-0  ">
        <div className="flex flex-col items-center xl:items-start ">
          <div className="bg-black border border-[#A7A7A7] text-white rounded-2xl p-4 sm:p-10 w-full sm:w-[320px]">
            <div className="flex justify-between items-center cursor-pointer">
              <h2 className="text-lg sm:text-xl font-semibold">Services</h2>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <p className="bg-[#3D3D3D] text-lg sm:text-xl xl:text-2xl font-bold rounded-[20px] mt-6 px-4 py-2 text-center sm:text-left">
                All Services
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`px-3 sm:px-4 py-2 rounded-[20px] text-xs sm:text-sm xl:text-2xl font-bold ${
                      index === 0 ? "bg-[#141414]" : "bg-[#1A1A1A]"
                    }`}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href="/contacts"
            target="_blank"
            className="bg-secondary hover:bg-light-gray text-white hover:text-primary text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold px-5 sm:px-8 py-2 sm:py-4 rounded-2xl mt-6 cursor-pointer"
          >
            Have a Project?
          </a>
        </div>
        <div className="flex-1 w-full">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-white text-center lg:text-left mb-6 xl:mb-16 lg:ml-5"
            >
              Works that Power Growth
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {works.map((work) => (
                <div
                  key={work.id}
                  className="bg-transparent rounded-2xl p-4 sm:p-6 text-center text-white"
                >
                  <div className="overflow-hidden rounded-2xl mb-4 sm:mb-6">
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={work.img}
                        alt={work.title}
                        width={450}
                        height={300}
                        className="rounded-xl w-full h-auto cursor-pointer hover:opacity-90 transition"
                      />
                    </a>
                  </div>

                  <h3 className="text-xl text-white sm:text-2xl text-left font-bold mb-2">
                    {work.title}
                  </h3>

                  <p className="text-sm sm:text-base font-medium text-[#B7B7B7] text-left mb-3 sm:mb-4">
                    {work.description}
                  </p>

                  <div className="flex items-start gap-2 sm:gap-3 flex-wrap">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="border-2 border-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm md:text-base font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
