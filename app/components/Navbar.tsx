import Link from "next/link";
import Image from "next/image";
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <>
      <nav className="px-9 py-7 flex justify-between h-20 items-center">
        <div>
          <ol className="flex gap-7 text-sm font-semibold justify-center">
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
            className={`${fugaz.className} text-3xl justify-center`}
          >
            ByteBoutique
          </Link>
        </div>
        <div className="flex gap-5">
          <Image src="/icons/search.svg" alt="search" width={28} height={28} />
          <Image
            src="/icons/profile.svg"
            alt="profile"
            width={24}
            height={24}
          />
          <Image src="/icons/heart.svg" alt="wish" width={24} height={24} />
          <Image src="/icons/cart.svg" alt="cart" width={24} height={24} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
