import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      id: 1,
      name: "Shmaya Schwartz",
      role: "Business Owner",
      text: `"Working with Unitfactor was a great experience. They delivered 100% on our requirements with top-quality work in React.js and Next.js. The team ensured the code was optimized for performance, handled every challenge proactively, and kept communication clear and professional throughout."`,
      image: "/jpg/shmaya.jpeg",
    },
    {
      id: 2,
      name: "Justin Garner",
      role: "CEO at OnlineMed",
      text: `"Excellent experience working with Unitfactor. The team was very patient and professional throughout."`,
      image: "/jpg/justin.jpeg",
    },
    {
      id: 3,
      name: "Daniel Mesecke",
      role: "CEO at Natural Bathroom ",
      text: `"Jawad and the UnitFactor team were excellent partners. Jawad led with strategic direction while his team provided strong technical execution and support. Even when he wasn’t directly available, the team was responsive, aligned, and reliable. Together they delivered a high-quality, global-ready platform and proved themselves as a dependable, professional tech partner."`,
      image: "/png/team-member.png",
    },
    {
      id: 4,
      name: "Scott MIchael",
      role: "Business Owner",
      text: `"Superb work!! Unitfactor really knows how to crack the code with ClickFunnels. HIGHLY recommended."`,
      image: "/png/team-member.png",
    },
  ];
  const visibleCards = cards.slice(currentIndex, currentIndex + 1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="relative w-full bg-[url('/png/new-choices.png')] bg-cover bg-no-repeat bg-center py-12  px-4 md:px-18 xl:px-32 2xl:px-28">
      <div className="absolute top-0 left-0 right-0 h-20  bg-linear-to-b from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20  bg-linear-to-t from-background to-transparent z-10 pointer-events-none"></div>
      <div className="w-full mx-auto flex flex-col gap-12 lg:gap-20">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-center md:text-left max-w-3xl"
        >
          Our <span className="text-light-primary">Partners</span> find numerous
          reasons to <span className="text-light-primary">Love Us</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="bg-black/50 p-4 rounded-xl text-center text-white text-base lg:text-2xl font-bold">
              WordPress
            </div>
            <div className="bg-black/50 p-4 rounded-xl text-center text-white text-base lg:text-2xl font-bold">
              Web Development
            </div>
            <div className="bg-black/50 p-4 rounded-xl text-center text-white text-base lg:text-2xl font-bold">
              Graphic Designing
            </div>
          </div>

          <div className="bg-[#FFC192] rounded-2xl px-6 py-10 md:p-6 shadow-lg w-full md:w-2/3 flex items-center justify-center">
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col md:flex-row gap-6 items-start w-full max-w-[600px] h-[400px] md:h-[350px]"
              >
                <Image
                  src={card.image}
                  alt={card.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover mx-auto md:mx-0"
                />

                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900">
                      {card.name}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600">
                      {card.role}
                    </p>
                    <p className="text-black text-lg lg:text-xl leading-relaxed font-medium mt-3 line-clamp-6">
                      {card.text}
                    </p>
                  </div>
                  <div className="flex justify-end gap-3 md:mt-6">
                    <button
                      onClick={prevSlide}
                      className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-3 rounded-full bg-black text-white hover:bg-gray-800 transition"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
