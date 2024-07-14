import React from 'react';
import Chicafoto from '../assets/img/ChicaFoto1.webp';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/HeroSection.css';

export const HeroSection = () => {
    return (
        <section className="hero-section" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={8} lg={6}>
                        <div className="heroimg">
                            <img loading="lazy" width="75%" height="auto" src={Chicafoto} alt="Portafolio Chica" />
                            <div className="overlay-text">
                                <h1>PORTAFOLIO</h1>
                            </div>
                            <div className="overlay-text-back">
                                <h1 className="herotext">PORTAFOLIO</h1>
                                <h1 className="herotext">PORTAFOLIO</h1>
                                <h1 className="herotext">PORTAFOLIO</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;

