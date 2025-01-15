// import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import contactAnimation from "../../animation/Animation - 1736975163567.json";

import "./Contact.scss";

const supTitel = ` Contact us for more information and Get notified when l publish something new`;

const Contact = () => {
  // const [state, handleSubmit] = useForm("");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }

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
          {" "}
          {/*onSubmit={handleSubmit}*/}
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              id="email"
              type="email"
              placeholder="Email Address"
            />
            {/* <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /> */}
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              placeholder="Message"
              name=""
              id="message"
            ></textarea>
            {/* <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /> */}
          </div>
          <button className="submit">
            {" "}
            {/*  disabled={state.submitting} */}
            Submit
          </button>
        </form>
        <div className="animation">
          <Lottie
            className="animationEmail"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
