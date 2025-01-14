import "./Hero.scss";

const title = "software designer, founder, and amateut astronaut.";
const supTitle = `I'm Mohammed a software designer and en trepreneur. based in New York City. I'm the founder and CEO of Planetaria, where we devlop technologies that empower regular people to explore space on their wen terms.`;

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar">
          <img
            className="avatar"
            src="../../../public/img-m.jpeg"
            alt="img mohamed"
          />
          <span className="icon-verified"></span>
        </div>

        <h1 className="title">{title}</h1>
        <p className="sub-title">{supTitle}</p>

        <div className="icons-social-media flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>

      <div className="right-section animation border">animation</div>
    </section>
  );
};

export default Hero;
