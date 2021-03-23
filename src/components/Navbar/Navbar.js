import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  useEffect(async () => {
    await axios.get(
      "https://hellolambda.netlify.app/.netlify/functions/setCount"
    );
  }, []);

  return (
    <nav className={classes.Navbar}>
      <div className={classes.container}>
        <Link to="/">
          <h1 className={classes.Brand}>Paws N Claws</h1>
        </Link>

        <ul className={classes.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
