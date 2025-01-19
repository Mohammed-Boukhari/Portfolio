import Lottie from "lottie-react";
import contactAnimation from "../../animation/Animation - 1736975163567.json";

import "./Contact.scss";

const supTitel = ` Contact us for more information and Get notified when l publish something new`;

const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="titel">
        <span className="icon-envelope"></span>
        {` `}
        Contact us
      </h1>
      <p className="sub-titel">{supTitel}</p>

      <div style={{ justifyContent: "space-around" }} className="flex">
        <form>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              id="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              placeholder="Message"
              name=""
              id="message"
            ></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
        {/* animation */}
        {/* FIXME: https://app.lottiefiles.com/animation/fefafb48-ebe0-4ef4-addc-58a90488c6c4?channel=web&source=public-animation&panel=download */}
        {/* FIXME: https://lottiereact.com/ */}
        <div className="animation">
          <Lottie
            // FIXME: animation development
            className="animationEmail"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
        {/*== animation ==*/}
      </div>
    </section>
  );
};

export default Contact;
