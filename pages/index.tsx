import { Inter } from "next/font/google";
import LogoTransition from "./LogoTransition";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col space-y-16 mb-16">
          <LogoTransition effect="translate-x" />
          <LogoTransition effect="scale" />
          <LogoTransition effect="opacity" />
          <LogoTransition effect="rotate-x" />
          <LogoTransition effect="rotate-x-bottom" />
          <LogoTransition effect="rotate-y" />
          <LogoTransition effect="rotate" />
        </div>
      </div>
    </main>
  );
}
