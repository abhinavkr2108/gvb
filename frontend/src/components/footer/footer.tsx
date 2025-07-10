import { Link } from "react-router";

// components/Footer.tsx
export default function Footer() {
  const footerItems = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="mx-auto w-4/5 px-4 py-2 text-[#455B73] font-normal">
      <hr className="h-px border border-[#e5e7eb]" />
      <footer className="flex flex-col md:flex-row justify-center md:justify-between py-2 my-4">
        <div className="text-center md:text-left">
          <span>&#169; 2025 G Vibration Busters. All rights reserved. </span>
        </div>
        <div className="flex justify-center md:justify-end space-x-3 pt-4 md:pt-0">
          {footerItems.map((item, index) => (
            <Link key={index} to={item.href} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
