import "./App.css";
import Logo from "./Logo";
import Aside from "./Aside";
import Content from "./Content";
import Titles from "./Titles";
import Nav from "./Nav";
import Hero from "./Hero";

// App.js yra pagrindinis komponentas
// Vienas failas = vienas komponentas
// Komponentai rasomi didziaja raide
// Komponentai buna 2 tipu, funkciniai ir klasiniai
// Funkciniai atrodo kaip funkcijos, tik is didziosios raides. Regular arba Arrow functions
// class => className
// return dalyje rasomas JSX = js + html

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Hero />
      <Titles />
      <div className="main">
        <Content />
        <Aside />
      </div>
    </div>
  );
}

export default App;
