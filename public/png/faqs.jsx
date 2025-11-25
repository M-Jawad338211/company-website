"use client";
import { motion } from "framer-motion";
export default function Faqs() {
  const faqs = [
    {
      question: "What is UnitFator?",
      answer:
        "UnitFator is a SaaS platform designed to help you manage, track, and optimize your financial workflows efficiently.",
    },
    {
      question: "How secure is my data with UnitFator?",
      answer:
        "We use industry-standard encryption and follow best practices to ensure your data is secure and accessible only to you.",
    },
    {
      question: "Can I use UnitFator on mobile devices?",
      answer:
        "Yes, UnitFator is fully responsive and can be accessed seamlessly across desktops, tablets, and mobile devices.",
    },
    {
      question: "Does UnitFator support integrations?",
      answer:
        "Yes, UnitFator supports integrations with popular tools like Slack, Google Workspace, and accounting software.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team 24/7 via live chat or email at support@unitfator.com.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.",
    },
  ];

  return (
    <div className="px-4 sm:px-12 lg:px-16 xl:px-28  py-12 md:py-16 lg:py-20 xl:py-28 w-full h-full flex flex-col items-center justify-center text-center bg-[url('/rectangle770.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-xl  md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#E8E8E8] mb-6 sm:mb-16"
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full mx-auto text-left">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col mb-4 sm:mb-1 py-4 px-3 sm:px-4 rounded-xl sm:rounded-2xl text-white bg-black/50 shadow-xl sm:shadow-2xl"
          >
            <p className="text-lg sm:text-xl md:text-2xl xl:text-[32px] font-medium leading-relaxed xl:leading-[150%]">
              {faq.question}
            </p>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-white mt-2">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
