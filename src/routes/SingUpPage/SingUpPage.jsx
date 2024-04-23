import { useState } from "react";
import bg from "../../assets/images/bg.png";

function SingUpPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const text = "Don't have an account?";

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword && name !== "" && email !== "") {
      setSuccessMessage(true);
      setPassword("");
      setConfirmPassword("");
      setName("");
      setEmail("");
      setPasswordsMatch(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    } else {
      setPasswordsMatch(false);
      setTimeout(() => {
        setPasswordsMatch(true);
      }, 1500);
    }
  };

  return (
    <div className="singUpPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1>{text}</h1>
          <p>Sing up with email and password</p>
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
              label="Password"
              type="password"
              required
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              label="Confirm Password"
              type="password"
              required
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {!passwordsMatch && (
              <p style={{ color: "red" }}>Las contraseñas no coinciden</p>
            )}
            {successMessage && (
              <p style={{ color: "green" }}>Cuenta registrada con éxito</p>
            )}
            <button type="submit" className="button-form">
              <div className="box-button">SING UP</div>
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

export default SingUpPage;
