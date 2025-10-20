import React from 'react';
import '../css/omoss.css';

const Status2 = () => (
  <div className="page-container omoss-page">
    <div className="content-wrapper">
      <div className="omoss-header">
        <h1 className="omoss-title">Status 2</h1>
        <p className="omoss-subtitle">
          
        </p>
      </div>
      <div className="team-section">
  <div className="team-grid" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <div className="person-card" style={{minHeight:'180px', transition: 'none', boxShadow: '0 8px 32px rgba(44, 82, 130, 0.12)', transform: 'none'}}>
            <h3 className="person-name">Hva vi har gjort</h3>
            <div className="person-background">
              <p className="background-text" style={{fontSize: '1.15rem', fontWeight: 500, color: '#2C5282', lineHeight: 1.7}}>
                De siste månedene har vi brukt tid på å utvikle og designe den nye nettsiden for og sammen med Alt I Høyde. Vi har jobbet med å utvikle front-end delen av nettsiden, som begynner å se veldig bra ut. Designet er både moderne og brukervennlig. Derimot, det vi har lagt mest fokus på nå den siste tiden er på å utvikle både bloggsiden, og siden for jobbsøknader og oppdrag.
              </p>
            </div>
          </div>
          <div className="person-card" style={{minHeight:'180px', transition: 'none', boxShadow: '0 8px 32px rgba(44, 82, 130, 0.12)', transform: 'none'}}>
            <h3 className="person-name">Hva vi har lært</h3>
            <div className="person-background">
              <p className="background-text" style={{fontSize: '1.15rem', fontWeight: 500, color: '#2C5282', lineHeight: 1.7}}>
                Gjennom dette prosjektet har vi lært mye om webutvikling, spesielt innen front-end utvikling med React. Vi har også fått erfaring med å jobbe tett sammen med en kunde for å forstå deres behov og ønsker. I tillegg har vi lært viktigheten av god kommunikasjon og samarbeid i et team. Vi har også lært viktigheten av å forstå søkemotorer sine algoritmer for å øke synlighet på nett, da dette er viktig for mindre bedrifter.
              </p>
            </div>
          </div>
          <div className="person-card" style={{minHeight:'180px', transition: 'none', boxShadow: '0 8px 32px rgba(44, 82, 130, 0.12)', transform: 'none'}}>
            <h3 className="person-name">Veien fremover</h3>
            <div className="person-background">
              <p className="background-text" style={{fontSize: '1.15rem', fontWeight: 500, color: '#2C5282', lineHeight: 1.7}}>
                Fremover skal vi fortsette å jobbe med å ferdigstille nettsiden for Alt I Høyde. Vi skal fokusere på å implementere og teste bloggsiden og siden for jobbsøknader og oppdrag for å sikre at de fungerer som de skal. I tillegg skal vi jobbe med å optimalisere nettsiden for søkemotorer for å øke synligheten til bedriften på nettet. Vi ser oss også nødt til å sette oss inn i hvordan vi skal deploye selve nettsiden.Vi planlegger også å ha flere møter med kunden for å få tilbakemeldinger og sikre at vi leverer et produkt som møter deres forventninger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Status2;
