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
import { heroCarouselItems, secondCarouselItems } from "./constants";

export function MainCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="overflow-hidden absolute -z-10 w-full top-0" ref={emblaRef}>
      <div className="flex h-[700px]">
        {heroCarouselItems.map((item, index) => (
          <Image
            quality={100}
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
    <Carousel className="overflow-hidden h-[190px] mt-[182px]">
      <CarouselContent className="flex gap-1">
        {secondCarouselItems.map((item, index) => (
          <CarouselCard key={index} title={item.title} address={item.address} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-20 -mt-[52px] h-12 w-12 bg-white hover:bg-white" />
      <CarouselNext className="mr-20 -mt-[52px] h-12 w-12 bg-white hover:bg-white" />
    </Carousel>
  );
}
