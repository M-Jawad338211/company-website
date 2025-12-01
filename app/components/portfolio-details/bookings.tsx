import Link from "next/link";
import { motion } from "framer-motion";

export default function Bookings() {
  return (
    <div className="px-4 md:px-18 xl:px-32 2xl:px-28  pb-12 md:py-16 lg:py-20 xl:py-20 w-full h-full  items-center justify-center text-center bg-black">
      <div
        className="w-full mx-auto rounded-[30px] p-6 md:px-10 py-12  md:py-16 lg:py-20 xl:py-28
        bg-linear-to-r from-primary/90 via-[#000000]/80 to-secondary/90 backdrop-blur-md"
      >
        <div className="w-full h-auto space-y-6 flex flex-col justify-between">
          <div className="space-y-4 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              Wondering if we’re your
              <br /> UI/UX design match?
            </motion.h2>

            <p className=" text-white max-w-[600px]">
              We offer you a free 3-day trial work with one of our experienced
              designers to cover your questions about our working process.
            </p>

            <Link
              href="/contacts"
              className="bg-primary hover:bg-secondary transition-colors 
              text-white text-base md:text-xl xl:text-3xl  font-bold px-6 py-3 rounded-full mt-6 cursor-pointer active:scale-95 duration-150 ease-in-out"
            >
              Book a free trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
