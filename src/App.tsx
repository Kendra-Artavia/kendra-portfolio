import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="focus-ring sr-only top-4 left-4 z-[60] rounded-full bg-card px-4 py-2 font-medium text-ink focus:not-sr-only focus:absolute"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Contact />
      </main>
    </>
  );
}
