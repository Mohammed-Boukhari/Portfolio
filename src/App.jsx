import Header from "./components/I-Header/Header";
import Hero from "./components/II-Hero/Hero";
import Main from "./components/III-Main/Main";
import Contact from "./components/IV-Contact/Contact";
import Footer from "./components/V-Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="container">
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
    </div>
  );
}

export default App;
