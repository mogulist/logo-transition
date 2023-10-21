import React, { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";

const logos = ["/logos/ktown4u.png", "/vercel.svg"];

const effectConfig = {
  rotate: ["rotate-0", "rotate-90"],
  "rotate-x-bottom": ["rotate-x-0 origin-bottom", "rotate-x-90 origin-bottom"],
  "rotate-x": ["rotate-x-0", "rotate-x-90"],
  "rotate-y": ["rotate-y-0", "rotate-y-90"],
  "translate-x": ["translate-x-0", "-translate-x-4"],
  scale: ["scale-100", "scale-0"],
  opacity: ["", ""],
};

type Effect = keyof typeof effectConfig;

type Props = {
  effect: Effect;
};
const LogoTransition = ({ effect }: Props) => {
  const [currentLogo, setCurrentLogo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo + 1) % logos.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const selectedEffects = effectConfig[effect];

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
          className={classNames(
            "absolute transition-all duration-1000 ease-in-out ",
            currentLogo === index ? "opacity-100" : "opacity-0",
            currentLogo === index ? selectedEffects[0] : selectedEffects[1]
          )}
        />
      ))}
    </div>
  );
};

export default LogoTransition;
