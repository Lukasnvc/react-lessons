import "./App.css";
import { aside } from "./Aside";
import { content } from "./Content";
import { titles } from "./Titles";
import { nav } from "./Nav";
import { hero } from "./Hero";

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
      {nav}
      {hero}
      <div className="title-cards">{titles}</div>
      <div className="main">
        {content}
        {aside}
      </div>
    </div>
  );
}

export default App;
