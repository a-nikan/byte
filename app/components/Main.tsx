import Link from "next/link";
import { MainCarousel, SecondCarousel } from "./Carousel";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { productCardItems } from "./constants";
import localFont from "next/font/local";
import ThirdCarousel from "./ThirdCarousel";
import { whyBuyCardItems } from "./constants";
import WhyBuyCards from "./WhyBuyCards";
import { IoIosArrowRoundForward } from "react-icons/io";

// Fonts

const SF = localFont({ src: "../fonts/SF.otf" });
const bose = localFont({
  src: "../fonts/Bose-HeadlineBold.woff2",
  weight: "900",
});
const boseText = localFont({ src: "../fonts/BoseText-Medium.woff2" });

const Main = () => {
  return (
    <main>
      {/* Main Hero Section */}
      <section>
        <MainCarousel />
        <div className="flex flex-col ml-20 pt-64">
          <h1
            className={`${bose.className} text-cyan-200 lg:text-[96px] md:text-[80px] text-[60px] pb-5 justify-center subpixel-antialiased`}
          >
            Hear it all. All the time.
          </h1>
          <p
            className={`${SF.className} text-cyan-200 text-3xl pb-8 -mt-5  subpixel-antialiased`}
          >
            Ultra Open Earbuds
          </p>
          <Link href="#">
            <div className="bg-cyan-200 rounded-[1px] h-[50px] w-32 flex items-center">
              <p className="text-blue-950 font-bold mx-auto subpixel-antialiased">
                BUY NOW
              </p>
            </div>
          </Link>
        </div>
        <SecondCarousel />
      </section>
      {/* Second Section */}
      <section>
        <div>
          <h1
            className={`${bose.className} text-6xl font-extrabold mt-8 mx-24 subpixel-antialiased`}
          >
            Trending products
          </h1>
          <div className="mx-20 mt-5 flex gap-1 items-center flex-wrap justify-center">
            {productCardItems.map((item, index) => (
              <ProductCard
                key={index}
                title={item.title}
                img={item.img}
                price={item.price}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section>
        <div className="overflow-hidden flex mt-40 relative">
          <Image
            quality={100}
            className="object-cover -z-10 relative items-center m-auto"
            src="/images/SF_QCEB25_HP-HERO-PANEL_WHITE_SITU.jpeg"
            alt="SF_QCEB25_HP - HERO - PANEL_WHITE_SITU"
            width={1350}
            height={700}
          />
          <h1
            className={`${bose.className} absolute font-black text-white pt-[500px] lg:text-[96px] md:text-[80px] text-[60px] subpixel-antialiased left-36 bottom-48`}
          >
            The essential, made epic
          </h1>
          <p
            className={`${SF.className}  absolute text-white text-2xl pb-8 -mt-5 subpixel-antialiased left-36 bottom-32`}
          >
            New QuietComfort Earbuds
          </p>
          <Link href="#">
            <div className="absolute bg-white rounded-[1px] h-[50px] w-32 flex items-center left-36 bottom-20">
              <p className=" text-slate-500 font-[700] mx-auto subpixel-antialiased">
                BUY NOW
              </p>
            </div>
          </Link>
        </div>
        {/* Fourth Section */}
        <section>
          <div className="flex justify-center">
            <div className="flex justify-center h-dvh gap-6 mt-6 relative w-[1350px]">
              <div className="relative h-dvh w-[670px]">
                <Image
                  className="-z-10"
                  quality={100}
                  src="/images/CREA-1086_UOEB24_Black_CentralCee_0297.jpeg"
                  alt="CREA-1086_UOEB24_Black_CentralCee_0297"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <p
                  className={`${SF.className}  absolute text-[#c2ffc5] text-[22px] pb-8 -mt-5 subpixel-antialiased left-8 bottom-[70px]`}
                >
                  Listen like Central Cee.
                </p>
                <h1
                  className={`${bose.className} absolute font-black text-[#c2ffc5] pt-[500px] lg:text-[60px] md:text-[80px] text-[60px] subpixel-antialiased left-8 bottom-36`}
                >
                  Turn up without tuning out
                </h1>{" "}
                <p
                  className={`${SF.className}  absolute text-[#c2ffc5] text-[18px] pb-8 -mt-5 subpixel-antialiased left-8 bottom-48`}
                >
                  ULTRA OPEN EARBUDS
                </p>
                <Link href="#">
                  <div className="absolute bg-[#c2ffc5] rounded-[2px] h-[50px] w-32 flex items-center left-8 bottom-8 ">
                    <p className=" text-[#007058] p font-[700] mx-auto subpixel-antialiased">
                      BUY NOW
                    </p>
                  </div>
                </Link>
              </div>
              <div className="relative h-dvh w-[670px]">
                <Image
                  className="-z-10"
                  quality={100}
                  src="/images/SSB_Inbox_Message_375x375_x2_2.jpeg"
                  fill
                  alt="SSB_Inbox_Message_375x375_x2_2"
                  style={{ objectFit: "cover" }}
                />
                <p
                  className={`${SF.className}  absolute text-white text-[22px] pb-8 -mt-5 subpixel-antialiased left-8 bottom-[70px]`}
                >
                  Pair with Ultra Open Earbuds for Personal Surround Sound.
                </p>
                <h1
                  className={`${bose.className} absolute font-black text-white pt-[500px] lg:text-[60px] md:text-[80px] text-[60px] subpixel-antialiased left-8 bottom-36`}
                >
                  Open-ear immersion
                </h1>{" "}
                <p
                  className={`${SF.className}  absolute text-white text-[18px] pb-8 -mt-5 subpixel-antialiased left-8 bottom-48`}
                >
                  NEW SMART SOUNDBAR
                </p>
                <Link href="#">
                  <div className="absolute bg-white rounded-[2px] h-[50px] w-32 flex items-center left-8 bottom-8 ">
                    <p className=" text-black p font-[700] mx-auto subpixel-antialiased">
                      BUY NOW
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className="mt-36">
          <div className="pl-[88px] pr-20 mb-9  ">
            <h1 className={`${bose.className} text-6xl mb-3 text-neutral-900`}>
              Bose Stories
            </h1>
            <p className={`${SF.className} text-[16px]`}>
              The people & stories that excites us.
            </p>
          </div>
          <ThirdCarousel />
        </div>
      </section>
      {/* Section 4 */}
      <section>
        <div className="relative mx-auto w-[1350px] h-screen overflow-hidden mt-36">
          <div className="flex flex-col relative gap-6 left-[2.5rem] top-[30rem]">
            <h1 className={`${bose.className} text-6xl text-white`}>
              Bose Automotive
            </h1>
            <p className={`${SF.className} text-2xl text-white`}>
              True believers in the power of sound
            </p>
            <Link href="#">
              <div className="rounded-[1px] h-[48px] w-[151px] flex items-center bg-white">
                <p className="tracking-widest text-[15.5px] text-black font-bold mx-auto subpixel-antialiased">
                  LEARN MORE
                </p>
              </div>
            </Link>
          </div>
          <Image
            className="relative object-cover -z-10"
            src="/images/15_shot10_porsche_myron_07153_v2.webp"
            alt="15_shot10_porsche_myron_07153_v2"
            fill
            quality={100}
          />
        </div>
      </section>
      {/* Section 5 */}
      <section>
        <div className="mt-32">
          <h1
            className={`${bose.className} text-6xl text-neutral-950 pl-[88px] mb-14`}
          >
            Why buy from ByteBoutiqe
          </h1>
          <div className="flex w-[1200px] ml-20 gap-14 justify-between">
            {whyBuyCardItems.map((item, index) => (
              <WhyBuyCards
                key={index}
                Icon={item.Icon}
                description={item.description}
                title={item.title}
                fwBtn={item.fwBtn}
              />
            ))}
          </div>
        </div>
        <div className="mt-28 ml-20">
          <p className={`${SF.className} font-bold text-[18.5px] w-[60%]`}>
            Important recall notice regarding certain Acoustimass, Lifestyle,
            and Companion system bass modules manufactured prior to April 1,
            2006.
          </p>
          <Link href="#">
            <p
              className={`${SF.className} text-[16] font-bold text-[#1669FF] tracking-widest mt-10`}
            >
              LEARN MORE &gt;
            </p>
          </Link>
        </div>
        <div className="mt-48 gap-7 flex flex-col justify-center mx-auto items-center max-w-[1024px]">
          <h1 className={`${bose.className} text-[4rem] `}>
            Get 10% off your first purchase*
          </h1>
          <h2 className={`${boseText.className} text-2xl`}>
            Three steps to saving:
          </h2>
          <ol className="flex flex-wrap gap-4 min-w-[768px]">
            <li className="flex justify-center items-center gap-2">
              <div
                className={`flex items-center text-[1.125rem] justify-center w-[27px] h-[27px] bg-black text-white rounded-full ${boseText.className}`}
              >
                1
              </div>
              <span className={`${boseText.className} text-[.875rem]`}>
                Sign up to receive ByteBoutique emails and communications below
              </span>
            </li>
            <li className="flex justify-center items-center gap-2">
              <div
                className={`flex items-center text-[1.125rem] justify-center w-[27px] h-[27px] bg-black text-white rounded-full ${boseText.className}`}
              >
                2
              </div>
              <span className={`${boseText.className} text-[.875rem]`}>
                Become a My ByteBoutique member
              </span>
            </li>
            <li className="flex justify-center items-center gap-2">
              <div
                className={`flex items-center text-[1.125rem] justify-center w-[27px] h-[27px] bg-black text-white rounded-full ${boseText.className}`}
              >
                3
              </div>
              <span className={`${boseText.className} text-[.875rem]`}>
                Receive an email with your 10% coupon
              </span>
            </li>
          </ol>
          <div>
            <form className="flex gap-6 justify-center items-center">
              <div className="relative w-[480px]">
                <input
                  type="email"
                  id="email"
                  className="w-full h-[3.2rem] border-b-2 border-black bg-transparent focus:outline-none peer"
                />
                <label
                  htmlFor="email"
                  className={`${boseText.className} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 transition-all duration-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-neutral-600`}
                >
                  Email address
                </label>
              </div>
              <button
                type="submit"
                className="bg-white flex justify-center items-center gap-2 border border-black h-[3.2rem] w-32 rounded-[2px]"
              >
                <span className={`${boseText.className}`}>SIGN UP </span>
                <span>
                  <IoIosArrowRoundForward size="1.5rem" />
                </span>
              </button>
            </form>
          </div>
          <p
            className={`${boseText.className} text-xs font-semibold mt-10 w-[700px]`}
          >
            *The coupon code will be sent via email. Offer valid for full-priced
            products with a maximum discount of $100. Please see email for full
            terms and conditions of this offer.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
