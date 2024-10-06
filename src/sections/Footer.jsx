import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/karolina-szymanska"
          target="_blank"
          rel="noreferrer"
          className="social-icon-container"
        >
          <FaGithub className="social-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/karolina-szyma%C5%84ska-64b36089/"
          target="_blank"
          rel="noreferrer"
          className="social-icon-container"
        >
          <FaLinkedinIn className="social-icon" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100082023381932"
          target="_blank"
          rel="noreferrer"
          className="social-icon-container"
        >
          <FaFacebook className="social-icon" />
        </a>
      </div>

      <p className="text-white-500">
        © 2024 Karolina Szymanska. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
