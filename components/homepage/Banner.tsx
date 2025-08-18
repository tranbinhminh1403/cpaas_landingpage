import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Banner = () => {
  return (
    <div className="mx-auto mt-32 mb-2 max-w-[80rem] px-6 text-center md:px-8">
      <h1 className="py-6 text-5xl font-medium tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl">
        One API, every messaging channel
      </h1>
      <h2 className="mb-12 text-lg font-normal tracking-tight md:text-xl text-balance">
        Sent is a unified API for messaging across SMS and apps
        <br className="hidden md:block" />
        like WhatsApp.
      </h2>
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md flex justify-center">
          <Button size="lg" variant="outline" className="cursor-pointer font-medium">
            Get started now
          </Button>
        </div>
      </div>

      <div className="relative mt-[8rem] animate-fade-up">
        <Image src="/img/hero-dark.png" alt="banner" width={2000} height={1000} className="rounded-lg"/>
      </div>
    </div>
  );
};