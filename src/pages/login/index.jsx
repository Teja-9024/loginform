import { TextField } from "@mui/material";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-12 text-sm-center">
            <h2 className="loginheading">
              Signin to your
              <br />
              PopX account
            </h2>
          </Col>
          <Col className="col-12 text-sm-center">
            <h5 className="loginabout">
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit,
            </h5>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col className="col-12 col-12 text-sm-center">
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                className="name"
				size="small"
              />
            </Col>
			<Col className="col-12 col-12 text-sm-center">
			<TextField
                label="Password"
                type="password"
                variant="outlined"
                className="name"
				size="small"
              />
			</Col>
          </Row>
		  <Row>
			<Col className="col-12 text-sm-center">
				<div>
          <Link to={'/accountsetting'}>
            <Button className="loginbtn">
						   Login	
					  </Button>
          </Link>
					
				</div>
			</Col>
		  </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
