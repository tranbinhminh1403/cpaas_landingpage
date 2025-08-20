import { Button } from "@/components/ui/button";

const LogoSVG = ({ color = 'currentColor', className = '' }) => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path
        d="M9.92254 6.43668C9.52411 6.28609 9.32318 5.84103 9.47377 5.44259L10.9643 1.49879C11.1149 1.10035 11.5599 0.89943 11.9584 1.05001L23.5012 5.41249C23.8996 5.56307 24.1006 6.00814 23.95 6.40657L19.5875 17.9494C19.4369 18.3479 18.9919 18.5488 18.5934 18.3982L14.6496 16.9077C14.2512 16.7571 14.0503 16.312 14.2008 15.9136L16.5275 9.75741C16.6781 9.35898 16.4772 8.91391 16.0787 8.76333L9.92254 6.43668Z"
        fill={color}></path>
    <path
        d="M0.498786 10.6492C0.100353 10.4986 -0.10057 10.0535 0.0500128 9.65507L1.54053 5.71127C1.69111 5.31283 2.13617 5.11191 2.53461 5.26249L14.0775 9.62497C14.4759 9.77555 14.6768 10.2206 14.5262 10.6191L10.1638 22.1619C10.0132 22.5603 9.56811 22.7613 9.16968 22.6107L5.22587 21.1202C4.82743 20.9696 4.62651 20.5245 4.77709 20.1261L7.10375 13.9699C7.25433 13.5715 7.05341 13.1264 6.65497 12.9758L0.498786 10.6492Z"
        fill={color}></path>
</svg>
);

export const Register = () => {
  return (
    <div className="relative pt-32 pb-24 px-6 md:px-8">
        <div className="flex flex-col items-center justify-center w-full h-full gap-2">
            <div className="p-5 border bg-black/10 backdrop-blur-xl rounded-xl">
                <div className="text-white">
                    <LogoSVG className="w-12 h-12"/>
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