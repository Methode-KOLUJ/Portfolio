import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Button = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Fermer le menu quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Bouton principal */}
      <button
        onClick={toggleMenu}
        className="px-2 text-2xl py-1 rounded-md dark:bg-gray-900 bg-gray-100 hover:bg-white text-gray-200 dark:hover:bg-black focus:outline-none"
      >
        🌐
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <ul className="absolute top-0 right-0 w-34 bg-white dark:bg-gray-900 px-4 py-2 dark:border-gray-700 rounded shadow-lg text-black dark:text-white z-50">
          <li
            className="flex items-center px-4 py-2 cursor-pointer hover:underline"
            onClick={() => changeLanguage('en')}
          >
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="English"
              className="w-6 h-6 mr-2 rounded"
            />
            English
          </li>
          <li
            className="flex items-center px-4 py-2 cursor-pointer hover:underline"
            onClick={() => changeLanguage('fr')}
          >
            <img
              src="https://flagcdn.com/w40/fr.png"
              alt="Français"
              className="w-6 h-6 mr-2 rounded"
            />
            Français
          </li>
        </ul>
      )}
    </div>
  );
};