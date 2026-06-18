import { useState } from "react";
import poster from "../assets/spiderman.jpg";
import { motion } from "framer-motion";

export default function Invitation({ onAccept }) {
  const [message, setMessage] = useState("");

  const messages = [
    "¿Segura?",
    "Pensalo bien.",
    "Peter Parker estaría triste",
    "Última oportunidad",
  ];

  const showMessage = () => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center px-4">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 max-w-2xl"
      >
        <h1
          className="
          text-red-500
          text-4xl sm:text-5xl md:text-7xl
          font-bold
          mb-6 sm:mb-8
        "
        >
          ¡¡ FELIZ CUMPLEAÑOS MI AMOR !!
        </h1>

        <h2 className="text-white text-xl sm:text-3xl md:text-5xl mb-10 leading-tight">
          ¿Querés ver el estreno de
          SPIDERMAN
          conmigo?
        </h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={onAccept}
            className="
              bg-red-600
              hover:bg-red-700
              transition-all
              duration-300
              text-white
              px-6 sm:px-10
              py-2 sm:py-3
              rounded-md
              text-lg sm:text-xl
              font-semibold
              shadow-lg
            "
          >
            Si
          </button>

          <button
            onClick={showMessage}
            className="
              bg-gray-300
              hover:bg-gray-400
              transition-all
              duration-300
              text-black
              px-6 sm:px-10
              py-2 sm:py-3
              rounded-md
              text-lg sm:text-xl
              font-semibold
              shadow-lg
            "
          >
            No
          </button>
        </div>

        {message && (
          <p className="text-white text-base sm:text-xl mt-6">{message}</p>
        )}
      </motion.div>
    </div>
  );
}
