import ImagePortafolio from "../../assets/images/portafolio.svg";
import PortafolioItem from "../PortafolioItem";

const Portafolio = () => {
  const portafolioItems = [
    {
      title: "Web Site",
      technology: "HTML",
      image: "html.png",
      description: "HTML & CSS website",
      url: "https://joseduardo15062005.github.io/horiseon-website/",
    },
    {
      title: "Web Site",
      technology: "HTML & CSS & Javasctipt",
      image: "national-park.png",
      description: "Website to find National Parks",
      url: "https://tonycodesnow.github.io/NationalParkSearch/",
    },
    {
      title: "Giftby",
      technology: "Web App",
      image: "gitfby.png",
      description: "Secret Santa Web App",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "Web API",
      technology: "Social Media Web API",
      image: "mongo-db.png",
      description: "MOnGoDB Web API",
      url: "https://github.com/joseduardo15062005/social-medial",
    },
    {
      title: "React App & GraphQL",
      technology: "React & GraphQL",
      image: "book-search.png",
      description: "Google Book search",
      url: "https://limitless-sierra-55081.herokuapp.com/",
    },
    {
      title: "React App & GraphQL",
      technology: "REACT",
      image: "cache.png",
      description: "Spaces listing and finder",
      url: "https://cache-project.herokuapp.com/",
    },
  ];

  return (
    <section>
      <div className="page-body">
        <img src={ImagePortafolio} alt="Portafolio" className="img-body" />
        <h1>Portafolio</h1>
        <div className="portafolio">
          {portafolioItems.map((item, index) => (
            <PortafolioItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
