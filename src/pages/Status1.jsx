import React from 'react';
import '../css/omoss.css';

const Status1 = () => (
  <div className="page-container omoss-page">
    <div className="content-wrapper">
      <div className="omoss-header">
        <h1 className="omoss-title">Status 1</h1>
        <p className="omoss-subtitle">
          
        </p>
      </div>
      <div className="team-section">
  <div className="team-grid" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <div className="person-card" style={{minHeight:'180px', transition: 'none', boxShadow: '0 8px 32px rgba(44, 82, 130, 0.12)', transform: 'none'}}>
            <h3 className="person-name">Bli kjent med bedriften</h3>
            <div className="person-background">
              <p className="background-text" style={{fontSize: '1.15rem', fontWeight: 500, color: '#2C5282', lineHeight: 1.7}}>
                Alt i Høyde AS er en bedrift som jobber med oppdrag i høyden. De bruker industriklatrere til å gjøre jobber som kan være vanskelige å nå med lift eller stillas. Typiske oppdrag er å vaske fasader og vinduer, male, gjøre små reparasjoner og fjerne snø og is fra tak. Alt I Høyde driver også med kurs og opplæring innenfor arbeid i høyden. De holder til i både Norge og Sverige, med hovedkontor i Kristiansand og Gøteborg.
              </p>
            </div>
            <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '100%', maxWidth: window.innerWidth <= 480 ? 280 : window.innerWidth <= 900 ? 480 : 800, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h4 style={{ color: '#2C5282', fontWeight: 600, marginBottom: '0.7rem', letterSpacing: '0.01em', fontSize: window.innerWidth <= 480 ? '1rem' : window.innerWidth <= 900 ? '1.13rem' : '1.25rem', textAlign: 'center' }}>Videoklipp fra bedriften</h4>
    <video controls style={{ width: '100%', height: 'auto', borderRadius: window.innerWidth <= 480 ? '0.6rem' : '1rem', border: '2.5px solid #2C5282', boxShadow: '0 2px 12px rgba(44,82,130,0.10)', background: '#000', display: 'block' }}>
      <source src="/altihøydevideo.mp4" type="video/mp4" />
      Din nettleser støtter ikke video.
    </video>
  </div>
</div>
          </div>
          <div className="person-card" style={{minHeight:'180px', transition: 'none', boxShadow: '0 8px 32px rgba(44, 82, 130, 0.12)', transform: 'none'}}>
            <h3 className="person-name">Våre arbeidsoppgaver</h3>
            <div className="person-background">
              <p className="background-text" style={{fontSize: '1.15rem', fontWeight: 500, color: '#2C5282', lineHeight: 1.7}}>
                Vår hovedoppgave er å lage en helt ny nettside for Alt i Høyde. Nettsiden skal ikke bare få et nytt og moderne design, men også nye funksjoner som gjør hverdagen enklere for både bedriften og kundene. Vi skal lage en blogg hvor de kan dele innlegg og bilder fra prosjektene sine for å vise frem arbeidet sitt og bli mer synlige i markedet. I tillegg jobber vi med å lage en løsning der både jobbsøknader og forespørsler om oppdrag kan sendes og behandles direkte på nettsiden, i stedet for at alt går gjennom e-post. Dette gjør det enklere å holde oversikt og gir en mer profesjonell opplevelse for kundene
              </p>
            </div>
          </div>
          <div className="person-card" style={{minHeight:'180px', transition: 'none', boxShadow: '0 8px 32px rgba(44, 82, 130, 0.12)', transform: 'none'}}>
            <h3 className="person-name">Status quo</h3>
            <div className="person-background">
              <p className="background-text" style={{fontSize: '1.15rem', fontWeight: 500, color: '#2C5282', lineHeight: 1.7}}>
              Vi har kommet godt i gang med prosjektet og hatt et oppstartsmøte med bedriften for å forstå hva de ønsker seg i den nye nettsiden. Ut fra dette møtet har vi laget en plan for hvordan siden skal se ut og hvilke funksjoner som skal være med. Vi har allerede startet på front-end og laget et moderne og brukervennlig design som bedriften har sett og gitt gode tilbakemeldinger på. I tillegg har vi begynt å undersøke hvilke verktøy og løsninger vi kan bruke for å lage bloggfunksjonen og en side for jobbsøknader og oppdrag. Disse funksjonene er ikke lagt inn enda, men vi har en tydelig plan for hvordan vi skal jobbe videre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Status1;
