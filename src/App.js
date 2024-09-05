import React from 'react';
import './App.css'; // Importer CSS-filen for styling

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Azure Static Web Apps med Autentisering</h1>
      </header>
      <main className="app-content">
        <section>
          <h2>Hva er Azure Static Web Apps?</h2>
          <p>
            Azure Static Web Apps er en tjeneste som gjør det enkelt å distribuere fullstack webapplikasjoner direkte fra en GitHub-repositorie. 
            Tjenesten håndterer automatisk bygging og distribusjon av appen din, og tilbyr også funksjoner som global distribusjon, tilpassede domener og SSL-sertifikater.
          </p>
        </section>
        <section>
          <h2>Autentisering i Azure Static Web Apps</h2>
          <p>
            Azure Static Web Apps tilbyr innebygd autentisering og autorisering. Du kan enkelt beskytte dine ruter og API-er ved å konfigurere autentisering i `staticwebapp.config.json`-filen.
          </p>
          <h3>Eksempel på konfigurasjon</h3>
          <pre>
            <code>
              {`
{
  "auth": {
    "identityProviders": {
      "github": {
        "registration": {
          "clientIdSettingName": "GITHUB_CLIENT_ID",
          "clientSecretSettingName": "GITHUB_CLIENT_SECRET"
        }
      }
    }
  }
}
              `}
            </code>
          </pre>
        </section>
      </main>
      <footer className="app-footer">
        <p>© 2023 Azure Static Web Apps Guide</p>
      </footer>
    </div>
  );
}

export default App;
