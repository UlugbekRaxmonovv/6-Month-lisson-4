import Footer from "./components/Footer/Footer";
import Section from "./components/Footer/Section/Section";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Postavka from "./components/Postavka/Postavka";
import Company from "./components/company/Company";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Hero/>
      <Section/>
      <Postavka/>
      <Company/>
      <Footer/>
    </div>
  );
}

export default App;
