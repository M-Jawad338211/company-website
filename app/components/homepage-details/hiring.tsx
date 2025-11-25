import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/svg/logo.svg", alt: "logo 1" },
  { src: "/svg/logo.svg", alt: "logo 2" },
  { src: "/svg/logo.svg", alt: "logo 3" },
  { src: "/svg/logo.svg", alt: "logo 4" },
];

export default function Hiring() {
  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/png/hero.png"
          alt="Background"
          fill
          priority
          className="object-cover bg-no-repeat"
        />
      </div>

      <div className="relative flex flex-col items-center lg:gap-14 justify-center h-full pb-10 pt-32 xl:pb-10 px-4 sm:px-12 lg:px-16 xl:px-28">
        <div className="flex flex-col items-center gap-7 mt-6 sm:mt-8 mb-8 sm:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-center max-w-sm sm:max-w-4xl xl:max-w-5xl"
          >
            Crafting <span className="text-light-primary">Unique</span>, Driving
            set Designs That Capture Attention, Build
            <span className="text-light-primary"> Trust</span>
          </motion.h1>

          <Link
            href="/contacts"
            className="group flex items-center gap-6 bg-white hover:bg-primary hover:text-white text-secondary font-bold text-2xl pl-10 pr-2 py-2 rounded-full shadow-sm  transition"
          >
            Hire Us
            <span className="flex items-center justify-center bg-primary group-hover:bg-secondary w-10 h-10 rounded-full">
              <svg
                width="25"
                height="33"
                viewBox="0 0 25 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-300"
              >
                <path
                  d="M12.3346 25.6667L21.668 16.3333M21.668 16.3333L12.3346 7M21.668 16.3333H3.0013"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 xl:gap-28">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={152}
              height={51}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
