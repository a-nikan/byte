import Link from "next/link";
import { MainCarousel, SecondCarousel } from "./Carousel";
import ProductCard from "./ProductCard";
import Image from "next/image";
import { productCardItems } from "./constants";
import localFont from "next/font/local";

// Fonts

const SF = localFont({ src: "../fonts/SF.otf" });
const bose = localFont({
  src: "../fonts/Bose-HeadlineBold.woff2",
  weight: "900",
});

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
            className={`${bose.className} text-6xl font-extrabold mt-24 mx-24 subpixel-antialiased`}
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
            <div className="relative h-dvh w-[670px] ">
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
    </main>
  );
};

export default Main;
