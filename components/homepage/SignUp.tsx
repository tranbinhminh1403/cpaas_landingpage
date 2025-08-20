import { ArrowIcon } from "@/components/icon/ArrowIcon";
import Link from "next/link";
import { Button } from "../ui/button";

const SparkleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-sparkles w-6 h-6 text-emerald-400"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
      <path d="M5 3v4"></path>
      <path d="M19 17v4"></path>
      <path d="M3 5h4"></path>
      <path d="M17 19h4"></path>
    </svg>
  );
};

export const SignUp = () => {
  return (
    <div className="px-6 md:px-8">
      <div className="mx-auto max-w-[80rem]">
        <div className="my-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div className="relative px-8 py-8 text-center space-y-4">
              <div className="flex justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                  <SparkleSVG />
                </div>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                Ready to transform your messaging?
              </h2>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <p className="mx-auto max-w-3xl text-base text-zinc-300 leading-relaxed">
                Join thousands of businesses using Sent to deliver reliable,
                global messaging that drives results. Start your journey today.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row pt-4">
                <Link href="/">
                  <Button className="bg-emerald-600 text-white hover:bg-emerald-500 cursor-pointer">
                    <span className="relative z-10 flex items-center gap-2">
                      Sign Up
                      <ArrowIcon />
                    </span>
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="cursor-pointer">
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More
                      <ArrowIcon />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
