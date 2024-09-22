"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import CarouselCard from "./CarouselCard";

export function MainCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden absolute -z-10 w-full top-0" ref={emblaRef}>
      <div className="flex h-[700px]">
        <Image
          className="embla__slide object-cover"
          src="/images/image2.webp"
          alt="image1"
          width={768}
          height={480}
        />
        <Image
          className="embla__slide object-cover"
          src="/images/image3.jpg"
          alt="image1"
          width={768}
          height={480}
        />
        <Image
          className="embla__slide object-cover"
          src="/images/image4.webp"
          alt="image4"
          width={768}
          height={480}
        />
      </div>
    </div>
  );
}

export function SecondCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex h-[150px] gap-1 mt-28">
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </div>
    </div>
  );
}
