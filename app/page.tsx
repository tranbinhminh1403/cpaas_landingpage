import { Banner } from "@/components/homepage/Banner";
import { Features } from "@/components/homepage/Features";
import { Partner } from "@/components/homepage/Partner";
import { Pricing } from "@/components/homepage/Pricing";
import { Services } from "@/components/homepage/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Partner />
      <Features />
      <Services />
      <Pricing />
    </div>
  );
}
