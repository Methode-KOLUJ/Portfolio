import { About } from "./assets/components/About";
import { Footer } from "./assets/components/Footer";
import { Form } from "./assets/components/Form";
import Home from "./assets/components/Home";
import { Loader } from "./assets/components/Loader";
import Navbar from "./assets/components/Navbar";
import Realisations from "./assets/components/Réalisations";
import Services from "./assets/components/Services";
import SEO from "./assets/components/react-helmet";


const App = () => {
  return (
    <>
      <SEO
        title="KOLUJ_DEV | OFFICIEL"
        description="Bienvenue sur le site officiel de KOLUJ_DEV, le Développeur prêt à propulser votre business."
        keywords="Développeur, DEV, Programmation, Intelligence Artificielle, SEO, FullStack"
      />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Realisations />
      <Form />
      <Footer />
      <Loader />
    </>
  );
};

export default App;



