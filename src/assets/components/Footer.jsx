import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: <FaWhatsapp />, text: "WhatsApp", href: "https://wa.me/243812539000", color: "hover:text-teal-500 dark:hover:text-teal-400" },
    { icon: <FaEnvelope />, text: "Email", href: "mailto:misterfrpkoluj@gmail.com", color: "hover:text-blue-500 dark:hover:text-blue-400" },
    { icon: <FaPhone />, text: t('Appel'), href: "tel:+243812539000", color: "hover:text-green-500 dark:hover:text-green-400" }
  ];

  const networkLinks = [
    { icon: <FaLinkedin />, text: "LinkedIn", href: "https://www.linkedin.com/in/jean-claude-lulu-388b09319", color: "hover:text-blue-700 dark:hover:text-blue-600" },
    { icon: <FaGithub />, text: "GitHub", href: "https://github.com/Methode-KOLUJ", color: "hover:text-gray-900 dark:hover:text-white" },
    { icon: <FaInstagram />, text: "Instagram", href: "https://www.instagram.com/koluj_dev/profilecard", color: "hover:text-pink-600 dark:hover:text-pink-500" },
    { icon: <FaFacebook />, text: "Facebook", href: "https://www.facebook.com/profile.php?id=61552734085955", color: "hover:text-blue-800 dark:hover:text-blue-700" }
  ];

  const scheduleItems = [
    { day: t('Lun-Ven'), time: t('Lun-VenHeure'), color: "text-green-600 dark:text-green-400" },
    { day: t('Samedi'), time: t('SamediHeure'), color: "text-yellow-600 dark:text-yellow-400" },
    { day: t('Dimanche'), time: t('DimancheNews'), color: "text-red-600 dark:text-red-400" }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-black py-12 text-gray-800 dark:text-gray-200 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Schedule Column */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-extrabold text-center uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400"
            >
              {t('Horaire')}
            </motion.h3>
            <ul className="space-y-4 text-center">
              {scheduleItems.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className={`font-bold ${item.color}`}>{item.day}</p>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.time}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contacts Column */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-extrabold text-center uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400"
            >
              {t('Contacts')}
            </motion.h3>
            <ul className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className={`flex items-center justify-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-900 shadow-sm hover:shadow-md transition-all ${link.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Networks Column */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-extrabold text-center uppercase mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400"
            >
              {t('Réseaux')}
            </motion.h3>
            <ul className="space-y-4">
              {networkLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.href}
                    className={`flex items-center justify-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-900 shadow-sm hover:shadow-md transition-all ${link.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="text-center border-t border-gray-300 dark:border-gray-700 pt-8 mt-12"
        >
          <p className="text-sm md:text-base">
            &copy; {currentYear} {t('Copyright')}{' '}
            <a 
              href="https://wa.me/243812539000" 
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 dark:from-teal-400 dark:to-blue-400 hover:underline"
            >
              KOLUJ_DEV
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};