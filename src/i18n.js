import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Pour charger les traductions dynamiquement
  .use(LanguageDetector) // Pour détecter la langue du navigateur
  .use(initReactI18next) // Pour utiliser i18n avec React
  .init({
    fallbackLng: "fr", // Langue par défaut
    debug: false, // Activez pour voir les logs en développement
    interpolation: {
      escapeValue: false, // Pas besoin d’échapper les valeurs dans React
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Chemin pour les fichiers de traduction
    },
  });

export default i18n;
