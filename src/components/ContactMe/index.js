import Image from "../../assets/images/contact-me.svg";

const ContactMe = () => {
  return (
    <section>
      <div className="page-body">
        <img src={Image} alt="Contact Me" className="img-body" />
        <h1>Contact Me</h1>
        <form className="form">
          <div className="form-input">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-input">
            <textarea placeholder="Message" />
          </div>
          <div className="form-button">
            <button type="submit" className="button">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
