import Navbar from "./component/navbar";
import HeroSection from "./component/herosection";
import Section from "./component/Section";
import VisiMisi from "./component/visimisi";
import Service from "./component/service";
import Contact from "./component/Contact";
import Maps from "./component/Maps";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Section />
      <VisiMisi />
      <Service />
      <Contact />
      <Maps />
      <Footer />
    </>
  );
}

export default App;
