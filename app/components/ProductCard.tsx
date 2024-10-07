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
    <div className="h-[530px] w-[330px] bg-gray-100 subpixel-antialiased hover:bg-white hover:shadow-lg cursor-pointer flex-col">
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
          <div
            key={index}
            className="h-7 w-7 rounded-full border border-gray-400"
            style={{ backgroundColor: item }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
