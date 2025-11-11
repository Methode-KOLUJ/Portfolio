import React, { useEffect } from "react";
import Typed from "typed.js";
import JeanClaudeImage from "../images/KOLUJ.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const options = {
      strings: [`${t('Frontend')}`, `${t('Backend')}`, "DATA MANAGER"],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true,
    };

    const typed = new Typed(".typed", options);

    return () => {
      typed.destroy();
    };
  }, [t, i18n.language]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <section
      id="accueil"
      className="relative flex flex-col items-center justify-center p-4 w-full min-h-screen bg-white dark:bg-black overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-teal-400 blur-3xl opacity-20 dark:opacity-10 animate-float1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-blue-500 blur-3xl opacity-20 dark:opacity-10 animate-float2"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto mt-16 lg:mt-32 md:mt-30"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        {/* Profile image with animation */}
        <motion.div 
          variants={itemVariants}
          className="relative flex items-center justify-center mb-8 lg:mb-12 "
        >
          <div className="absolute inset-0 w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-blue-500 to-teal-400 blur-2xl opacity-50 dark:opacity-30"></div>
          <motion.img
            src={JeanClaudeImage}
            alt="Jean-Claude Lulu"
            loading="lazy"
            className="rounded-full w-40 h-40 sm:w-52 sm:h-52 lg:w-60 lg:h-60 object-cover shadow-2xl border-4 border-gray-300 dark:border-gray-600"
            variants={floatingVariants}
            animate="float"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Main title */}
        <motion.h1 
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 uppercase text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400">
            {t('JeSuis')}
          </span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300">
            JEAN-CLAUDE LULU
          </span>
        </motion.h1>

        {/* Animated typed text */}
        <motion.div 
          variants={itemVariants}
          className="typed-container mt-2 sm:mt-4 md:mt-6 h-12 sm:h-16 flex items-center justify-center"
        >
          <span className="typed text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 uppercase"></span>
        </motion.div>

        {/* Social media icons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 mb-16"
        >
          {[
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jean-claude-lulu-388b09319", color: "hover:text-blue-600 dark:hover:text-blue-400" },
            { icon: <FaGithub />, href: "https://github.com/Methode-KOLUJ", color: "hover:text-gray-800 dark:hover:text-gray-100" },
            { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=61552734085955", color: "hover:text-blue-700 dark:hover:text-blue-500" },
            { icon: <FaInstagram />, href: "https://www.instagram.com/koluj_dev/profilecard", color: "hover:text-pink-500 dark:hover:text-pink-400" },
            { icon: <FaWhatsapp />, href: "https://wa.me/243812539000", color: "hover:text-green-500 dark:hover:text-green-400" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-700 dark:text-gray-300 transition-all duration-300 hover:shadow-xl"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className={`text-2xl ${social.color}`}>
                {social.icon}
              </span>
            </motion.a>
          ))}
        </motion.div>

      </motion.div>

      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(-5deg); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Home;