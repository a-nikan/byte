import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialYoutube,
} from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import { PiTiktokLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="mt-28">
      <div className="mx-20">
        {/* Links Section */}
        <div className="flex">
          <Link href="/">
            <p className=" text-[.9rem] mb-8 hover:underline">Home</p>
          </Link>
          <span>&nbsp;&nbsp;&nbsp;/</span>
        </div>

        <div className="flex">
          {/* Customer Care Column */}
          <ol className="flex flex-col gap-3 w-[25%]">
            <li className="font-semibold text-[.8rem]">Customer Care</li>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">Troubleshooting </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                Repair & Replacement
              </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">Order Tracking</li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                My ByteBoutique Sign In / Register
              </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                Register Your Product
              </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">Contact Us</li>
            </Link>
          </ol>

          {/* Our company Column */}
          <ol className="flex flex-col gap-3 w-[25%]">
            <li className="font-semibold text-[.8rem]">Our Company</li>

            <Link href="#">
              <li className="text-[.8rem] hover:underline">About Us </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">Find a Store </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">ESG</li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">Careers</li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">Press Room</li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">Stories</li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                Partnerships & Licensing
              </li>
            </Link>
          </ol>

          {/* Offers Column */}
          <ol className="flex flex-col gap-3 w-[25%]">
            <li className="font-semibold text-[.8rem]">Offers</li>

            <Link href="#">
              <li className="text-[.8rem] hover:underline">Gift Cards</li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                ID.me Group Program
              </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                Corporate Gifting
              </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                Partner & Employee Program
              </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                Certified Refurbished
              </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">Trade Up</li>
            </Link>
          </ol>

          {/* Additional Links Column */}
          <ol className="flex flex-col gap-3 w-[25%]">
            <li className="font-semibold text-[.8rem]">Additional Links</li>

            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                <div className="flex justify-between w-48">
                  <p>Automotive</p>
                  <GoArrowUpRight className="text-xl" />
                </div>
              </li>
            </Link>
            <Link href="#">
              <li className="text-[.8rem] hover:underline">
                <div className="flex justify-between w-48">
                  <p>Reseller Portal</p>
                  <GoArrowUpRight className="text-xl" />
                </div>
              </li>
            </Link>
          </ol>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-14 flex justify-between mx-20">
        <div className="flex gap-11">
          <Link href="#">
            <SlSocialInstagram className="text-2xl" />
          </Link>
          <Link href="#">
            <RiTwitterXFill className="text-2xl" />
          </Link>
          <Link href="#">
            <SlSocialFacebook className="text-2xl" />
          </Link>
          <Link href="#">
            <SlSocialYoutube className="text-2xl" />
          </Link>
          <Link href="#">
            <PiTiktokLogoLight className="text-2xl" />
          </Link>
        </div>
        <div>
          <Link href="#" className="text-xs hover:underline">
            United States |{" "}
          </Link>
          <Link href="#" className="text-xs hover:underline">
            English
          </Link>
        </div>
      </div>
      <hr className=" border-neutral-200 w-[1420px] mt-5 mx-auto" />
      <div className="mx-20">
        <div>
          <nav className="flex gap-4 mt-9 items-center mb-32">
            <p className="text-[.8rem] font-semibold">
              © ByteBoutique Corporation 2024
            </p>
            <ol className="flex gap-4">
              <Link href="#">
                <li className="text-[.9rem] hover:underline">Sitemap</li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">Legal</li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">Privacy Policy</li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">Accessibility</li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">
                  CA Notice of Collection
                </li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">
                  Your privacy choices
                </li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">Cookies Notice</li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">Terms of Sale</li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">Terms of Use</li>
              </Link>
              <Link href="#">
                <li className="text-[.9rem] hover:underline">
                  CA Supply Chains Act
                </li>
              </Link>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
