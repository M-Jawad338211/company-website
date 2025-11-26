"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Contacts() {
  const strategies = [
    "Expect a response from us within an hour",
    "We’ll sign an NDA if requested",
    "Access to dedicated product specialists",
  ];

  return (
    <div className="px-4 sm:px-12 lg:px-16 xl:px-28  py-28 md:py-48  w-full h-full flex items-center justify-center text-center bg-[url('/png/project-bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="flex flex-col lg:flex-row gap-8 w-full ">
        <div className="bg-[url('/png/management.png')] bg-cover bg-no-repeat rounded-3xl shadow-lg p-6 md:p-8 w-full lg:w-1/2 text-white flex flex-col gap-6">
          <div className="flex justify-center gap-6 md:gap-10 md:flex-wrap">
            <div className="flex flex-col items-center">
              <Image
                src="/jpg/jawad2.jpeg"
                alt="members"
                width={70}
                height={70}
                className="rounded-full "
              />
              <p className="mt-2 text-xl xl:text-2xl 2xl:text-3xl font-bold">
                Jawad Ahmad
              </p>
              <p className="text-base lg:text-xl text-gray-300">CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/jpg/hammad.jpeg"
                alt="member"
                width={70}
                height={70}
                className="rounded-full"
              />
              <p className="mt-2 text-xl xl:text-2xl 2xl:text-3xl font-bold">
                Hammad Ahmad
              </p>
              <p className="text-base lg:text-xl text-gray-300">CFO</p>
            </div>
          </div>

          <ul className="space-y-2 text-left">
            {strategies.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Image
                  src={"/png/check.png"}
                  alt="Check Icon"
                  width={26}
                  height={26}
                  className="lg:mt-1 w-[20] h-5 lg:w-[26px] lg:h-[26px]"
                />
                <span className="text-white text-base md:text-lg lg:text-2xl font-semibold tracking-[0] leading-[120%] xl:leading-[150%]  xl:max-w-2xl">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 mt-4 text-left">
            <p className="text-lg md:text-xl font-medium text-white">
              Project Inquiries
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 "
                  viewBox="0 0 34 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1192_1285)">
                    <path
                      d="M0 2.66639C0.195398 2.19001 0.320951 1.66608 0.600328 1.24559C1.16656 0.393785 2.0313 0.0266973 3.04238 0.000834289C3.09809 -0.000834289 3.15297 0.000834289 3.20868 0.000834289C12.4048 0.000834289 21.601 0.00166858 30.798 0C32.0942 0 33.1078 0.509751 33.6724 1.70612C33.8695 2.12243 33.9825 2.62134 33.9842 3.0827C34.0042 9.02451 34.0042 14.9663 33.9933 20.9073C33.99 22.7269 32.6788 23.9883 30.8312 23.9883C23.2066 23.9908 15.5819 23.9892 7.95642 23.9892C6.40738 23.9892 4.85667 23.9566 3.30845 23.9983C1.60974 24.0442 0.27522 22.9955 0.0282703 21.3845C0.0249444 21.3636 0.00997775 21.3445 0 21.3244C0 15.1048 0 8.88518 0 2.66639ZM3.43567 2.0073C3.53462 2.11492 3.59033 2.18 3.65019 2.24007C7.36025 5.94431 11.0678 9.65106 14.7829 13.3511C16.1157 14.6785 17.8959 14.6676 19.2354 13.3319C22.933 9.64605 26.6256 5.95599 30.3199 2.2676C30.3914 2.19585 30.4554 2.11659 30.5519 2.00813C21.4971 2.0073 12.5029 2.0073 3.43567 2.0073ZM3.62608 21.9618C12.5054 21.9618 21.5087 21.9618 30.3606 21.9618C27.6209 19.1569 24.8205 16.2895 21.981 13.382C21.4912 13.8834 21.0447 14.359 20.5783 14.8136C19.1697 16.1852 17.5093 16.6382 15.6077 16.1318C14.7313 15.8982 14.0004 15.4085 13.3677 14.7653C12.927 14.3164 12.4888 13.8659 12.0132 13.3787C9.17121 16.287 6.36996 19.1536 3.62608 21.9618ZM2.0155 3.41725C2.0155 9.17218 2.0155 14.8362 2.0155 20.5944C4.88161 17.6644 7.68869 14.7936 10.4276 11.9937C7.67704 9.18886 4.8708 6.32808 2.0155 3.41725ZM31.9928 3.50401C31.9679 3.48816 31.9438 3.47231 31.9188 3.45563C29.1059 6.32391 26.2922 9.1922 23.4685 12.0713C26.2689 14.8645 29.1084 17.6953 31.9928 20.5719C31.9928 14.8211 31.9928 9.163 31.9928 3.50401Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1192_1285">
                      <rect width="34" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <a
                  href="mailto:hr@unitfactor.org"
                  className="text-base md:text-lg lg:text-xl  font-semibold text-white"
                >
                  info@unitfactor.org
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 md:w-5 md:h-5"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1192_1288)">
                    <path
                      d="M18.7154 24.9998C18.3633 24.9434 18.01 24.8935 17.6593 24.8287C16.2936 24.5747 15.0177 24.0634 13.7776 23.4575C11.7462 22.4641 9.85672 21.2471 8.16308 19.7534C4.76863 16.7602 2.08274 13.2635 0.573224 8.95414C0.2004 7.88945 -0.0234241 6.79494 0.00195137 5.65896C0.0266761 4.56575 0.383233 3.60473 1.15946 2.81933C1.84655 2.12465 2.51282 1.4034 3.25001 0.764455C4.44265 -0.270434 5.67173 -0.258122 6.81493 0.818889C7.97049 1.90692 9.08635 3.0403 10.1755 4.19573C11.0689 5.14378 11.0637 6.43075 10.1912 7.39501C9.5802 8.07024 8.91653 8.69882 8.26523 9.33777C8.1364 9.46414 8.12469 9.55227 8.20082 9.71039C8.84822 11.0628 9.78841 12.204 10.8041 13.2881C11.838 14.3917 12.9753 15.378 14.2558 16.1912C14.5915 16.4044 14.9559 16.5742 15.2988 16.7771C15.4361 16.8581 15.5187 16.8438 15.63 16.7304C16.172 16.1783 16.7224 15.6339 17.2729 15.0903C17.7023 14.6658 18.1825 14.323 18.798 14.2219C19.6282 14.0852 20.3316 14.3541 20.9172 14.927C21.9823 15.9696 23.037 17.024 24.0904 18.0783C25.2232 19.2123 25.3149 20.4973 24.268 21.6994C23.5425 22.5321 22.7396 23.302 21.9348 24.0608C21.3635 24.5993 20.64 24.8624 19.8579 24.9557C19.8026 24.9622 19.7492 24.9849 19.6952 25.0004C19.3686 24.9998 19.042 24.9998 18.7154 24.9998ZM1.27007 5.67257C1.27853 7.01527 1.59735 8.08709 1.9949 9.14013C3.11532 12.1081 4.90917 14.6483 7.05827 16.9514C9.15142 19.1948 11.5894 20.9866 14.3514 22.3358C15.7263 23.0078 17.1427 23.5528 18.6841 23.7122C19.6211 23.8087 20.5105 23.6999 21.2184 23.0246C21.9426 22.3332 22.6414 21.6139 23.32 20.8777C23.8666 20.2854 23.8568 19.6776 23.2927 19.1022C22.2041 17.9908 21.0974 16.8963 19.9841 15.8096C19.5332 15.3696 18.9528 15.365 18.4512 15.7512C18.3354 15.8407 18.23 15.9437 18.1259 16.0467C17.5182 16.6487 16.915 17.2553 16.3053 17.8554C15.9078 18.2461 15.4816 18.3142 14.9871 18.0647C14.6306 17.8852 14.2747 17.7024 13.9324 17.4983C12.3162 16.5334 10.9134 15.3112 9.64982 13.9264C8.59771 12.7742 7.63865 11.5572 6.988 10.1238C6.65292 9.38508 6.71798 9.06301 7.30162 8.50183C7.93535 7.89204 8.57039 7.2816 9.17289 6.64201C9.68821 6.09443 9.683 5.51769 9.16053 4.97206C8.36153 4.13611 7.5352 3.32608 6.71733 2.50828C6.41803 2.20889 6.11873 1.90756 5.80251 1.62697C5.30997 1.19021 4.7426 1.18372 4.22273 1.59003C4.12058 1.66974 4.02298 1.75787 3.93059 1.84924C3.36322 2.41108 2.80496 2.98134 2.23108 3.53669C1.56742 4.18017 1.246 4.95521 1.27007 5.67257Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1192_1288">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <a
                  href="tel:03053333772"
                  className="text-base md:text-lg lg:text-xl  font-semibold text-white"
                >
                  Book A Call
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[url('/png/contact-bg.png')] bg-cover bg-no-repeat bg-center rounded-3xl shadow-lg p-6 md:p-8 w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[40px] text-left text-black font-bold mb-6"
          >
            Tell us about your project
          </motion.h2>
          <form className="space-y-15">
            <div className="flex flex-col xl:flex-row gap-4">
              <input
                type="text"
                placeholder="*Full Name"
                className="flex-1 border-b-2 border-[#E8E8E8] placeholder-black text-black outline-none p-2 bg-transparent"
              />
              <input
                type="email"
                placeholder="*Corporate Email"
                className="flex-1 border-b-2 border-[#E8E8E8] placeholder-black text-black outline-none p-2 bg-transparent"
              />
            </div>

            <textarea
              placeholder="*About Project"
              className="w-full border-b-2 border-[#E8E8E8] placeholder-black text-black outline-none p-2 bg-transparent"
            />

            <div className="flex items-center gap-3 lg:mt-6 ">
              <button
                type="submit"
                className="flex items-center bg-white hover:bg-secondary text-primary hover:text-white px-6 py-2 rounded-full cursor-pointer shadow-lg text-lg md:text-2xl font-semibold active:scale-95 duration-150 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
