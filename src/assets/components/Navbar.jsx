import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../images/Logo.jpeg";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Button } from './ButtLangs';
import { ThemeToggle } from "./ThemeManager";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const menuRef = useRef(null);

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  const menuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute("id");
        }
      });

      setActiveLink(current ? `#${current}` : "#accueil");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: `${t('Accueil')}`, href: "#accueil" },
    { name: `${t('Qui?')}`, href: "#apropos" },
    { name: `${t('Services')}`, href: "#Services" },
    { name: `${t('Réalisation')}`, href: "#Realisations" },
    { name: `${t('Actualités')}`, href : "https://www.facebook.com/profile.php?id=61552734085955"},
    { name: `${t('Contact')}`, href: "#contacts" },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 left-0 w-full bg-white/50 dark:bg-black/50 text-gray-900 dark:text-gray-100 z-50 backdrop-blur-sm"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with animation */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2"
        >
          <a href="#accueil">
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              className="h-12 w-12 rounded-lg object-cover border-2 border-gray-300 dark:border-gray-600"
            />
          </a>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm font-medium uppercase tracking-wider hover:text-teal-500 dark:hover:text-teal-400 transition-colors relative ${
                activeLink === link.href ? "text-teal-500 dark:text-teal-400" : ""
              }`}
            >
              {link.name}
              {activeLink === link.href && (
                <motion.span 
                  layoutId="activeLink"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-teal-500 dark:bg-teal-400"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Theme toggle and mobile menu button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button />

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden focus:outline-none z-50 p-2"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-8 h-8 text-gray-800 dark:text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu with simplified spacing */}
      {/* Mobile menu with animations */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      ref={menuRef}
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-black/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden"
    >
      <nav className="flex flex-col gap-6 text-center">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            custom={index}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuItemVariants}
          >
            <a
              href={link.href}
              onClick={closeMenu}
              className={`relative text-xl font-medium uppercase px-4 py-2 ${
                activeLink === link.href 
                  ? "text-teal-500 dark:text-teal-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-400"
              }`}
            >
              {link.name}
              {activeLink === link.href && (
                <span className="absolute left-0 right-0 bottom-0 mx-auto w-3/4 h-px bg-teal-500 dark:bg-teal-400" />
              )}
            </a>
          </motion.div>
        ))}
      </nav>
    </motion.div>
  )}
</AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
