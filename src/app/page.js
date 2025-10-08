import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import ValuesSection from "@/components/ValuesSection";
import BottomSection from "@/sections/BottomSection";
import CustomerVoice from "@/sections/CustomerVoice";

export default function Home() {
  return (
    <main className="bg-[#041A2F]">
      <Hero />
      <OurStory />
      <ValuesSection />
      <BottomSection />
      <CustomerVoice />
    </main>
  );
}
