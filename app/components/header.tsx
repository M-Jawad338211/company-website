"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Blog",
    "Portfolio",
    "Contacts",
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full max-w-9xl mx-auto px-4 md:px-12 xl:px-28 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="block">
            <Image
              src="/svg/frame.svg"
              alt="Logo"
              width={287}
              height={73}
              className="w-56 h-16  xl:w-72 xl:h-18.25"
            />
          </Link>
        </div>

        <nav className="hidden lg:flex xl:space-x-4">
          {navItems.map((item) => {
            const linkPath =
              item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === linkPath;

            return (
              <Link
                key={item}
                href={linkPath}
                className={`text-base font-medium px-4 py-2 rounded-full transition-colors duration-300
                  ${
                    isActive
                      ? "bg-white text-primary"
                      : "text-white hover:text-primary"
                  }`}
              >
                {item}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center space-x-4">
          <a
            href="tel:03053333772"
            className="hidden lg:inline bg-white hover:bg-primary text-xl xl:text-2xl text-secondary hover:text-white font-bold px-6 py-2 xl:px-10 xl:py-3 rounded-[40px]"
          >
            Contact Us
          </a>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-secondary px-6 py-6 space-y-4 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item}
              href={
                item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`
              }
              className="text-white font-bold hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}

          <a
            href="tel:03053333772"
            className="bg-white hover:bg-primary text-secondary hover:text-secondary font-bold px-4 py-2 rounded-[40px] block text-center"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
