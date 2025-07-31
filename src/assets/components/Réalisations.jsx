import React from "react";
import { FaLink } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const Realisations = () => {
  const { t } = useTranslation();

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.15
      }
    })
  };

  const projects = [
    {
      title: `${t('ONG SEED')}`,
      description: `${t('ONG SEED_p')}`,
      image: "/images/SEED.PNG",
      link: "https://ong-seed-1.vercel.app",
      tags: ["Next.js", "Tailwind", "Framer Motion", "Node.js", 'Express.js']
    },
    {
      title: `${t('LOSAKA')}`,
      description: `${t('LOSAKA_p')}`,
      image: "/images/Losaka.PNG",
      link: "https://www.losakacompanyrdc.com",
      tags: ["Next.js", "Tailwind", "Node.js", 'Express.js']
    },
    {
      title: `${t('ONG JAD')}`,
      description: `${t('ONG JAD_p')}`,
      image: "/images/JAD.PNG",
      link: "https://ong-jad.vercel.app",
      tags: ["React", "Tailwind", "Framer Motion", "Node.js", 'Express.js']
    },
    {
      title: "TASK",
      description: `${t('Task_p')}`,
      image: "/images/Task.JPG",
      link: "https://kolujtask.vercel.app",
      tags: ["React", "Tailwind", "Framer Motion"]
    },
  ];

  return (
    <section 
      id="Realisations"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-teal-400 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-10 w-32 h-32 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-300 dark:to-blue-400"
        >
          {t('Réalisations')}
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, margin: "-50px" }}
              variants={cardVariants}
              className="group relative h-full flex flex-col"
            >
              <div className="relative overflow-hidden rounded-xl shadow-sm dark:shadow-gray-800/30 h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Image with hover zoom effect */}
                <div className="overflow-hidden h-60">
                  <div className="block w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300 font-medium transition-colors group/link"
                  >
                    <FaLink className="mr-2 transition-transform group-hover/link:rotate-45" /> 
                    <span>Live Demo</span>
                    <span className="ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:ml-3 transition-all duration-300">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisations;
