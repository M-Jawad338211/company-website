import Image from "next/image";

export default function Team() {
  return (
    <div
      className="flex w-full h-full items-center justify-center text-center 
      bg-[url('/png/animation-bg.png')] bg-no-repeat bg-center bg-cover 
      p-6 sm:p-12 md:p-16 lg:px-12 xl:p-28 "
    >
      <Image
        src="/png/mask-group.png"
        alt="Mask group illustration"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-contain rounded-2xl"
      />
    </div>
  );
}
