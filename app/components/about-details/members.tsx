import Image from "next/image";

export default function Members() {
  const members = [
    { src: "/jpg/ali.jpg", alt: "Member 1" },
    { src: "/jpg/nasira.jpg", alt: "Member 2" },
    { src: "/jpg/faraz1.jpg", alt: "Member 3" },
    { src: "/jpg/ahsan.jpg", alt: "Member 4" },
    { src: "/jpg/awais1.jpg", alt: "Member 5" },
    { src: "/jpg/abdullah1.jpg", alt: "Member 6" },
  ];

  return (
    <div className="w-full px-6 md:px-16 lg:px-12 xl:px-28 pb-6 lg:pb-20 xl:pb-24 ">
      <div className="items-center justify-center text-center">
        <div className="flex flex-col gap-6 p-6 sm:p-10 xl:p-40 mx-auto bg-[url('/png/members-bg.png')] bg-cover bg-center bg-no-repeat justify-center rounded-[20px] sm:rounded-[30px] items-center mt-6 sm:mt-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {members.map((member, i) => (
              <Image
                key={i}
                src={member.src}
                alt={member.alt}
                height={86}
                width={86}
                className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full"
              />
            ))}
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-6">
            15+ Team Members
          </p>
        </div>
      </div>
    </div>
  );
}
