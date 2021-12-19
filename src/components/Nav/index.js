import AboutMeImage from "../../assets/images/about-me.svg";
import ContactMeImage from "../../assets/images/contact-me.svg";
import Logo from "../../assets/images/logo.svg";
import PortafolioImage from "../../assets/images/portafolio.svg";
import ResumeImage from "../../assets/images/resume.svg";

const Nav = () => {
  return (
    <>
      <div className="header-logo">
        <img src={Logo} className="img-logo" alt="logo" />
        <h1>Joseduardo</h1>
      </div>
      <nav>
        <div className="nav-item">
          <img src={AboutMeImage} className="img-nav" alt="about-me" />
          About Me
        </div>
        <div className="nav-item">
          <img src={PortafolioImage} className="img-nav" alt="portafolio" />
          Portafolio
        </div>
        <div className="nav-item">
          <img src={ContactMeImage} className="img-nav" alt="contact-me" />
          Contact Me
        </div>
        <div className="nav-item">
          <img src={ResumeImage} className="img-nav" alt="resume" />
          Resume
        </div>
      </nav>
    </>
  );
};

export default Nav;
