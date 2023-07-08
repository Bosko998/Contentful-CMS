import React from "react";
import img from "./assets/hero.svg";
function Navbar() {
  return (
    <section className="hero">
      <div className="nav-center">
        <div className="hero-title">
          <h1>contentful CMS</h1>
          <p>
            Pitchfork schlitz tonx, coloring book celiac tousled succulents
            ascot affogato cardigan jianbing crucifix seitan. Synth man braid
            everyday carry try-hard pour-over keffiyeh slow-carb sriracha
            chillwave banjo gochujang kinfolk small batch mustache.
          </p>
        </div>
        <div className="img-container">
          <img src={img} alt="image" />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
