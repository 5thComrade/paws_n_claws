import classes from "./Home.module.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import dogs from "../../assets/dogs.jpg";
import cats from "../../assets/cats.jpg";
import axios from "axios";

const Home = () => {
  const setContactCount = async () => {
    await axios.get("/.netlify/functions/clickContact");
  };

  useEffect(async () => {
    await axios.get("/.netlify/functions/setCount");
  }, []);

  return (
    <React.Fragment>
      <div className={classes.center}>
        <div className={classes.container}>
          <div className={classes.Grid}>
            <div className={`${classes.Middle} ${classes.Child1}`}>
              <img src={dogs} alt="Dogs" className={classes.Img} />
            </div>
            <div className={`${classes.Middle} ${classes.Child2}`}>
              <h3>
                Pamper your furry friend <br /> with a long walk, a good bath{" "}
                <br /> and some fancy styling.
              </h3>
            </div>
            <div className={`${classes.Middle} ${classes.Child3}`}>
              <h3>
                Meow...Meow... <br />
                Schedule and book grooming <br />
                slots, walks and much more <br /> 7 days a week.
              </h3>
            </div>
            <div className={`${classes.Middle} ${classes.Child4}`}>
              <img src={cats} alt="Cats" className={classes.Img} />
            </div>
          </div>
          <div className={classes.Provide}>
            <h2>We provide</h2>
            <ul>
              <li>Cat & Dog Day Care</li>
              <li>Pet Boarding</li>
              <li>Pet Spa</li>
              <li>Pet Grooming</li>
              <li>Pet Accessories</li>
            </ul>
          </div>
          <div className={classes.Yo}>
            <Link to="/contact">
              <button onClick={setContactCount}>Contact Us</button>
            </Link>
          </div>
          <div className={classes.Footer}>
            <p>Copyright &#169; Paws N Claws</p>
            <p>
              Website designed by{" "}
              <a
                href="https://helloantony.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Antony Chiramel
              </a>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
