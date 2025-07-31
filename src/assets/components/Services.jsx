import React from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt, FaBullseye, FaBolt, FaLock, FaGlobe, FaTools } from "react-icons/fa";

const Services = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const services = [
    {
      title: `${t('Creation')}`,
      description: `${t('Creation_p')}`,
      icon: <FaCode className="text-2xl" />,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Design",
      description: `${t('Design_p')}`,
      icon: <FaPaintBrush className="text-2xl" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: `${t('Responsive')}`,
      description: `${t('Responsive_p')}`,
      icon: <FaMobileAlt className="text-2xl" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: `${t('Personnalisation')}`,
      description: `${t('Personnalisation_p')}`,
      icon: <FaBullseye className="text-2xl" />,
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: `${t('Vitesse')}`,
      description: `${t('Vitesse_p')}`,
      icon: <FaBolt className="text-2xl" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: `${t('Sécurité')}`,
      description: `${t('Sécurité_p')}`,
      icon: <FaLock className="text-2xl" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "SEO",
      description: `${t('SEO_p')}`,
      icon: <FaGlobe className="text-2xl" />,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Maintenance",
      description: `${t('Maintenance_p')}`,
      icon: <FaTools className="text-2xl" />,
      color: "from-gray-500 to-slate-500"
    },
  ];

  return (
    <section id='Services' className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black ">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-teal-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center uppercase mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-300 dark:to-blue-400"
        >
          {t('ServicesH1')}
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className={`group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div 
                className={`w-20 h-20 flex items-center justify-center text-3xl mb-6 rounded-full bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Animated underline */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 absolute bottom-6 left-1/2 -translate-x-1/2 group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;