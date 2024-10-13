import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  img: string;
  price: string;
  color: string[];
}

const ProductCard = (props: Props) => {
  return (
    <div className="h-[530px] w-[330px] bg-gray-100 subpixel-antialiased hover:bg-white duration-300 transition-shadow transition-colors hover:shadow-2xl cursor-pointer flex-col">
      <Image
        quality={100}
        className="pt-20"
        alt={props.title}
        height={300}
        width={400}
        src={props.img}
      />
      <p className="px-6 pt-5 font-bold text-lg leading-6">{props.title}</p>
      <p className="px-6 pt-5 font-bold text-[16px] leading-6">{props.price}</p>
      <div className="px-6 pt-5 flex gap-3 mt-5">
        {props.color.map((item, index) => (
          <div className="grid place-items-center h-[40px] w-[40px] rounded-full border border-white bg-white">
            <div
              key={index}
              className="h-[29px] w-[29px] rounded-full border border-gray-500 hover:scale-125 transition-transform transform origin-center duration-100"
              style={{ backgroundColor: item }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
