import { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("myTheme") ?? "dark");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const [showHaburgerMenu, setshowHaburgerMenu] = useState(false);

  const closeMenu = () => {
    setshowHaburgerMenu(false);
  };
  return (
    <>
      <header className="flex">
        <button
          onClick={() => {
            setshowHaburgerMenu(!showHaburgerMenu);
          }}
          className="icon-menu hamburger-menu flex"
        />

        <div />
        <nav>
          <ul className="flex">
            <li>
              <a href="hero">About</a>
            </li>
            <li>
              <a href="main">Articles</a>
            </li>
            <li>
              <a href="contact">Projects</a>
            </li>
            <li>
              <a href="contact">Speaking</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => {
            window.localStorage.setItem(
              "myTheme",
              theme === "dark" ? "light" : "dark"
            );
            setTheme(window.localStorage.getItem("myTheme"));
          }}
          className="mode flex"
        >
          {theme === "light" ? (
            <span className="icon-sun"></span>
          ) : (
            <span className="icon-moon-o"></span>
          )}
        </button>

        {showHaburgerMenu && (
          <div className="fixed ">
            <ul className="modal">
              <li className="border close ">
                <button className="icon-cancel" onClick={closeMenu} />
              </li>
              <li style={{ paddingTop: "0" }}>
                <a href="" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="" onClick={closeMenu}>
                  Articles
                </a>
              </li>
              <li>
                <a href="" onClick={closeMenu}>
                  Prefects
                </a>
              </li>
              <li>
                <a href="" onClick={closeMenu}>
                  Speaking
                </a>
              </li>
              <li>
                <a href="" onClick={closeMenu}>
                  Uses
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
