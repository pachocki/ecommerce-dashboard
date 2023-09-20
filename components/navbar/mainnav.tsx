"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useClerk } from "@clerk/nextjs";
const MainNav = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const { signOut } = useClerk();

  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}/`,
      label: "Dashboard",
      active: pathname === `/${params.storeId}`,
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
    },

    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
    },
  ];
  return (
    <nav className={cn("flex items-center gap-2 lg:flex-col ", className)}>
      <div
        className={`hidden  cursor-pointer z-20 hover:bg-green lg:block ${
          isMobileMenuOpen ? "bg-black !text-white" : "bg-black text-white"
        } py-3 px-4 rounded-xl`}
        onClick={isMobileMenuOpen ? closeMobileMenu : toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <CgClose className="text-xl" />
        ) : (
          <GiHamburgerMenu className="text-xl" />
        )}
      </div>

      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary lg:hidden",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
      {isMobileMenuOpen && (
        <div className="  bg-white text-black w-1/3 border-l  absolute top-0 right-0 p-4 h-screen z-[1] sm:w-3/4 xs:w-full">
          <div className="flex flex-col gap-2  py-40 h-screen sm:items-center ">
            {routes.map((route) => (
              <Link
                onClick={closeMobileMenu}
                key={route.href}
                href={route.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary lg:text-2xl",
                  route.active
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
            <button
              onClick={() => signOut()}
              className={cn(
                "bg-black py-2 px-2 mt-10 rounded-xl  text-white self-start text-lg font-medium transition-colors hover:text-primary   sm:self-center"
              )}
            >
              Sign out
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => signOut()}
        className={cn(
          "bg-green-600 px-2 rounded-xl text-lg font-medium transition-colors hover:text-primary text-white lg:hidden"
        )}
      >
        Sign out
      </button>
    </nav>
  );
};

export default MainNav;
