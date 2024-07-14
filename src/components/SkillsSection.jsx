import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import { SiFlutter, SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { FaCss3 } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import "../assets/css/SkillsSection.css";

const skills = [
    { title: "Flutter", icon: <SiFlutter className='icons' /> },
    { title: "React", icon: <SiReact className='icons' /> },
    { title: "Bootstrap", icon: <SiBootstrap className='icons' /> },
    { title: "CSS", icon: <FaCss3 className='icons' /> },
    { title: "Dart", icon: <SiDart className='icons' /> },
    { title: "Typescript", icon: <SiTypescript className='icons' /> },
];

export const SkillsSection = () => {
    return (
        <Container id="skills">
            <div className="skills-container">
                <h1 className='textstil'>Skills</h1>
                <div className='containerS'>
                    <Row xs={2} md={3} className="g-2">
                        {skills.map((skill, idx) => (
                            <Col key={idx}>
                                <Card className="skill-card">
                                    <Card.Body className="skill-card-body">
                                        <div className="icon-container">{skill.icon}</div>
                                        <Card.Title className="skill-title">{skill.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Container>
    );
};
