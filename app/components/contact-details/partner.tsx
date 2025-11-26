"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Partners() {
  return (
    <div className="px-4 sm:px-12 lg:px-16 xl:px-28 pt-6 pb-12 lg:pt-8 lg:pb-16 xl:pt-12 xl:pb-20 w-full items-center justify-center text-center bg-black">
      <div className="w-full px-6 sm:px-10 py-12 md:py-16 lg:py-20 xl:py-28 mx-auto bg-[url('/png/solutions-bg.png')] bg-cover bg-center bg-no-repeat rounded-[20px] sm:rounded-[30px] mt-6 sm:mt-10">
        <div className="w-full h-auto p-4 sm:p-8 space-y-2 flex flex-col justify-between">
          <div className="space-y-6 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center text-white max-w-2xl"
            >
              Got a project in mind? Tell us about it.
            </motion.h2>

            <Link
              href="/contacts"
              className="group flex items-center gap-6 bg-white hover:bg-primary hover:text-white text-secondary font-bold text-2xl pl-10 pr-2 py-2 rounded-full shadow-sm  transition lg:mt-6"
            >
              Contact Us
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
    </div>
  );
}
