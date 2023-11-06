import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillCamera } from 'react-icons/ai';

function AccountSetting() {
  return (
	<div>
		<Container>
			<Row>
				<Col className="col-12 acheading text-sm-center">
					<h3>
					   Account Settings
					</h3>
				</Col>
			</Row>
			<Row className='profile'>
				<Col className='col-3 col-sm-2 '>
					<div className='accountprofile m-end'>
						<div className='camera bg-primary'>
							<AiFillCamera className='text-white'/>
						</div>
					</div>
				</Col>
				<Col className='col-9 col-sm-10'>
					<div>
						<h5 className='pName text-left'>Marry Doe</h5>
						<h5 className='pmail'>
						    Marry@Gmail.Com
						</h5>
					</div>
				</Col>
			</Row>
			<Row className='pAbout'>
				<Col className='text-sm-center'>
					<p>
					Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
					</p>
				</Col>
			</Row>
		</Container>
		<div className='borderbottom'>

		</div>
	</div>
  )
}

export default AccountSetting