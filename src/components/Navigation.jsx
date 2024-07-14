import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import "../assets/css/Navbar.css";

export const Navigation = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const Title = [
        { title: "Linkedin", url: "https://www.linkedin.com/in/maria-fernanda-peña-correa-bbb125264/", icon: <FaLinkedinIn /> },
        { title: "Gmail", url: "mailto:mafe.pe.co20014@gmail.com", icon: <SiGmail /> },
        { title: "WhatsApp", url: "https://wa.me/573122993474", icon: <SiWhatsapp /> },
        { title: "Descarga hoja de vida", url: "", icon: null },
    ];

    return (
        <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
            <Container>
                <Navbar.Brand href="#yo">
                    Maria F. Peña Correa
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            {Title.map((item, index) => (
                                item.icon ? (
                                    <OverlayTrigger key={index} placement="bottom" overlay={<Tooltip id="tooltip-bottom">{item.title}</Tooltip>}>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className='social-icon'>{item.icon}</a>
                                    </OverlayTrigger>
                                ) : (
                                    <OverlayTrigger key={index} placement="bottom" overlay={<Tooltip id="tooltip-bottom">{item.title}</Tooltip>}>
                                        <button className='vvd' onClick={() => console.log('connect')}><span>CV</span></button>
                                    </OverlayTrigger>
                                )
                            ))}
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

