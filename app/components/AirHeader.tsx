import Logo from "@/assets/images/Logo-balloon.svg";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Hot Air Balloon Rides", href: "#" },
  { name: "Experience", href: "#" },
  { name: "About", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Contact", href: "#" },
];

export default function AirHeader() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container max-w-7xl mx-auto py-6 px-2">
        <div className=" flex justify-between items-center rounded-[38px] md:rounded-full border border-neutral-900/30 bg-neutral-900/60 backdrop-blur-md py-2 px-8">
          {/* Logo */}
          <div className="flex items-center gap-x-2">
            <Image src={Logo} alt="" className="h-10 w-10" />
            <span className="text-white font-bold text-xl">Air Balloon</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-x-6">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="text-white hover:text-opacity-80"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="#"
            className="text-white bg-gray-900/60 px-4 py-2 rounded-md font-semibold hover:opacity-80"
          >
            Book Flight
          </Link>
        </div>
      </div>
    </header>
  );
}
