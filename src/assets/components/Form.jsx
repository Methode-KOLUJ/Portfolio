import React, { useState, useRef } from "react";
import { FaPaperPlane, FaCheck, FaTimes, FaCloudUploadAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";

export const Form = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nameOrCompany: "",
    phone: "",
    email: "",
    file: null,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({
    message: "",
    type: "",
    visible: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFileDragging, setIsFileDragging] = useState(false);

  const fileInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsFileDragging(true);
  };

  const handleDragLeave = () => {
    setIsFileDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsFileDragging(false);
    if (e.dataTransfer.files.length) {
      setFormData({ ...formData, file: e.dataTransfer.files[0] });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nameOrCompany.trim()) newErrors.nameOrCompany = `${t('PersOrEnterMessage')}`;
    if (!formData.phone.trim() && !formData.email.trim())
      newErrors.contact = `${t('PhoneOrMail')}`;
    if (formData.phone.trim() && formData.phone.trim().length < 9)
      newErrors.phone = `${t('NumExige')}`;
    if (
      formData.file &&
      !["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(
        formData.file.type
      )
    )
      newErrors.file = `${t('FichierAccepts')}`;
    if (!formData.message.trim() && !formData.file)
      newErrors.message = `${t('IfNofiles')}`;
    if (formData.message.trim() && formData.message.trim().length < 50)
      newErrors.message = `${t('MessageExige')}`;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendFormDataToBackend = async () => {
    const backendURL = "https://kolujdev2.onrender.com/api/form";
    const formDataToSend = new FormData();

    formDataToSend.append("nameOrCompany", formData.nameOrCompany);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
    if (formData.file) {
      formDataToSend.append("file", formData.file);
    }
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch(backendURL, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setNotification({
          message: `${t('Succès')}`,
          type: "success",
          visible: true,
        });
      } else {
        setNotification({
          message: `${t('UneErreur')}`,
          type: "error",
          visible: true,
        });
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setNotification({
        message:`${t('Impossible')}`,
        type: "error",
        visible: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      await sendFormDataToBackend();
      setIsSubmitting(false);

      setFormData({
        nameOrCompany: "",
        phone: "",
        email: "",
        file: null,
        message: "",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setTimeout(() => setNotification({ ...notification, visible: false }), 4000);
    } else {
      setNotification({
        message: `${t('VeillerRemplir')}`,
        type: "error",
        visible: true,
      });

      setTimeout(() => setNotification({ ...notification, visible: false }), 5000);
    }
  };

  return (
    <section id="contacts" className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      {/* Notification */}
      <AnimatePresence>
        {notification.visible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white flex items-center gap-2 ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {notification.type === "success" ? <FaCheck /> : <FaTimes />}
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 dark:from-teal-300 dark:to-blue-400 uppercase"
      >
        {t('Embauche')}
        <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-2xl dark:bg-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
      >
        <div className="mb-6">
          <label
            htmlFor="nameOrCompany"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-3"
          >
            {t('PersOrEnter')}
          </label>
          <input
            type="text"
            id="nameOrCompany"
            name="nameOrCompany"
            value={formData.nameOrCompany}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-300 transition-all duration-200"
          />
          <AnimatePresence>
            {errors.nameOrCompany && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.nameOrCompany}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-3"
            >
              {t('Téléphone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-300 transition-all duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-300 transition-all duration-200"
            />
          </div>
          <AnimatePresence>
            {errors.contact && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-sm col-span-1 md:col-span-2"
              >
                {errors.contact}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mb-6">
          <label
            htmlFor="file"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-3"
          >
            {t('Détail')}
          </label>
          <div 
            className={`w-full p-8 border-2 border-dashed rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
              isFileDragging ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
          >
            <FaCloudUploadAlt className="text-3xl mb-3 text-blue-500 dark:text-blue-400" />
            <p className="text-center text-gray-600 dark:text-gray-400 mb-2">
              {formData.file 
                ? formData.file.name 
                : isFileDragging 
                  ?`${t('Déposez')}`
                  : `${t('Glissez')}`}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
            {t('Formats')}
            </p>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="hidden"
            />
          </div>
          <AnimatePresence>
            {errors.file && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.file}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mb-8">
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-3"
          >
            {t('Message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="5"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-gray-300 resize-none transition-all duration-200"
          ></textarea>
          <AnimatePresence>
            {errors.message && (
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-sm mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 ${
            isSubmitting 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white shadow-lg"
          }`}
        >
          {isSubmitting ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </motion.span>
              {t('Patienter')}
            </>
          ) : (
            <>
              <FaPaperPlane /> 
              {t('Soumettre')}
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="ml-1"
              >
              </motion.span>
            </>
          )}
        </motion.button>
      </motion.form>
    </section>
  );
};