import { Check } from "lucide-react";
import { Button } from "../ui/button";

type PricingContentProps = {
    title: string;
    description: string;
    price: string;
    per?: string;
    button: React.ReactNode;
    list: string[];
}

const PricingContent: PricingContentProps[] = [
    {
        title: "Usage Based",
        description: "Pay as you go. Get $25 credits and a complimentary phone number to try Sent today.",
        price: "$0.015",
        per: "Per Contact",
        button: <Button className="w-full">Get Started Now</Button>,
        list: [
            "Up to 25k monthly active contacts",
            "All features included",
            "10DLC SMS, WhatsApp, and other 3rd Party Fees charged with no markup"
        ]
    },
    {
        title: "Enterprise Ready",
        description: "Scale confidently with a custom messaging platform designed for enterprise-grade performance.",
        price: "Custom",
        button: <Button variant="outline" className="w-full">Talk to Sales</Button>,
        list: [
            "Unlimited monthly contacts with volume-based discounts",
            "Priority support with <1h response time",
            "Custom contracts with SLAs"
        ]
    }   
]

const PricingCard = ({ content }: { content: PricingContentProps }) => {
    return (
        <div className="p-6 pt-0 rounded-xl text-card-foreground shadow group relative overflow-hidden border border-white/4 bg-white/[0.15] backdrop-blur-[12px] transition-all duration-500 hover:bg-white/40 transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-40px_120px_-40px_#ffffff1f_inset] before:absolute before:inset-0 before:opacity-0 before:[background:radial-gradient(circle_at_center,var(--color-one),transparent_70%)] before:[filter:blur(120px)] group-hover:before:opacity-20">
            <h3 className="font-semibold leading-none tracking-tight ">
                <p className="text-2xl font-bold mb-4 bg-gradient-to-br dark:from-white dark:to-white/50 bg-clip-text text-transparent">
                    {content.title}
                </p>
                <p className="text-base font-normal text-zinc-400">
                    {content.description}
                </p>
            </h3>

            <div className="flex flex-row">
                <p className="text-4xl font-bold bg-gradient-to-br from-black dark:from-white to-black/40 dark:to-white/50 bg-clip-text text-transparent">
                    {content.price}
                </p>
                <p className="text-zinc-500">
                    {content.per}
                </p>
            </div>

            {content.button}

            <ul className="space-y-4">
                {content.list.map((item, index) => (
                    <li key={index} className="flex gap-2 text-zinc-400 items-center"><Check />{item}</li>
                ))}
            </ul>
        </div>
    )
}

export const Pricing = () => {
  return (
    <div className="relative">
      <div className="relative mx-auto max-w-4xl pt-24">
        <h2 className="text-4xl text-center font-bold mb-4 bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-transparent">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-center mx-auto max-w-5xl text-zinc-400">Start for free and scale as you grow</p>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="rounded-xl before:absolute before:inset-0 before:opacity-0 before:[filter:blur(150px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-two),transparent_70%)] before:animate-image-glow">
            <div className="relative mx-auto max-w-[80rem] px-6 py-12 md:px-8">
                <div className="grid gap-6 md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
                    {PricingContent.map((item, index) => (
                        <PricingCard key={index} content={item}/>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
