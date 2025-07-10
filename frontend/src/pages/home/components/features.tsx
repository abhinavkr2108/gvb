// components/FeaturesSection.tsx
import { CheckCircle } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-white">
      <div className="w-[85%] md:w-4/5 mx-auto text-center pt-16">
        <span className="uppercase text-[#6A65FF] text-sm md:text-base font-medium tracking-widest badgeGradientText">
          Features
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl mt-2 font-bold text-iso-gray-dark">
          Explore Our Amazing <br />
          <span className="bg-gradient-to-r from-[#7A76FC] to-[#61A4EB] text-transparent bg-clip-text">
            Features
          </span>
        </h1>
        <p className="text-iso-gray-light text-lg md:text-xl pt-4 font-normal">
          Powerful product and growth analytics to help you convert, engage, and
          retain more users.
        </p>
      </div>

      <div className="pt-12 md:pt-24 mx-auto w-4/5 lg:grid lg:grid-cols-2 gap-8">
        <div>
          <i className="bi bi-file-text text-[#447799] text-3xl"></i>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-iso-gray-dark mt-4 mb-4">
            Create tasks and notes with ease
          </h2>
          <p className="text-lg text-iso-gray w-4/5">
            With our calendar app, you can quickly create notes and tasks to
            help you plan and organize your tasks and projects.
          </p>
          <ul className="mt-6 space-y-4 text-lg text-iso-gray">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="flex items-center space-x-2">
                <CheckCircle className="text-emerald-600" size={24} />
                <span>Quickly create notes and tasks to help you plan</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8">
          <img
            className="rounded-3xl object-cover w-full"
            src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1694679402/UI1.png"
            alt="UI Features"
          />
        </div>
      </div>

      <div className="pt-24 mx-auto w-4/5 lg:grid lg:grid-cols-2 gap-8">
        <div className="mt-8">
          <img
            className="rounded-3xl object-cover w-full"
            src="https://res.cloudinary.com/dnzjbmzag/image/upload/v1694679395/Frame.png"
            alt="Workflow Integration"
          />
        </div>
        <div className="pt-10 lg:mt-36">
          <i className="bi bi-grid text-[#447799] text-3xl"></i>
          <h2 className="text-4xl lg:text-5xl font-semibold text-iso-gray-dark mt-4 mb-4">
            Streamline your workflow
          </h2>
          <p className="text-lg text-iso-gray">
            We also have lots of integrations with popular apps, so that you can
            organize and streamline your workflow.
          </p>
        </div>
      </div>
    </section>
  );
}
