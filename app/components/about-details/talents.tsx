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
            We provide innovative design solutions & expert talents
          </motion.h1>

          <p className="mt-4 max-w-lg">
            From a small team of five people to a leading global remote team of
            professional designers & developers that strive to develop valuable
            digital products for people worldwide.
          </p>

          <Link
            href="/contacts"
            target="_blank"
            className="bg-white hover:bg-primary text-secondary hover:text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold px-6 py-3 cursor-pointer rounded-full transition-all mt-8 active:scale-95 duration-150 ease-in-out"
          >
            Talk to our Experts
          </Link>
        </div>
      </div>
    </div>
  );
}
