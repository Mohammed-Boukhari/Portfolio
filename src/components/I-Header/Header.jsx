import { useState } from "react";
import "./Header.scss";

const Header = () => {
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
        <button className="mode flex">
          <span className="icon-moon-o"></span>
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
                  Profects
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
