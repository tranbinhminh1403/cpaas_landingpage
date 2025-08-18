import Image from "next/image";

export const Partner = () => {
  return (
    <div className="text-center mx-auto max-w-[80rem] px-6 py-14 md:px-8">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="text-center text-sm font-semibold text-gray-600">
          BACKED BY:
        </h2>
        <div className="mt-6">
            <div className="flex flex-wrap items-center justify-center gap-6 ">
                <Image src="/img/BVP.png" alt="banner" width={200} height={200} className="rounded-lg"/>
                <Image src="/img/CV.png" alt="banner" width={200} height={200} className="rounded-lg"/>
                <Image src="/img/UIF.png" alt="banner" width={200} height={200} className="rounded-lg"/>
            </div>
        </div>
      </div>
    </div>
  );
};
