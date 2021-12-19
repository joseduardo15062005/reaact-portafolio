import ImagePortafolio from "../../assets/images/portafolio.svg";
import PortafolioItem from "../PortafolioItem";

const Portafolio = () => {
  const portafolioItems = [
    {
      title: "Web Site",
      technology: "HTML",
      image: "web-site.png",
      description: "HTML Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "Dinamyc Web Site",
      technology: "Javasctipt",
      image: "javascript.jpeg",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "mondoDB",
      technology: "Database",
      image: "mongo-db.png",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "MySQL",
      technology: "Database Design",
      image: "my-sql.jpeg",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "Web Site",
      technology: "HTML",
      image: "web-site-2.jpeg",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
    },
    {
      title: "Web Site",
      technology: "HTML",
      image: "web-site-3.png",
      description: "Project Description",
      url: "https://secret-santa-project.herokuapp.com/",
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
