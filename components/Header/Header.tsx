"use client";
import { AuthRoutes } from "@/routes";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import UserButton from "./UserButton";

const Header = () => {
  const pathname = usePathname();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (pathname === AuthRoutes[0]) {
    return (
      <header className="w-full flex items-center justify-center fixed p-4">
        <Link
          href="/"
          className=" text-xl hover:text-foreground/80 transition-colors"
        >
          <h2 className="flex items-center justify-center gap-2">
            <ShoppingCart size={32} />
            <span>E-Commerce</span>
          </h2>
        </Link>
      </header>
    );
  }

  return (
    <header className="w-full fixed">
      <nav className="mx-auto border w-fit p-3 mt-6 rounded-lg flex items-center justify-between gap-12">
        <Link
          href="/"
          className=" text-xl hover:text-foreground/80 transition-colors"
        >
          <h2 className="flex items-center justify-center gap-2">
            <ShoppingCart size={32} />
            <span>E-Commerce</span>
          </h2>
        </Link>
        <div className="hidden xl:flex md:flex">
          <DesktopNav open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </div>
        <div className="flex xl:hidden md:hidden">
          <MobileNav open={isDialogOpen} onOpenChange={setIsDialogOpen} />
        </div>
        <UserButton />
      </nav>
    </header>
  );
};

export default Header;
