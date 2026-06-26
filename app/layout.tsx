// app/layout.tsx
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Hero from "./components/shared/Hero";
import Features from "./components/shared/Features";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-legal-black text-white">
        <Navbar />
        <Hero />
        <Features />
        <main className="min-h-screen">{children}</main> {/* 2. Layout organizado */}
        <Footer /> {/* 3. Footer al final */}
      </body>
    </html>
  );
}