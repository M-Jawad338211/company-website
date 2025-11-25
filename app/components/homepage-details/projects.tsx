import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Projects() {
  const strategies = [
    "Flexible collaboration & fixed monthly rate",
    "Guaranteed on-time deliverables",
    "Hiring system with immediate start",
  ];

  return (
    <div className="relative px-4 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-12 sm:py-16 md:py-20 lg:py-24 w-full h-full text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/png/projects-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover bg-no-repeat"
        />
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/png/projects-bg-2.png"
          alt="Background"
          fill
          priority
          className="object-cover bg-no-repeat"
        />
      </div>
      <div className="flex flex-col items-center">
        <p>70+ Successful Projects</p>
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-2"
        >
          Our <span className="text-light-primary">custom</span> approach leads
          <br className="hidden sm:block" />
          projects to <span className="text-light-primary">success</span>
        </motion.h2>
      </div>

      <div className="w-full mx-auto flex flex-col lg:flex-row gap-4 xl:gap-0 2xl:gap-4  mt-16">
        <div className="relative w-full overflow-hidden ">
          <Image
            src="/png/av-lab-3.png"
            alt="Project Showcase"
            width={746}
            height={651}
            className="object-cover rounded-2xl md:h-[390px] xl:w-[540px] xl:h-[751px] 2xl:w-full"
          />
        </div>

        <div className="w-full h-auto bg-[url('/png/checks-bg.png')] bg-no-repeat bg-center bg-cover p-6 xl:p-10 2xl:p-16 rounded-2xl shadow-lg space-y-6 flex flex-col md:gap-6 lg:gap-10 xl:gap-44">
          <div className="space-y-6 xl:space-y-16">
            <h3 className="text-white xl:text-3xl text-left max-w-2xl">
              Unitfactor is your perfect choice in terms of:
            </h3>

            <ul className="space-y-3 xl:space-y-12">
              {strategies.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 xl:gap-5">
                  <Image
                    src={"/png/check.png"}
                    alt="Check Icon"
                    width={20}
                    height={17}
                    className="mt-1 xl:mt-2 2xl:mt-3 md:w-[26px] md:h-[26px]"
                  />
                  <span className="text-lg md:text-xl  xl:text-2xl 2xl:text-[32px] text-white font-medium max-w-[250px] md:max-w-3xl leading-[120%] md:leading-[150%] text-left">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/portfolio"
            target="_blank"
            className="group self-start flex items-center cursor-pointer mt-4 px-4 xl:px-10 py-2 xl:py-4 rounded-[30px] bg-white text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] text-secondary font-bold hover:bg-primary hover:text-white  w-auto active:scale-95 duration-150 ease-in-out"
          >
            <div className="flex items-center gap-5">
              <span className="xl:text-2xl ">Discover More About Us</span>
              <svg
                width="33"
                height="19"
                viewBox="0 0 33 19"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-300"
              >
                <path d="M0 9.66705C0.252375 10.5741 0.784703 10.8869 1.56021 10.8859C10.1401 10.8698 18.72 10.8758 27.3 10.8758C27.4211 10.8758 27.5423 10.8758 27.7312 10.8758C27.595 11.0474 27.5072 11.1634 27.4153 11.2744C26.0715 12.8908 24.7269 14.5082 23.3815 16.1236C23.023 16.5545 22.9085 17.0741 23.0439 17.6482C23.1767 18.2112 23.5051 18.5704 23.9823 18.6956C24.4486 18.8177 24.8406 18.63 25.1748 18.2284C26.3933 16.7623 27.6142 15.2993 28.8343 13.8352C29.7435 12.7435 30.6527 11.6517 31.5603 10.558C32.1904 9.79822 32.1929 8.93552 31.5611 8.17575C29.4418 5.62601 27.32 3.07829 25.1974 0.532589C24.6316 -0.145456 23.8762 -0.177746 23.3614 0.441778C22.8391 1.07038 22.8734 1.99261 23.4492 2.68579C24.7779 4.28606 26.1075 5.88432 27.4387 7.48156C27.5197 7.57842 27.6133 7.66116 27.7011 7.74995C27.6927 7.78527 27.6844 7.81957 27.676 7.85489C27.5615 7.85489 27.447 7.85489 27.3334 7.85489C18.7434 7.85489 10.1527 7.86094 1.56272 7.8448C0.785538 7.84278 0.253211 8.15658 0 9.06266C0 9.26446 0 9.46525 0 9.66705Z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
