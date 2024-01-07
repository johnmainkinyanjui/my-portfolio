import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Counter } from "./components/Counter";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { SocialLinks } from "./components/SocialLinks";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Counter />
      <Contact />
      <Footer />

      <SocialLinks />
    </div>
  );
}

export default App;
