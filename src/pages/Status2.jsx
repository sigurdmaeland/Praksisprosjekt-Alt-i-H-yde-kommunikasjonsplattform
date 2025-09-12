import React from 'react';
import '../css/omoss.css';

const Status2 = () => (
  <div className="page-container omoss-page">
    <div className="content-wrapper">
      <div className="omoss-header">
        <h1 className="omoss-title">Status 2</h1>
        <p className="omoss-subtitle">
          Skriv inn videre fremdrift, refleksjoner og eventuelle nye utfordringer her. Bruk seksjonene under for å holde oversikt!
        </p>
      </div>
      <div className="team-section">
        <div className="team-grid">
          <div className="person-card" style={{minHeight:'220px'}}>
            <h3 className="person-name">Oppsummering</h3>
            <div className="person-background">
              <h4 className="background-title">Hva har vi gjort siden sist?</h4>
              <p className="background-text">
                {/* Skriv inn status og fremdrift her! */}
                - Fullført flere sider og komponenter
                - Forbedret design og brukeropplevelse
                {/* Legg til mer etter hvert! */}
              </p>
            </div>
            <div className="person-background">
              <h4 className="background-title">Nye utfordringer og læring</h4>
              <p className="background-text">
                {/* Skriv inn utfordringer, læring og refleksjoner */}
                - Jobbet med integrasjon mot backend
                - Testet ulike løsninger for deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Status2;
