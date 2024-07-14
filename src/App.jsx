// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import {Navigation} from './components/Navigation';
import {Header} from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import {SkillsSection} from './components/SkillsSection';
import {ProjectSec} from './components/ProjectSec';
import Experi from './components/Experi';
import {Footerss} from './components/Footerss';
import LoadingPage from './components/LoadingPage';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Simulación de carga para propósitos de prueba
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000); // Puedes ajustar o eliminar este tiempo según tus necesidades

      // Limpiar el temporizador al desmontar el componente
      return () => clearTimeout(timer);
  }, []);

  return (
      <>
          {loading ? (
              <LoadingPage />
          ) : (
              <div>
                  <Navigation />
                  <HeroSection />
                  <Header />
                  <SkillsSection />
                  <ProjectSec />
                  <Experi />
                  <Footerss />
              </div>
          )}
      </>
  );
}

export default App;