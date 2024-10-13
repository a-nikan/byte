"use client";

import Link from "next/link";
import Image from "next/image";
import { Fugaz_One } from "next/font/google";
import { useScrollDirection } from "@/lib/hooks";
import { RxHamburgerMenu } from "react-icons/rx";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const isScrollingUp = useScrollDirection(); // Get scrolling direction
  return (
    <>
      <nav
        className={`px-9 flex w-full transition-all duration-700 justify-between h-20 items-center bg-white z-20 ease-in-out transform  ${
          isScrollingUp
            ? "fixed top-0 left-0 right-0 translate-y-0"
            : "fixed top-0 left-0 right-0 -translate-y-20"
        }`}
      >
        <div>
          <Link href={"#"}>
            <RxHamburgerMenu className="md:hidden h-7 w-7" />
          </Link>
          <ol className="hidden md:flex gap-7 text-sm font-semibold justify-center">
            <Link href="#">
              <li>SHOP</li>
            </Link>
            <Link href="#">
              <li>EXPLORE</li>
            </Link>
            <Link href="#">
              <li>SUPPORT</li>
            </Link>
            <Link href="#">
              <li>OUR 60TH</li>
            </Link>
          </ol>
        </div>
        <div>
          <Link
            href="/"
            className={`${fugaz.className} text-xl md:text-2xl lg:text-3xl`}
          >
            ByteBoutique
          </Link>
        </div>
        <div className="flex gap-5">
          <Image src="/icons/search.svg" alt="search" width={28} height={28} />
          <Image
            className="w-auto h-[24px] hidden md:block"
            src="/icons/profile.svg"
            alt="profile"
            width={24}
            height={24}
          />
          <Image
            className="w-auto h-[24px] hidden md:block"
            src="/icons/heart.svg"
            alt="wish"
            width={24}
            height={24}
          />
          <Image
            className="w-auto h-[24px]"
            src="/icons/cart.svg"
            alt="cart"
            width={24}
            height={24}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
