import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { useState, useEffect, useRef } from "react";

const useScrollDirection = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollY = useRef(0); // Persist lastScrollY across renders

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY.current) {
        // User is scrolling up
        setIsScrollingUp(true);
      } else {
        // User is scrolling down
        setIsScrollingUp(false);
      }
      lastScrollY.current = window.scrollY; // Update lastScrollY using useRef
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isScrollingUp;
};

export default useScrollDirection;
