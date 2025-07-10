import { Link } from "react-router";
import { Button } from "../../../components/ui/button";

export default function About() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-5 py-1 mb-4 text-xl tracking-wider text-white font-extrabold uppercase rounded-full bg-blue-500">
                about us
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Undertaking Sales and Repair of{" "}
              <span className="bg-gradient-to-r from-[#7A76FC] to-[#61A4EB] text-transparent bg-clip-text inline-block">
                Industrial Instruments
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              G Vibrations Busters Pvt. Ltd. is a private company incorporated
              on 10th December 2003 . We are dealing in sales and services of
              Industrial Instruments, especially in the field of Machine
              Monitoring, Vibration Monitoring. Our core specialization is in
              the field of Condition Monitoring. We study the application of
              equipment and suggest the right kind of monitoring technology
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-4">
            <Button className="px-5 cursor-pointer text-md font-semibold">
              Browse Products
            </Button>
            <Link to="/contact">
              <Button
                variant={"outline"}
                className="px-5 cursor-pointer text-md font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/about.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
