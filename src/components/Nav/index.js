import { useEffect } from "react";
import AboutMeImage from "../../assets/images/about-me.svg";
import ContactMeImage from "../../assets/images/contact-me.svg";
import Logo from "../../assets/images/logo.svg";
import PortafolioImage from "../../assets/images/portafolio.svg";
import ResumeImage from "../../assets/images/resume.svg";

const Nav = ({ currentPage, setCurrentPage }) => {
  useEffect(() => {
    document.title = `${currentPage}`;
  }, [currentPage]);

  const handlerOpenResume = () => {
    window.open(
      "https://joseduardo15062005.github.io/reaact-portafolio/resume.pdf",
      "_blank"
    );
  };

  return (
    <>
      <div className="header-logo">
        <img src={Logo} className="img-logo" alt="logo" />
        <h1>Joseduardo</h1>
      </div>
      <nav>
        <div className="nav-item" onClick={() => setCurrentPage("About Me")}>
          <img src={AboutMeImage} className="img-nav" alt="about-me" />
          About Me
        </div>
        <div className="nav-item" onClick={() => setCurrentPage("Portafolio")}>
          <img src={PortafolioImage} className="img-nav" alt="portafolio" />
          Portafolio
        </div>
        <div className="nav-item" onClick={() => setCurrentPage("Contact Me")}>
          <img src={ContactMeImage} className="img-nav" alt="contact-me" />
          Contact Me
        </div>
        <div className="nav-item" onClick={handlerOpenResume}>
          <img src={ResumeImage} className="img-nav" alt="resume" />
          Resume
        </div>
      </nav>
    </>
  );
};

export default Nav;
