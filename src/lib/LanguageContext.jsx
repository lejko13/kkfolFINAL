import React, { createContext, useContext } from 'react';
import { t } from './i18n';

const LanguageContext = createContext({ t });

export function LanguageProvider({ children }) {
  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}