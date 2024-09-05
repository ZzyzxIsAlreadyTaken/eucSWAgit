import React from 'react';
import './app.css'; // Importer CSS-filen for styling

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Azure Static Web Apps</h1>
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
          <h2>Hvordan sette opp Azure Static Web Apps</h2>
          <ol>
            <li>
              <strong>Opprett et GitHub-repositorie:</strong> Lag et nytt repositorie på GitHub og legg til koden din.
            </li>
            <li>
              <strong>Koble til Azure:</strong> Gå til Azure-portalen og opprett en ny Static Web App. Koble den til GitHub-repositoriet ditt.
            </li>
            <li>
              <strong>Konfigurer bygg og distribusjon:</strong> Azure vil automatisk opprette en GitHub Actions workflow-fil som håndterer bygg og distribusjon av appen din.
            </li>
            <li>
              <strong>Distribuer appen:</strong> Når du pusher endringer til hovedgrenen i repositoriet ditt, vil GitHub Actions workflowen bygge og distribuere appen din til Azure Static Web Apps.
            </li>
          </ol>
        </section>
      </main>
      <footer className="app-footer">
        <p>© 2023 Azure Static Web Apps Guide</p>
      </footer>
    </div>
  );
}

export default App;
