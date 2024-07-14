import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from "../assets/img/Image1.webp";
import Image2 from "../assets/img/Image2.webp";
import Image3 from "../assets/img/Image3.webp";
import { CustomShapeDivider } from './Nose/CustomShapeDivider';
import { Container, Row, Col } from 'react-bootstrap';
import "../assets/css/ProjectSec.css";

export const ProjectSec = () => {
    const [selectedOption, setSelectedOption] = useState('opcion1');

    const handleImageClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <Container fluid className="ProjectSecContainer" id="projects">
            <div className="custom-shape-divider-top-1720722025">
            <CustomShapeDivider />
            </div>
            <Row className="Grid_Container ">
                <Col md={6} className="image-column d-flex justify-content-center align-items-center flex-column">
                    <Row className="imagecont ">
                        <Col onClick={() => handleImageClick('opcion1')} className={`img ${selectedOption === 'opcion1' ? 'show_img' : ''}`}>
                            <img loading="eager" width="500px" height="auto" className="image" src={Image1} alt="Proyecto 1" />
                            <h1>Proyecto 1</h1>
                        </Col>
                        <Col onClick={() => handleImageClick('opcion2')} className={`img ${selectedOption === 'opcion2' ? 'show_img' : ''}`}>
                            <img loading="eager" width="500px" height="auto" className="image" src={Image2} alt="Proyecto 2" />
                            <h1>Proyecto 2</h1>
                        </Col>
                        <Col onClick={() => handleImageClick('opcion3')} className={`img ${selectedOption === 'opcion3' ? 'show_img' : ''}`}>
                            <img loading="eager" width="500px" height="auto" className="image" src={Image3} alt="Proyecto 3" />
                            <h1>Proyecto 3</h1>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="content-column d-flex justify-content-center align-items-center">
                    <div className="contenido-opcion" style={{ display: selectedOption === 'opcion1' ? 'block' : 'none' }}>
                        <h4>Proyecto 1</h4>
                        <h3>El propósito del proyecto era desarrollar una aplicación web interactiva que permitiera a los usuarios seleccionar imágenes y ver contenido dinámico relacionado con la imagen seleccionada. Esta aplicación tenía como objetivo mejorar la experiencia del usuario al proporcionar información relevante de manera rápida y eficiente.</h3>
                        <p>Desarrollo Frontend: Implementé la interfaz de usuario utilizando React y Bootstrap, asegurando una experiencia de usuario fluida y responsiva.</p>
                    </div>
                    <div className="contenido-opcion" style={{ display: selectedOption === 'opcion2' ? 'block' : 'none' }}>
                        <h4>Proyecto 2</h4>
                        <h3>El propósito del proyecto era desarrollar una aplicación web interactiva que permitiera a los usuarios seleccionar imágenes y ver contenido dinámico relacionado con la imagen seleccionada. Esta aplicación tenía como objetivo mejorar la experiencia del usuario al proporcionar información relevante de manera rápida y eficiente.</h3>
                        <p>Desarrollo Frontend: Implementé la interfaz de usuario utilizando React y Bootstrap, asegurando una experiencia de usuario fluida y responsiva.</p>
                    </div>
                    <div className="contenido-opcion" style={{ display: selectedOption === 'opcion3' ? 'block' : 'none' }}>
                        <h4>Proyecto 3</h4>
                        <h3>El propósito del proyecto era desarrollar una aplicación web interactiva que permitiera a los usuarios seleccionar imágenes y ver contenido dinámico relacionado con la imagen seleccionada. Esta aplicación tenía como objetivo mejorar la experiencia del usuario al proporcionar información relevante de manera rápida y eficiente.</h3>
                        <p>Desarrollo Frontend: Implementé la interfaz de usuario utilizando React y Bootstrap, asegurando una experiencia de usuario fluida y responsiva.</p>
                    </div>
                </Col>
            </Row>
            <CustomShapeDivider />
        </Container>
    );
};
