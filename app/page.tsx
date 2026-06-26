import Hero from "./components/shared/Hero";
import Features from "./components/shared/Features";
import Contact from "./components/shared/Contact";
import Partners from "./components/shared/Partners";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Partners />
      <Contact />
    </main>
  );
}