import React, { useState, useEffect } from "react";
import Image from "next/image";

const logos = ["/logos/ktown4u.png", "/vercel.svg"];

const LogoTransition = () => {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo + 1) % logos.length);
    }, 2000); // Change logo every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      // className={styles.logoContainer}
      className="relative w-[105px] h-[20px]"
    >
      {logos.map((logo, index) => (
        <Image
          key={logo}
          src={logo}
          alt={`Logo ${index + 1}`}
          width={105}
          height={20}
          className={
            "absolute transition-opacity duration-500 ease-in-out " +
            (currentLogo === index ? "opacity-100" : "opacity-0")
          }
        />
      ))}
    </div>
  );
};

export default LogoTransition;
