import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
          <span>LamaEstate</span>
        </Link>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/agents"}>Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750dpr=2"
              alt="user-img"
            />
            <span>Jhon Doe</span>
            <Link to={"/profile"} className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to={"/sing-in"}>Sign in</Link>
            <Link to={"/sing-up"} className="register">
              Sign up
            </Link>
          </>
        )}

        <div className="menuIcon">
          <img
            src={menu}
            alt="img-menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/agents"}>Agents</Link>
          <Link to={"/sing-in"}>Sign in</Link>
          <Link to={"/sing-up"}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
