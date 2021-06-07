import { Link } from "react-router-dom";
import "./home.css";
import Nav from "./nav";
import Footer from "./footer";
import { FaCalendarPlus } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

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
            Lorem ipsum dolor sit amet consecteturolor sit amet consectetur olor
            sit amet consectetur adipisicing <br /> elit. Doloribus errolor sit
            amet consecteturor quis repellendus odit eius <br /> sapiente hic
            ullam, revolor sit amet consecteturpudiandae tempora assumenda dolor{" "}
            <br /> dicta autem consequuolor sit amet consecteturntur! Quisquam
            animi possimus <br /> necessitatibus expedita voluptates.
          </p>
        </div>

        <div className="badges">
          <div className="panels">
            <div id="tile">
              <span id="icon">
                <GrLocation />
              </span>
              <br /> Available in major <br />
              locations
            </div>
            <div id="tile">
              <span id="icon">
                <AiOutlineSafetyCertificate />
              </span>
              <br />
              Quality <br />
              doctors
            </div>
            <div id="tile">
              <span id="icon">
                <FaCalendarPlus />
              </span>
              <br />
              Get appoinment in <br /> a couple of seconds
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default home;
