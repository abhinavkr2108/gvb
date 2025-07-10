// components/HeroSection.tsx
import { Link } from "react-router";
import { Button } from "../../../components/ui/button";

export default function HeroSection() {
  return (
    <div
      className="template6Hero bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dnzjbmzag/image/upload/v1703972920/backgroundimage_2.jpg')`,
      }}
    >
      <svg
        style={{ width: 0, height: 0, position: "absolute" }}
        aria-hidden="true"
      >
        <linearGradient id="gradient1" x2="1" y2="1">
          <stop offset="0%" stopColor="#7A76FC" />
          <stop offset="100%" stopColor="#61A4EB" />
        </linearGradient>
      </svg>

      <section className="text-center px-4 md:px-6 max-w-5xl mx-auto pt-12">
        <h1 className="font-bold leading-[40px] md:leading-[70px] text-3xl md:text-6xl lg:text-6xl text-iso-gray-dark tracking-[-1.4px]">
          Elevate Your Machine Monitoring with{" "}
          <span className="bg-gradient-to-r from-[#7A76FC] to-[#61A4EB] text-transparent bg-clip-text">
            G Vibrations Busters
          </span>
        </h1>

        <p className="text-iso-gray text-lg md:text-xl mt-4 w-4/5 mx-auto text-justify">
          A leading company in the field of machine monitoring and protection
          systems. We are an authorized channel partner for Metrix Vibrations
          Intruments USA. We offer unmatched expertise in the field of condition
          monitoring (Vibration Sensors, Transmitters, Meters, Monitoring
          Systems, and Mechanical Vibration Switches). Get in touch for proven,
          reliable, and quality products with the right solutions.
        </p>

        <div className="flex justify-center pt-7 mt-4">
          <Link to="/about">
            <Button className="w-fit md:w-40 lg:w-48 font-bold text-md cursor-pointer mb-8">
              About Us
            </Button>
          </Link>
        </div>
        {/* <div className="mt-12 mx-auto lg:w-4/5">
          <img
            className="rounded-t-2xl mx-auto object-cover"
            src="/dashboard.png"
            alt="CalendarPlan dashboard"
          />
        </div> */}
      </section>
    </div>
  );
}
