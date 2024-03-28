import React from 'react'
import Header from './Header'
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import Studentsec from './Studentsec';
export default function About() {
  return (

    <>
      {/* <div className='top-header'>
        <Container fluid>
          <Row>
            <Col lg={8} >
              <div className='header-top-icon'>
                <a href="#">(555) 674 890 556</a>
                <a href="#">info@example.com</a>
                <a href="#">3rd Avenue, San Francisco</a>
              </div>
            </Col>
            <Col lg={4} >

            </Col>
          </Row>
        </Container>
      </div> */}
      {/* <Header></Header> */}
      <div className='hero-area d-flex align-items-center position-relative'>
        <Container>
          <Row>
            <Col lg={12}>
              <div>
                <h2>About</h2>
              </div>
              <div>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>About</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Studentsec></Studentsec>
      <div className='features-area1'>
        <Container>
          <Row>
            <Col>
              <div className='text-center'>
                <h2>Global Online <br />  Education <span>Categories</span> </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
