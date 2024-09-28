"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import CarouselCard from "./CarouselCard";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Define an array with different titles and addresses for Second carousel
const items = [
  { title: "Earbuds", address: "/earbuds" },
  { title: "Headphones", address: "/headphones" },
  { title: "Speakers", address: "/speakers" },
  { title: "Smartwatch", address: "/smartwatch" },
  { title: "Camera", address: "/camera" },
  { title: "Laptop", address: "/laptop" },
  { title: "Tablet", address: "/tablet" },
  { title: "Phone", address: "/phone" },
  { title: "Gaming Console", address: "/gaming-console" },
];

// Define an array with different src and alt for Main carousel Images
const mainItems = [
  { src: "/images/image2.webp", alt: "image2" },
  { src: "/images/image3.jpg", alt: "image3" },
  { src: "/images/image4.webp", alt: "image4" },
];

export function MainCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden absolute -z-10 w-full top-0" ref={emblaRef}>
      <div className="flex h-[700px]">
        {mainItems.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            className="embla__slide object-cover"
            width={1200}
            height={1200}
          />
        ))}
      </div>
    </div>
  );
}

export function SecondCarousel() {
  return (
    <Carousel className="overflow-hidden h-[190px]">
      <CarouselContent className="flex h-[190px] gap-1 mt-28">
        {items.map((item, index) => (
          <CarouselCard key={index} title={item.title} address={item.address} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-20 mt-14 h-12 w-12" />
      <CarouselNext className="mr-20 mt-14 h-12 w-12" />
    </Carousel>
  );
}
