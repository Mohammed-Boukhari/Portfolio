import Header from "./components/I-Header/Header";
import Hero from "./components/II-Hero/Hero";
import Main from "./components/III-Main/Main";
import Contact from "./components/IV-Contact/Contact";
import Footer from "./components/V-Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div id="up" className="container">
      {/* Header component */}
      <Header />
      {/*== Header component ==*/}

      {/* Hero component */}
      <Hero />
      {/*== Hero component ==*/}

      <div className="divider" />

      {/* Main component */}
      <Main />
      {/*== Main component ==*/}

      <div className="divider" />

      {/* Contact component */}
      <Contact />
      {/*== Contact component ==*/}

      <div className="divider" />

      {/* Footer component */}
      <Footer />
      {/*== Footer component ==*/}

      <a href="#up">
        <button className="scrollToTop">
          <i className="icon-keyboard_arrow_up"></i>
        </button>
      </a>
    </div>
  );
}

export default App;
