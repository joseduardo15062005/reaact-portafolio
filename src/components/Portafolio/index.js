import ImagePortafolio from "../../assets/images/portafolio.svg";

const Portafolio = () => {
  return (
    <section>
      <div className="page-body">
        <img src={ImagePortafolio} alt="Portafolio" className="img-body" />
        <h1>Portafolio</h1>
        Show images portafolio
      </div>
    </section>
  );
};

export default Portafolio;
