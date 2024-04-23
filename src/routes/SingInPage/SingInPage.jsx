import { useState } from "react";
import bg from "../../assets/images/bg.png";

function SingInPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const text = "Already have an account?";

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== "" && email !== "") {
      setSuccessMessage(true);
      setPassword("");
      setEmail("");
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    }
  };

  return (
    <div className="singInPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>{text}</h1>
          <p>Sing up with email and password</p>
          <form onSubmit={handleSubmit}>
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
              label="Password"
              type="password"
              required
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {successMessage && (
              <p style={{ color: "green" }}>Ingreso con éxito</p>
            )}
            <button type="submit" className="button-sing">
              <div className="box-button">SING IN</div>
            </button>
            <button type="submit" className="button-sing-google">
              <div className="box-button">GOOGLE SING IN</div>
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

export default SingInPage;
