import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="px-4 md:px-6 xl:px-24 2xl:px-16  w-full h-full items-center justify-center text-center bg-[url('/png/portfolio-bg.png')] bg-center bg-no-repeat bg-cover pt-20 md:pt-40">
      <div className=" w-full p-6 md:p-10 mx-auto rounded-[30px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12  items-stretch mt-6 md:mt-10">
        <div className="w-full  flex flex-col">
          <div className=" flex flex-col gap-8 xl:gap-6 2xl:gap-13 items-center md:items-start w-full">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="xl:pr-16  text-center md:text-left  max-w-2xl"
            >
              We <span className="text-light-primary">transform</span> Ideas
              into design Success{" "}
              <span className="text-light-primary">Stories</span>
            </motion.h2>

            <p className="bg-white text-black rounded-[15px] px-4 py-2 sm:p-3 text-lg md:text-xl  lg:text-2xl xl:text-3xl font-bold">
              45+ Projects done
            </p>

            <div className="w-2/3 h-px bg-white/75 mt-3 sm:mt-5"></div>

            <Link
              href="/portfolio"
              className="bg-primary hover:bg-light-gray text-white hover:text-primary text-lg lg:text-2xl xl:text-3xl font-bold px-6 py-2 lg:px-6 lg:py-3 xl:px-6  xl:py-2 rounded-full mt-3 cursor-pointer active:scale-95 duration-150 ease-in-out"
            >
              All Cases
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-6  items-center  w-full mt-4 md:mt-0">
          <div className="relative w-ful h-full">
            <Image
              src="/png/portfolio-main.png"
              alt="Project Showcase"
              width={682}
              height={444}
              className="object-contain rounded-3xl "
            />
          </div>

          <div className="flex flex-wrap justify-center items-center w-full 2xl:w-[83%] gap-2 lg:gap-10 xl:gap-16 bg-primary rounded-2xl p-2 lg:p-4 ">
            {["SaaS", "Web 3.0", "AI"].map((label) => (
              <span
                key={label}
                className="border-2 border-white text-white text-sm  lg:text-[16px] px-3 lg:px-4 py-1 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
