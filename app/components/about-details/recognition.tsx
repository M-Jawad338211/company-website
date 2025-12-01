"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Recognitions() {
  const strategies = [
    "Flexible collaboration & fixed monthly rate",
    "Guaranteed on-time deliverables",
    "Hiring system with immediate start",
  ];

  return (
    <section className="relative px-6 sm:px-12 md:px-16 lg:px-12 xl:px-28 py-12 md:pt-16 lg:pt-20 xl:pt-28  w-full bg-[url('/png/recognition-bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="absolute top-0 left-0 right-0 h-30  bg-linear-to-b from-background to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-30  bg-linear-to-t from-background to-transparent z-10 pointer-events-none"></div>
      <div className="flex items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="2xl:max-w-6xl"
        >
          Today <span className="text-light-primary">Unitfactor</span> stands on
          market-leading positions and is
          <span className="text-light-primary"> recognized </span>
          globally
        </motion.h2>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 items-stretch mt-16">
        <div className="relative w-full overflow-hidden ">
          <Image
            src="/png/av-lab-3.png"
            alt="Project Showcase"
            width={746}
            height={651}
            className="object-cover rounded-2xl lg:h-[390px] xl:w-4xl xl:h-[751px]"
          />
        </div>

        <div className="w-full h-auto bg-[url('/png/choices.png')] bg-no-repeat bg-center bg-cover p-6 xl:p-10 2xl:p-16 rounded-2xl shadow-lg space-y-6 flex flex-col justify-between">
          <div className="space-y-6 xl:space-y-16">
            <h3 className="text-xl  md:text-3xl xl:text-4xl 2xl:text-[40px] text-left text-[#E8E8E8] font-bold leading-[110%] xl:leading-[150%] max-w-2xl">
              Unitfactor is your perfect choice in terms of:
            </h3>

            <ul className="space-y-3 xl:space-y-8">
              {strategies.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 xl:gap-5">
                  <Image
                    src={"/png/check.png"}
                    alt="Check Icon"
                    width={20}
                    height={17}
                    className="mt-1 xl:mt-2 2xl:mt-3 md:w-[26px] md:h-[26px]"
                  />
                  <span className="text-lg md:text-xl  xl:text-2xl 2xl:text-[32px] text-[#E8E8E8] font-medium max-w-[250px] md:max-w-3xl leading-[120%] md:leading-[150%] text-left">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/portfolio"
            target="_blank"
            className="group self-start flex items-center cursor-pointer mt-4 px-4 xl:px-8 py-2 xl:py-4 rounded-[30px] bg-white text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] text-[#0A3253] font-bold hover:bg-[#983232] hover:text-white  w-auto active:scale-95 duration-150 ease-in-out"
          >
            <span>Discover More About Us</span>
            <svg
              width="46"
              height="22"
              viewBox="0 0 46 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 sm:ml-4 text-secondary group-hover:text-white w-10 h-[18px] xl:w-[46px] xl:h-[22px]"
            >
              <path
                d="M0 11.3547C0.362413 12.4199 1.12684 12.7873 2.24048 12.7861C14.5613 12.7671 26.8821 12.7742 39.203 12.7742C39.377 12.7742 39.551 12.7742 39.8222 12.7742C39.6266 12.9757 39.5006 13.1119 39.3686 13.2423C37.4389 15.1406 35.508 17.0401 33.576 18.9372C33.0611 19.4432 32.8967 20.0535 33.0911 20.7277C33.282 21.3889 33.7536 21.8108 34.4388 21.9577C35.1084 22.1011 35.6712 21.8807 36.1513 21.4091C37.9009 19.6873 39.6542 17.9691 41.4062 16.2497C42.7119 14.9676 44.0175 13.6855 45.3208 12.401C46.2256 11.5087 46.2292 10.4956 45.322 9.60328C42.2787 6.60888 39.2318 3.61685 36.1837 0.627192C35.3712 -0.169102 34.2864 -0.207022 33.5472 0.520544C32.7971 1.25878 32.8463 2.34183 33.6732 3.1559C35.5812 5.03525 37.4905 6.91223 39.4022 8.78802C39.5186 8.90178 39.653 8.99895 39.779 9.10322C39.767 9.1447 39.755 9.18499 39.743 9.22646C39.5786 9.22646 39.4142 9.22646 39.251 9.22646C26.9157 9.22646 14.5793 9.23357 2.24408 9.21461C1.12804 9.21224 0.363613 9.58076 0 10.6449C0 10.8819 0 11.1177 0 11.3547Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="bg-linear-to-r from-black to-primary  rounded-[20px] flex items-center justify-center h-24 sm:h-[120px] w-full px-4">
          <p className=" font-bold text-xl md:text-2xl xl:text-4xl text-center">
            7+ Years In Business
          </p>
        </div>

        <div className="group bg-white  rounded-[20px] flex items-center justify-center h-24 sm:h-[120px] w-full  px-4">
          <p className="text-black font-bold text-xl md:text-2xl xl:text-4xl text-center">
            70+ Successful Projects
          </p>
        </div>
      </div>
    </section>
  );
}
