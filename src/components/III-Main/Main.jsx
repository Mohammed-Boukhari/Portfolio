import { useState } from "react";
import { myProjects } from "../../data/mydata";
import { AnimatePresence, motion } from "motion/react";

import "./Main.scss";

const widthToCard = 266;

const Main = () => {
  const [addClassActive, setAddClassActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  return (
    <main className="flex">
      <section className="flex left-section ">
        <button
          // FIXME: change arr to all
          onClick={() => {
            setAddClassActive("all");
            setArr(myProjects);
          }}
          className={addClassActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button
          // FIXME: change arr to CSS HTML
          onClick={() => {
            setAddClassActive("css&html");

            const newArr = myProjects.filter((item) => {
              return item.category === "css";
            });
            setArr(newArr);
          }}
          className={addClassActive === "css&html" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          // FIXME: change arr to javascript
          onClick={() => {
            setAddClassActive("javascript");
            const newArr = myProjects.filter((item) => {
              return item.category === "javascript";
            });
            setArr(newArr);
          }}
          className={addClassActive === "javascript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          // FIXME: change arr to reactJs MUI
          onClick={() => {
            setAddClassActive("reactJs&mui");

            const newArr = myProjects.filter((item) => {
              return item.category === "react";
            });
            setArr(newArr);
          }}
          className={addClassActive === "reactJs&mui" ? "active" : null}
        >
          React JS & MUI
        </button>
        <button
          // FIXME: change arr to node Express
          onClick={() => {
            setAddClassActive("node&Express");

            const newArr = myProjects.filter((item) => {
              return item.category === "express";
            });
            setArr(newArr);
          }}
          className={addClassActive === "node&Express" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      {/* FIXME: animation https://motion.dev/  */}
      {/* animation  */}
      <AnimatePresence>
        <section className="right-section flex">
          {/* FIXME: loop for arr */}
          {arr.map((item, index) => {
            return (
              <motion.article
                key={index}
                className="card"
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: "8" }}
              >
                <img
                  width={widthToCard}
                  src={item.imgPath}
                  alt={item.imgPath}
                />
                <div style={{ width: `${widthToCard}px` }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title ">
                    Lorem ipsum dolor, sit consectetur at sint ex error, s est
                    ut in? Error
                  </p>
                  <div className="icons flex">
                    <div style={{ gap: "11px" }} className="flex">
                      <i className="icon-link"></i>
                      <i className="icon-github"></i>
                    </div>

                    <a className="link flex" href="www">
                      more{" "}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow_forward"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </section>
      </AnimatePresence>
      {/*== animation ==*/}
    </main>
  );
};

export default Main;
