import { Button } from "@/components/ui/button";
import { AppLogo } from "@/components/icon/AppLogo";

export const Register = () => {
  return (
    <div className="relative pt-32 pb-24 px-6 md:px-8">
        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="p-5 border bg-black/10 backdrop-blur-xl rounded-xl">
                <div className="text-white">
                    <AppLogo className="w-12 h-12"/>
                </div>

            </div>
            <div className="mt-4 text-center">  
                <h2 className="text-3xl font-bold lg:text-4xl">Get Access to Sent Today.</h2>
                <p className="mt-2 mb-8">Text your customers on the channels they use most.</p>
            </div>

            <Button variant="outline" className="cursor-pointer text-base font-medium px-10 py-5">Get Started Now →</Button>
        </div>
    </div>
  );
};