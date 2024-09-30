import localFont from "next/font/local";
import Link from "next/link";
import { MainCarousel, SecondCarousel } from "./Carousel";
import ProductCard from "./ProductCard";

const productCardItems = [
  {
    title: "Bose QuietComfort Earbuds",
    img: "/images/SF_QCEB25_WHITE_PDP_ECOMM-GALLERY_IMG-1.webp",
    price: "$179.00",
    color: ["#000000", "#c5c6e1", "#ffffff"],
  },
  {
    title: "Bose QuietComfort Ultra Headphones",
    img: "/images/QCUH_LunarBlue_Wired_400x300_x.webp",
    price: "$429.00",
    color: ["#000000", "#eee8e5", "#203449", "#d3d3d2", "#928982"],
  },
  {
    title: "Bose QuietComfort Headphones",
    img: "/images/QCHLE25_ChilledLilac_001_RightFacing_RGB.webp",
    price: "$349.00",
    color: ["#000000", "#eee8e5", "#486e8a", "#928982", "#c5c6e1", "#a2c2d9"],
  },
  {
    title: "Bose Ultra Open Earbuds",
    img: "/images/SF_PDP_GALLERY_AIRFLYPRO_BLACK_QCEU_BLACK-1.webp",
    price: "$353.99",
    color: [],
  },
];

const SF = localFont({ src: "../fonts/SF.otf" });
2;
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
            <div className="bg-cyan-200 rounded-sm h-12 w-32 flex items-center">
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
    </main>
  );
};

export default Hero;
