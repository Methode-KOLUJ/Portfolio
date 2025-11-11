import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const About = () => {
  const { t } = useTranslation();

  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-5xl" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-5xl" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "JAVASCRIPT",
      icon: <FaJsSquare className="text-5xl" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "TYPESCRIPT",
      icon: <SiTypescript className="text-5xl" />,
      color: "from-blue-700 to-blue-800",
    },
    {
      name: "REACT JS",
      icon: <FaReact className="text-5xl" />,
      color: "from-blue-400 to-blue-500",
    },
     {
      name: "NEXT JS",
      icon: <SiNextdotjs className="text-5xl" />,
      color: "from-gray-800 to-gray-900",
    },
    {
      name: "TAILWIND CSS",
      icon: <SiTailwindcss className="text-5xl" />,
      color: "from-teal-400 to-teal-500",
    },
    {
      name: "NODE JS",
      icon: <FaNodeJs className="text-5xl" />,
      color: "from-green-500 to-green-600",
    },
    {
      name: "EXPRESS JS",
      icon: <SiExpress className="text-5xl" />,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "MONGO DB",
      icon: <SiMongodb className="text-5xl" />,
      color: "from-green-600 to-green-700",
    },
    {
      name: "NEXT JS",
      icon: <SiNextdotjs className="text-5xl" />,
      color: "from-gray-800 to-gray-900",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="apropos"
      className="relative py-16 bg-white dark:bg-black overflow-hidden min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-teal-400 blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-blue-500 blur-xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeIn}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center uppercase mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-300 dark:to-blue-400"
          >
            {t("Qui?")}
            <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.h2>

          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-6xl mx-auto"
          >
            {t("Présentation")} <br />
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {t("Motivation")}
            </span>
          </motion.p>

          <motion.h3
            variants={fadeIn}
            className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
          >
            {t("Techno")}
          </motion.h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="px-4"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              414: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="pb-10">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 flex flex-col items-center"
                >
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${skill.color} text-white`}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium text-center">
                    {skill.name}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};
