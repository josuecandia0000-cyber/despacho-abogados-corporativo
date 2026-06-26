import Hero from "./components/shared/Hero";
import Features from "./components/shared/Features";
import Contact from "./components/shared/Contact";
import Partners from "./components/shared/Partners";
import Services from "./components/shared/Services";
import Stats from "./components/shared/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Services />
      <Partners />
      <Stats />
      <Contact />
    </main>
  );
}