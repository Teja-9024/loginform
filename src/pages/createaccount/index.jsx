import { TextField } from "@mui/material";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="Account">
      <Container>
        <Row>
          <Col>
            <h1 className="createheadding  text-sm-center">
              Create your
              <br />
              PopX account
            </h1>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col className="col-12 text-sm-center">
			   <TextField  label="Full Name" type="text" variant="outlined" className="name"   size="small"/>
            </Col>
			<Col className="col-12 text-sm-center">
			   <TextField  label="Phone Number" type="Number" variant="outlined" className="name"   size="small"/>
			</Col>
			<Col className="col-12 text-sm-center">
			  <TextField  label="Email address" type="email" variant="outlined" className="name"   size="small"/>
			</Col>
			<Col className="col-12 text-sm-center">
			  <TextField  label="Password" type="number" variant="outlined" className="name"   size="small"/> 
			</Col>
			<Col className="col-12 text-sm-center">
			  <TextField  label="Company Name" type="text" variant="outlined" className="name"   size="small"/>
			</Col>
			<Col className="col-12 text-sm-center">
				<h4 className="question">Are you an Agency?*</h4>
				<input type="radio" className=""/> <span className="answer">Yes</span>
				<input type="radio" /><span className="answer">No</span>
			</Col>
          </Row>
		  <Row>
			<Col className="col-12 text-sm-center mb-5">
				<Link to={'/accountsetting'}>
				  <button className="caccount text-white">
					 Create Account
				  </button>
				</Link>
				
			</Col>
		  </Row>
        </Form>

      </Container>
    </div>
  );
}
export default CreateAccount;
