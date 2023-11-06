import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home d-flex justify-content-center">
      <Container>
        <div className=" pb-5">
          <Row className="text-sm-center">
            <Col className="col-12 ">
              <h2 className="loginheading text-start text-sm-center">
                Welcome to PopX
              </h2>
              <p className="logintext  text-start text-sm-center">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit,
              </p>
            </Col>
            <Col className="col-12 pt-2">
              <Link to={"/createAccount"}>
                <button className="createbutton  py-2 text-white rounded">
                  Create Account
                </button>
              </Link>
            </Col>
            <Col className="col-12">
              <Link to={"/login"}>
                <button className="registerbtn py-2 mt-2  rounded">
                  Already Registered? Login
                </button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Home;
