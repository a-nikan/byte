import localFont from "next/font/local";
import Link from "next/link";
import { MainCarousel, SecondCarousel } from "./Carousel";

const SF = localFont({ src: "../fonts/SF.otf" });
2;
const bose = localFont({
  src: "../fonts/Bose-HeadlineBold.woff2",
  weight: "900",
});

const Hero = () => {
  return (
    <section>
      <MainCarousel />
      <div className="flex flex-col ml-20 pt-64">
        <h1
          className={`${bose.className} text-cyan-200 lg:text-[96px] md:text-[80px] text-[60px] pb-5 justify-center`}
        >
          Hear it all. All the time.
        </h1>
        <p className={`${SF.className} text-cyan-200 text-3xl pb-8 -mt-5`}>
          Ultra Open Earbuds
        </p>
        <Link href="#">
          <div className="bg-cyan-200 rounded-sm h-12 w-32 flex items-center">
            <p className="text-blue-950 font-bold mx-auto">BUY NOW</p>
          </div>
        </Link>
      </div>
      <SecondCarousel />
    </section>
  );
};

export default Hero;
