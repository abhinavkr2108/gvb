import { useState, useEffect } from "react";
import {
  Menu,
  Monitor,
  Plug,
  Sliders,
  SmartphoneCharging,
  Unplug,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Link } from "react-router";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
  };
}

export default function Header({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "logo",
    title: "gVibrationbusters",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    {
      title: "Products",
      url: "#",
      items: [
        {
          title: "Sensors & Transmitters",
          description: "Proximity & seismic sensors with 4‑20 mA outputs",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Vibration Switches",
          description:
            "Electronic & mechanical switches for alarms and shutdowns",
          icon: <Unplug className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Monitors",
          description: "Local display units for trending, alarming, and SCADA",
          icon: <Monitor className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Portable Meters",
          description: "Hand‑held devices for spot vibration measurement",
          icon: <SmartphoneCharging className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Shakers & Calibration",
          description: "Vibration shakers for sensor calibration and testing",
          icon: <Sliders className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Cables & Accessories",
          description: "Signal‑grade cables, connectors, ferrites, housings",
          icon: <Plug className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },

    {
      title: "Contact",
      url: "/contact",
    },
  ],
}: Navbar1Props) {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.scrollY <= 10);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-20 backdrop-blur-sm bg-white/60
        transition-shadow duration-200
        ${top ? "shadow-none" : "shadow-sm"}
      `}
    >
      <div className="max-w-5xl mx-5 md:mx-auto py-2 flex justify-between items-center">
        {/* Logo */}
        <Link to={logo.url} className="flex items-center gap-2">
          <img src={logo.src} className="max-h-8" alt={logo.alt} />
          <span className="text-lg font-semibold tracking-tighter">
            {logo.title}
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {menu.map((item) => renderMenuItem(item))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <img src={logo.src} className="max-h-8" alt={logo.alt} />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent hover:bg-muted text-sm font-medium h-10 px-4 py-2 rounded-md transition-colors">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="min-w-[320px] w-[400px] rounded-md bg-popover p-2 shadow-md">
          <div className="flex flex-col">
            {item.items.map((sub) => (
              <NavigationMenuLink asChild key={sub.title}>
                <SubMenuLink item={sub} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((sub) => (
            <SubMenuLink key={sub.title} item={sub} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }
  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => (
  <a
    href={item.url}
    className="flex items-start gap-4 p-3 rounded-md hover:bg-muted"
  >
    <div>{item.icon}</div>
    <div>
      <div className="text-sm font-semibold">{item.title}</div>
      {item.description && (
        <p className="text-sm text-muted-foreground leading-snug">
          {item.description}
        </p>
      )}
    </div>
  </a>
);
