import "./Main.scss";

const widthToCard = 266;

const Main = () => {
  return (
    <main className="flex">
      <section className="flex left-section ">
        <button className="active">all projects</button>
        <button>HTML & CSS</button>
        <button>JavaScript</button>
        <button>React JS & MUI</button>
        <button>Node & Express</button>
      </section>
      <section className="right-section flex">
        {["sadf", "sdf", "ahmed", "asfd", "sdfasdf"].map((index) => {
          return (
            <article key={index} className="card">
              <img width={widthToCard} src="www" alt="" />
              <div style={{ width: `${widthToCard}px` }} className="box">
                <h1 className="title">Landing Page 2</h1>
                <p className="sub-title ">{`Lorem ipsum dolor klasdfoa soe9sd sowejdms sdoifa asdklwkjmcissimos ducimus temporibus dolores alias possimus!`}</p>
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
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
