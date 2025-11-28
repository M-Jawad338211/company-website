"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  stack: string;
  technology: string;
  icon: any;
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("Strategy");

  const strategyServices: ServiceItem[] = [
    {
      stack: "Market Research",
      technology: "Competitor Analysis, SWOT, Surveys",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Business Strategy",
      technology: "Roadmapping, OKRs, Business Models",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Product Strategy",
      technology: "MVP Planning, User Journey Mapping",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
  ];

  const designServices: ServiceItem[] = [
    {
      stack: "UI/UX Design",
      technology: "Wireframes, Prototypes, User Flows",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Brand Identity",
      technology: "Logos, Color Palettes, Typography",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Visual Design",
      technology: "Mockups, Design Systems, Style Guides",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
  ];

  const development: ServiceItem[] = [
    {
      stack: "Web Development",
      technology: "React JS, Next JS, Node JS, Express JS",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Mobile Development",
      technology: "React Native, Flutter, iOS, Android",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "DevOps Solutions",
      technology: "CloudFormation, Terraform, Docker",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
    {
      stack: "Landing Page",
      technology: "HTML, CSS,Tailwind, JavaScript",
      icon: (
        <Image
          src="./svg/vector.svg"
          alt="arrow"
          width={42}
          height={21}
          className="w-6 h-3 sm:w-[42px] sm:h-[18px]"
        />
      ),
    },
  ];

  let activeServices: ServiceItem[] = [];

  if (activeCategory === "Strategy") activeServices = strategyServices;
  if (activeCategory === "Design") activeServices = designServices;
  if (activeCategory === "Development") activeServices = development;

  return (
    <div className="relative px-4 sm:px-12 lg:px-16 xl:px-28 pt-16  w-full h-full items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black to-transparent -z-20"></div>
      <div className="absolute inset-4 -z-10">
        <Image
          src="/png/services-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover bg-no-repeat"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our Services
        </motion.h2>

        <p className="max-w-xl lg:max-w-2xl mt-4 xl:mt-12">
          We`ve helped many startups and companies to design high-quality
          digital products, websites, platforms, mobile apps that meet business
          goals and cover user`s needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 ">
        {["Strategy", "Design", "Development"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg lg:text-2xl font-bold rounded-full px-6 sm:px-10 py-2 sm:py-4 cursor-pointer ${
              activeCategory === category
                ? "bg-white text-primary"
                : "bg-linear-to-r from-primary to-[#252525] bg-cover bg-center text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col mt-8 sm:mt-10 xl:mt-20 bg-light-gray rounded-[30px] p-6 sm:p-10">
        {activeServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6"
          >
            <span className="text-lg text-black md:text-xl lg:text-3xl font-medium leading-[150%]">
              {service.stack}
            </span>

            <h4 className=" text-[#7E7E7E] ">{service.technology}</h4>

            <Link href="/portfolio">{service.icon}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
