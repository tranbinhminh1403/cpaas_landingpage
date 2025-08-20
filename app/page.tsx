import { Banner } from "@/components/homepage/Banner";
import { Faq } from "@/components/homepage/Faq";
import { Features } from "@/components/homepage/Features";
import { Partner } from "@/components/homepage/Partner";
import { Pricing } from "@/components/homepage/Pricing";
import { Register } from "@/components/homepage/Register";
import { Services } from "@/components/homepage/Services";
import { SignUp } from "@/components/homepage/SignUp";

export default function Home() {
  return (
    <div>
      <Banner />
      <Partner />
      <Features />
      <Services />
      <Pricing />
      <Faq />
      <Register />
      <SignUp />
    </div>
  );
}
