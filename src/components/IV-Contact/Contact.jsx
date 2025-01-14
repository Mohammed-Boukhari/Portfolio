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

      <div className="flex">
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
        <div className="border animation">animation</div>
      </div>
    </section>
  );
};

export default Contact;
