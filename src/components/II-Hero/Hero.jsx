import Lottie from "lottie-react";
import "./Hero.scss";
import devAnimation from "../../animation/Animation - 1736976380129.json";
import { useRef } from "react";
import { motion } from "motion/react";

const title = "software designer, founder, and amateur astronaut.";
const supTitle = `I'm Mohammed a software designer and en trepreneur. based in New York City. I'm the founder and CEO of Planetaria, where we dev technologies that empower regular people to explore space on their wen terms.`;

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="avatar"
            src="https://res.cloudinary.com/doofmolcc/image/upload/v1737301466/1000015103-02_ozk9u3.jpg"
            alt="img mohamed"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="icon-verified"
          ></motion.span>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="title"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="sub-title"
        >
          {supTitle}
        </motion.p>

        <div className="icons-social-media flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="right-section animation"
      >
        {/* FIXME: https://app.lottiefiles.com/animation/fefafb48-ebe0-4ef4-addc-58a90488c6c4?channel=web&source=public-animation&panel=download */}
        {/* FIXME: https://lottiereact.com/ */}
        <Lottie
          className="animationEmail"
          style={{ width: 450 }}
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
