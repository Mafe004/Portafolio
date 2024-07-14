import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import "../assets/css/Experi.css";

const Experi = () => {
    return (
        <Container className='Experi'>
      <Row className="rowstyle">
        <Col >
          <header className="title">
            <h2>EDUCATION</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>High School Degree</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>Bachelor's Degree</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>Master Degree</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </Col>
        <Col >
          <header className="title">
            <h2>EXPERIENCE</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>UI/UX Designer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>Full-Stack Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>Frontend Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    );
};

export default Experi;