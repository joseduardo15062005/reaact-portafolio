import ImageAboutMe from "../../assets/images/about-me.svg";
import ImageMe from "../../assets/images/me.png";

const About = () => {
  return (
    <section>
      <div className="page-body">
        <img src={ImageAboutMe} alt="About Me" className="img-body" />
        <h1>Who am I?</h1>
        <div className="flex-container">
          <img src={ImageMe} alt="Jose Velasquez" className="img-me"></img>

          <p>
            Hello I Jose, I'm a Front-end developer, I have a passion for
            programming and I'm always looking for new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
