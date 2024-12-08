import Image from "next/image";
import Google from "@/assets/images/google-svg.svg";

export default function AirHero() {
  return (
    <section
      style={{
        backgroundImage: "url('/airballoon.jpg')",
      }}
      className="relative h-screen bg-center bg-cover flex flex-col justify-center text-center"
    >
      <div className="mt-[300px]">
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="mb-12 flex justify-center items-center gap-x-2">
          {/* Review Badge */}
          <div className="bg-white/50 text-lime-200 px-4 py-2 rounded-xl border border-black/50 rotate-3 flex items-center gap-x-2">
            <Image src={Google} alt="Google Logo" className="h-5 w-5" />
            <span className="text-sm font-medium">450+ Reviews</span>
            <span className="font-bold">5.0</span>
            <span>★ ★ ★ ★ ★</span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Epic Hot Air Balloons <br /> Rides in Santa Barbara.
          </h1>

          <button className="mt-8 bg-white text-neutral-900 px-6 py-3 rounded-md font-semibold hover:opacity-80">
            Schedute a Flight
          </button>
        </div>
      </div>
      {/* Blur Effect */}
      <div className="absolute bottom-0 w-full h-[400px] bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
  );
}
