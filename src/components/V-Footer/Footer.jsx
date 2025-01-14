import "./Footer.scss";

const titleFooter = `© 2025 Spencer Sharp. All rights reserved`;
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>

      <p className="sup-title">{titleFooter}</p>
    </footer>
  );
};

export default Footer;
