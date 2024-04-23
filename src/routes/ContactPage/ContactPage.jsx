import { useState } from "react";
import bg from "../../assets/images/bg.png";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelephoneChange = (event) => {
    setTelephone(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage(true);
    setName("");
    setEmail("");
    setTelephone("");
    setMessage("");
    setTimeout(() => {
      setSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="contactPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ipsam adipisci ipsum nesciunt quidem esse mollitia porro, minima
            voluptas dolores aliquam, ab officiis blanditiis tenetur suscipit
            beatae similique officia alias?
          </p>
          <form onSubmit={handleSubmit}>
            <input
              label="Name"
              type="text"
              required
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              label="Email"
              type="email"
              required
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              label="Telephone"
              type="text"
              required
              name="telephone"
              placeholder="Telephone"
              value={telephone}
              onChange={handleTelephoneChange}
            />
            <textarea
              required
              type="text"
              label="Message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
            {successMessage && (
              <p style={{ color: "green" }}>Mensaje enviado con éxito</p>
            )}
            <button type="submit" className="button-form">
              <div className="box-button">SEND</div>
            </button>
          </form>
        </div>
      </div>
      <div className="imgContainer">
        <img src={bg} alt="img-bg" />
      </div>
    </div>
  );
}

export default ContactPage;
