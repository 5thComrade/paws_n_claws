import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <React.Fragment>
      <div className={classes.center}>
        <div className={classes.container}>
          <h2>Come Say Hi!</h2>
          <div className={classes.Box}>
            <p>pawsnclaws@gmail.com</p>
            <p>6655583877</p>
          </div>
          <p></p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
