import { Container } from 'react-bootstrap';
import Peces from '../assets/img/Peces.webp';
import React, { useState, useEffect } from 'react';
import { CustomShapeDivider } from './Nose/CustomShapeDivider';
import "../assets/css/Header.css";

export const Header = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Desarrollador junior"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setDelta(prevDelta => prevDelta + 1);
    }
  }

  return (
    <Container fluid id="yo">
      <div className="custom-shape-divider-top-1720722023">
        <CustomShapeDivider />
      </div>
      <section className="banner">
        <img loading="eager" src={Peces} alt="Peces" />
        <h1>{`I am Maria Fernanda Peña`}</h1>
        <h1 className="text1" style={{ color: "transparent", position: 'relative', mixBlendMode: 'difference', zIndex: '2' }}>{`I am Maria Fernanda Peña`}</h1>
        <span className="txt-rotate" data-period="500" data-rotate='[ "Desarrollador junior"]'><span className="wrap">{text}</span></span>
        <p className='sp'>Soy una estudiante de ingeniería de software apasionada por la tecnología y el desarrollo de software. Aunque
          mi experiencia laboral es limitada, he colaborado en varios proyectos de codificación, lo que me ha permitido adquirir
          habilidades prácticas y mejorar mis habilidades interpersonales. Me especializo en el desarrollo de aplicaciones web, diseño de interfaces de
          usuario y desarrollo de software en general. Estoy comprometida a seguir aprendiendo y creciendo en esta industria,
          ansiosa por aplicar mis conocimientos en proyectos desafiantes.</p>
      </section>
      <CustomShapeDivider />
    </Container>
  );
}
