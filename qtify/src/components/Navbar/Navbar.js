import React from "react";
import Button from "../Button/Button";
import style from "./Navbar.module.css";
import Logo from "../Logo/Logo";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Logo />
      <Button children={"Give Feedback"} />
    </nav>
  );
};

export default Navbar;
