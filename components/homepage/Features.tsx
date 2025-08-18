import { Blocks, CircleDollarSign, MessageCircleCode, Webhook } from "lucide-react";
import { FeatureContent } from "./FeatureConten";
import { FeatureContentProps } from "./FeatureConten";

const data: FeatureContentProps[] = [
  {
    icon: <CircleDollarSign />,
    title: "Global Reach, Lower Costs",
    description:
      "Sent's intelligent delivery model optimizes to provide global reach and reduce messaging costs by 80-90%.",
  },
  {
    icon: <MessageCircleCode />,
    title: "Seamless Cross-Channel Delivery",
    description:
      "Sent identifies the best messaging channel to reach a contact, and transforms message content to match schema requirements.",
  },
  {
    icon: <Blocks />,
    title: "Best-In-Class SDKs",
    description:
      "Sent supports SDKs in 5+ languages. Integrate with your application in minutes.",
  },
  {
    icon: <Webhook />,
    title: "Modular Webhooks",
    description:
      "Get real-time notifications for every message event.",
  },
];

export const Features = () => {
  return (
    <div className="relative py-24 px-6 md:px-8">
      <div className="mx-auto max-w-[80rem] mb-[10rem]">
        <h2 className="text-4xl text-center font-bold mb-8">
          The Next Generation of A2P Messaging
        </h2>
        <h3 className="text-xl text-center mx-auto text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
          Discover how Sent&apos;s unified messaging API is transforming
          business messaging while providing a first-class developer experience.
        </h3>
        <div className="grid w-full auto-rows-[22rem] grid-cols-3 gap-4">
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-3 lg:col-span-1">
            <div></div>
            <FeatureContent content={data[0]} />
          </div>
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-3 lg:col-span-2">
            <div></div>
            <FeatureContent content={data[1]} />
          </div>
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-3 lg:col-span-2">
            <div></div>
            <FeatureContent content={data[2]} />
          </div>
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-3 lg:col-span-1">
            <div></div>
            <FeatureContent content={data[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};
