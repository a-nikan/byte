"use client";

import { useState, useEffect, useRef } from "react";

// Scroll Direction Detector Hook

export const useScrollDirection = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0); // Persist lastScrollY across renders

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (window.scrollY < lastScrollY.current) {
        // User is scrolling up
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 0) {
        // User is scrolling down and they are not at the top of the page
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
