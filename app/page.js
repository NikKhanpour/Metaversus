import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import Footer from "@/sections/Footer";
import FounderComment from "@/sections/FounderComment";
import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import Insight from "@/sections/Insight";
import NewFeatures from "@/sections/NewFeatures";
import World from "@/sections/World";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <NewFeatures />
      <World />
      <Insight />
      <FounderComment />
      <Footer />
    </div>
  )
}
