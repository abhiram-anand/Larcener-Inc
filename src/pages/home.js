import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import Nav from "./nav";
import Footer from "./footer";

const home = () => {
  return (
    <div className="home">
      <div className="homemain">
        <Nav />
        <div className="descp">
          <h1>
            Care at your fingertip
            <br />
            Health Redifined.
          </h1>
          <p className="descp1">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Neque augue faucibus <br />
            pellentesque vitae cras sollicitudin egestas.
          </p>
          <p className="descp2">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. <br />
            Neque augue faucibus <br />
            pellentesque vitae cras <br /> sollicitudin egestas.
          </p>
          <span className="fad">
            <Link to="/search">Book Now</Link>
          </span>
        </div>
      </div>
      <div className="abtus">
        <div className="serv">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consecteturolor sit amet consectetur
              olor sit amet consectetur adipisicing <br /> elit. Doloribus
              errolor sit amet consecteturor quis repellendus odit eius <br />{" "}
              sapiente hic ullam, revolor sit amet consecteturpudiandae tempora
              assumenda dolor <br /> dicta autem consequuolor sit amet
              consecteturntur! Quisquam animi possimus <br /> necessitatibus
              expedita voluptates.
            </p>
        </div>

        <div className="badge">
          <div className="panels"></div>
        </div>
      </div>
      <div className="doctors"><Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></div>
      <Footer />
    </div>
  );
};

export default home;
