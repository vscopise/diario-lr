"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollTop = () => {
  
const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      className={`fixed bottom-0 right-0 p-10 ${isVisible ? "block" : "hidden"}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};
