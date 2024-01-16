import React, { useState } from 'react';

import './App.css';

import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';
import de from './locales/de.json';

function App() {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(null);

  const handleChangeLanguage = async (event) => {
    const selectedLanguage = event.target.value;

    // Utiliza o import() dinâmico para carregar o arquivo JSON correspondente ao idioma selecionado
    const translationModule = await import(`./locales/${selectedLanguage}.json`);
    setTranslations(translationModule.default);
    
    setLanguage(selectedLanguage);
  };

  return (
    <div className="container">
      <h1 className="title">{translations?.title || 'Loading...'}</h1>
      <select className="language-select" value={language} onChange={handleChangeLanguage}>
        <option value="en">English</option>
        <option value="pt">Português</option>
        <option value="es">Español</option>
      </select>
      <p className="welcome-message">{translations?.welcomeMessage || 'Loading...'}</p>
      <p>{translations?.bodyText || 'Loading...'}</p>
      <h2>{translations?.sectionTitle || 'Loading...'}</h2>
      <p>{translations?.sectionContent || 'Loading...'}</p>
    </div>
  );
}

export default App;
