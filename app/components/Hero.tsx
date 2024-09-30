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

const Hero = () => {
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
            Ultra Open Earbuds
          </p>
          <Link href="#">
            <div className="absolute bg-white rounded-[1px] h-[50px] w-32 flex items-center left-36 bottom-20">
              <p className=" text-slate-500 font-[700] mx-auto subpixel-antialiased">
                BUY NOW
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center h-[700px]"></div>
      </section>
    </main>
  );
};

export default Hero;
