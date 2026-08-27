import About from "./components/aboutUs"
import Footer from "./components/footer";
import Experience from "./components/exprience"
import Contact from "./components/contact"
import Navbar from "./components/navBar"
import Home from "./components/home"
import Work from "./components/work";

function App() {
  return (
    <div className="bg-[#0a192f] relative">
      <Navbar />

      <Home />
      <section
        id="about"
        className="bg-[#0a192f] text-white px-6 md:px-10 lg:px-20 py-14 md:py-16"
      >
        <About />
      </section>

      <section
        id="experience"
        className="bg-[#0a192f] text-white px-6 md:px-10 lg:px-20 py-14 md:py-16"
      >
        <Experience />
      </section>
      <section
        id="work"
        className="bg-[#0a192f] text-white px-6 md:px-10 lg:px-20 py-14 md:py-16"
      >
        <Work />
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
