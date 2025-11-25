import { motion } from "framer-motion";
export default function Solutions() {
  const services = [
    {
      title: "Website Design & Development",
      description:
        "We create responsive, user friendly websites tailored to your brand and goals.",
      cta: (
        <>
          Explore
          <svg
            width="20"
            height="10"
            viewBox="0 0 46 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 sm:ml-3 mt-2"
          >
            <path
              d="M0 11.3542C0.362413 12.4194 1.12684 12.7868 2.24048 12.7856C14.5613 12.7666 26.8821 12.7737 39.203 12.7737C39.377 12.7737 39.551 12.7737 39.8222 12.7737C39.6266 12.9752 39.5006 13.1115 39.3686 13.2418C37.4389 15.1401 35.508 17.0396 33.576 18.9367C33.0611 19.4427 32.8967 20.053 33.0911 20.7272C33.282 21.3884 33.7536 21.8103 34.4388 21.9572C35.1084 22.1006 35.6712 21.8802 36.1513 21.4086C37.9009 19.6868 39.6542 17.9686 41.4062 16.2492C42.7119 14.9671 44.0175 13.685 45.3208 12.4005C46.2256 11.5082 46.2292 10.4951 45.322 9.60279C42.2787 6.60839 39.2318 3.61636 36.1837 0.626703C35.3712 -0.16959 34.2864 -0.20751 33.5472 0.520056C32.7971 1.25829 32.8463 2.34134 33.6732 3.15541C35.5812 5.03476 37.4905 6.91174 39.4022 8.78754C39.5186 8.90129 39.653 8.99846 39.779 9.10274C39.767 9.14421 39.755 9.1845 39.743 9.22597C39.5786 9.22597 39.4142 9.22597 39.251 9.22597C26.9157 9.22597 14.5793 9.23308 2.24408 9.21412C1.12804 9.21175 0.363613 9.58028 0 10.6444C0 10.8814 0 11.1172 0 11.3542Z"
              fill="currentColor"
            />
          </svg>
        </>
      ),
    },
    {
      title: "UI/UX & Graphic Design",
      description:
        "Our creative team ensures every design is intuitive, attractive, and aligned with your identity.",
      cta: (
        <>
          Explore
          <svg
            width="20"
            height="10"
            viewBox="0 0 46 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 sm:ml-3 mt-2"
          >
            <path
              d="M0 11.3542C0.362413 12.4194 1.12684 12.7868 2.24048 12.7856C14.5613 12.7666 26.8821 12.7737 39.203 12.7737C39.377 12.7737 39.551 12.7737 39.8222 12.7737C39.6266 12.9752 39.5006 13.1115 39.3686 13.2418C37.4389 15.1401 35.508 17.0396 33.576 18.9367C33.0611 19.4427 32.8967 20.053 33.0911 20.7272C33.282 21.3884 33.7536 21.8103 34.4388 21.9572C35.1084 22.1006 35.6712 21.8802 36.1513 21.4086C37.9009 19.6868 39.6542 17.9686 41.4062 16.2492C42.7119 14.9671 44.0175 13.685 45.3208 12.4005C46.2256 11.5082 46.2292 10.4951 45.322 9.60279C42.2787 6.60839 39.2318 3.61636 36.1837 0.626703C35.3712 -0.16959 34.2864 -0.20751 33.5472 0.520056C32.7971 1.25829 32.8463 2.34134 33.6732 3.15541C35.5812 5.03476 37.4905 6.91174 39.4022 8.78754C39.5186 8.90129 39.653 8.99846 39.779 9.10274C39.767 9.14421 39.755 9.1845 39.743 9.22597C39.5786 9.22597 39.4142 9.22597 39.251 9.22597C26.9157 9.22597 14.5793 9.23308 2.24408 9.21412C1.12804 9.21175 0.363613 9.58028 0 10.6444C0 10.8814 0 11.1172 0 11.3542Z"
              fill="currentColor"
            />
          </svg>
        </>
      ),
    },
    {
      title: "Complete IT Solutions",
      description:
        "We offer a wide range of IT services including software development, mobile apps, and ongoing technical support.",
      cta: (
        <>
          Explore
          <svg
            width="20"
            height="10"
            viewBox="0 0 46 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 sm:ml-3 mt-2"
          >
            <path
              d="M0 11.3542C0.362413 12.4194 1.12684 12.7868 2.24048 12.7856C14.5613 12.7666 26.8821 12.7737 39.203 12.7737C39.377 12.7737 39.551 12.7737 39.8222 12.7737C39.6266 12.9752 39.5006 13.1115 39.3686 13.2418C37.4389 15.1401 35.508 17.0396 33.576 18.9367C33.0611 19.4427 32.8967 20.053 33.0911 20.7272C33.282 21.3884 33.7536 21.8103 34.4388 21.9572C35.1084 22.1006 35.6712 21.8802 36.1513 21.4086C37.9009 19.6868 39.6542 17.9686 41.4062 16.2492C42.7119 14.9671 44.0175 13.685 45.3208 12.4005C46.2256 11.5082 46.2292 10.4951 45.322 9.60279C42.2787 6.60839 39.2318 3.61636 36.1837 0.626703C35.3712 -0.16959 34.2864 -0.20751 33.5472 0.520056C32.7971 1.25829 32.8463 2.34134 33.6732 3.15541C35.5812 5.03476 37.4905 6.91174 39.4022 8.78754C39.5186 8.90129 39.653 8.99846 39.779 9.10274C39.767 9.14421 39.755 9.1845 39.743 9.22597C39.5786 9.22597 39.4142 9.22597 39.251 9.22597C26.9157 9.22597 14.5793 9.23308 2.24408 9.21412C1.12804 9.21175 0.363613 9.58028 0 10.6444C0 10.8814 0 11.1172 0 11.3542Z"
              fill="currentColor"
            />
          </svg>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col px-4 sm:px-12 lg:px-16 xl:px-28 xl:py-12 lg:pt-16 xl:pt-20 w-full h-full overflow-hidden">
      <div className="flex flex-col gap-4 items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" text-left  mb-4"
        >
          Our Solutions
        </motion.h2>
        <p className=" text-center max-w-2xl sm:max-w-4xl lg:max-w-3xl">
          We offer a wide range of digital services designed to elevate your
          business. From custom website development to complete IT solutions,
          our team delivers innovative, scalable, and results-driven products
          tailored to your needs.
        </p>
      </div>

      <div className="w-full mx-auto py-8 sm:py-12 xl:mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-linear-to-b from-light-gray to-light-gray hover:from-primary hover:to-black  
                  shadow-md overflow-hidden hover:shadow-lg transition-all duration-500
                  ${
                    index === 0
                      ? "rounded-bl-3xl rounded-br-3xl rounded-tr-3xl"
                      : ""
                  }
                  ${
                    index === 1
                      ? "rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-3xl"
                      : ""
                  }
                  ${
                    index === 2
                      ? "rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl md:col-span-2 md:justify-self-center lg:col-start-auto lg:col-end-auto lg:justify-self-auto"
                      : ""
                  }`}
            >
              <div className="p-6 flex flex-col h-full text-center">
                <h3 className=" mb-3 md:min-h-14 group-hover:text-white">
                  {service.title}
                </h3>
                <p className=" text-[#717171] group-hover:text-white mb-5 font-medium">
                  {service.description}
                </p>
                <button className="bg-secondary group-hover:bg-white px-4 sm:px-5 py-2 sm:py-3 rounded-full flex items-center justify-center gap-2 mx-auto cursor-pointer mt-auto">
                  <a
                    href="/portfolio"
                    target="_blank"
                    className="flex text-white group-hover:text-black font-bold active:scale-95 duration-150 ease-in-out"
                  >
                    {service.cta}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
