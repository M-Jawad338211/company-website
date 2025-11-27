import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const strategyServices = [
    "Product Discovery",
    "Proof of Concept",
    "UX Audit",
    "Market Research",
    "Business Analysis",
    "Go-to-Market Strategy",
  ];

  const developmentServices = [
    "Web Development",
    "Mobile App Development",
    "API Development",
    "Custom Software Solutions",
    "E-commerce Development",
    "Performance Optimization",
  ];

  const designingServices = [
    "UI Concept",
    "Branding Services",
    "Wireframing & Prototyping",
    "User Interface Design",
    "User Experience Design",
    "Graphic Design",
  ];

  return (
    <div className="w-full max-w-9xl mx-auto lg:px-20 xl:px-32 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-20 text-center">
        <div className="flex flex-col items-center lg:items-start gap-10">
          <Link href="/">
            <Image src="/svg/frame.svg" alt="Logo" width={287} height={73} />
          </Link>
          <div className=" text-center lg:text-left text-white">
            <h3 className="text-lg sm:text-xl font-bold">Office</h3>
            <p className="text-base sm:text-lg font-medium mt-2">
              641 Ravi Block, Iqbal Town
              <br />
              Lahore
            </p>
          </div>
          <div className="text-left text-white">
            <h3 className="text-lg sm:text-xl font-bold">Drop us a line</h3>

            <a
              href="mailto:hr@unitfactor.org"
              className="text-base sm:text-lg font-medium mt-2"
            >
              admin@unitfactor.org
            </a>
          </div>
        </div>

        <div className="mt-4 2xl:mt-6">
          <h3 className="text-xl xl:text-2xl font-bold text-white">
            Strategy Services
          </h3>
          <div className="mt-4 space-y-2">
            {strategyServices.map((service, index) => (
              <p
                className="text-white text-sm sm:text-base font-medium"
                key={index}
              >
                {service}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4 2xl:mt-6">
          <h3 className="text-xl xl:text-2xl font-bold text-white whitespace-nowrap">
            Development Services
          </h3>
          <div className="mt-4 space-y-2">
            {developmentServices.map((service, index) => (
              <p
                className="text-white text-sm sm:text-base font-medium"
                key={index}
              >
                {service}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4 2xl:mt-6">
          <h3 className="text-xl xl:text-2xl font-bold text-white">
            Designing Services
          </h3>
          <div className="mt-4 space-y-2">
            {designingServices.map((service, index) => (
              <p
                className="text-white text-lg sm:text-base font-medium"
                key={index}
              >
                {service}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
