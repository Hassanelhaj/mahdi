import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import ContactMe from "./components/contact/ContactMw";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      {/* <div className="flex-col-between"> */}
      <Skills/>
      <Services />
      <section id ='contact'>
      <ContactMe />

      </section>
      {/* <ContactForm/> */}
      {/* </div> */}
     
    </div>
  );
}

export default App;
