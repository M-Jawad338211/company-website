"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Talents() {
  return (
    <div
      className="w-full h-full bg-cover bg-center py-16 px-4 md:px-8 lg:px-16"
      style={{ backgroundImage: "url('/png/hero.png')" }}
    >
      <div className="flex flex-col items-center justify-center h-full mt-10 md:mt-20">
        <div className="flex flex-col items-center text-center mt-8 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[500px] lg:max-w-xl xl:max-w-4xl"
          >
            We provide <span className="text-light-primary">innovative </span>
            design solutions & expert{" "}
            <span className="text-light-primary">talents</span>
          </motion.h1>

          <p className="mt-4 max-w-lg">
            From a small team of five people to a leading global remote team of
            professional designers & developers that strive to develop valuable
            digital products for people worldwide.
          </p>

          <Link
            href="/contacts"
            className="group flex items-center gap-6 bg-white hover:bg-primary hover:text-white text-secondary font-bold text-2xl pl-10 pr-2 py-2 rounded-full shadow-sm  transition mt-8"
          >
            Talk to our Experts
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
      </div>
    </div>
  );
}
