import React from 'react'
import '../css/home.css';

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="logo-section">
            <img src="/logo4.png" alt="Alt i Høyde Logo" className="stylized-logo" />
          </div>
          
          <div className="hero-text">
            <h2 className="hero-title">Alt i Høyde Praksisprosjekt 2025</h2>
            <p className="hero-subtitle">Praksisprosjekt hos Alt i Høyde AS.</p>
          </div>
          
          <div className="scroll-indicator">
            <p className="scroll-text">Vis mer</p>
            <button className="scroll-button" onClick={scrollToContent} aria-label="Scroll ned for mer innhold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="content-section">
        <div className="page-container">
          <div className="content-wrapper project-description">
            <h3>Oppgavebeskrivelse</h3>
            
            <p className="project-intro">
              <span className="project-name">Praksisprosjektet IS-302</span> hos Alt i Høyde AS fokuserer på full-stack utvikling hvor vi skal jobbe med å utvikle en helt ny nettside for dem. Oppgavene våre vil bestå av å fornye designet, bygge en ny backend, og opprette en administrasjonsside som gjør det enkelt for bedriften å håndtere innhold selv. Hovedmålet med prosjektet er å skape en moderne, brukervennlig og fleksibel nettside som både kunder og ansatte får nytte av. Vi kommer til å bruke MERN-stacken (MongoDB, Express, React, Node.js) for å bygge løsningen.

            </p>
            
            <blockquote className="project-quote">
              "Alt i Høyde AS er en fullservice-leverandør innen industriklatring, inspeksjon og vedlikehold. 
              Med våre sertifiserte industriklatrere leverer vi trygge og fleksible løsninger der andre ikke når frem. 
              Våre tjenester spenner fra fasadevask, vindusvask og maling til komplekse håndverksjobber, arbeid i atrier 
              og snø- og isfjerning. Vi fokuserer på kostnadseffektive løsninger med minimal forstyrrelser, 
              rask respons og alltid med sikkerhet og bærekraft i høysetet."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
