import { useState } from "react";
import poster from "../assets/spiderman.jpg";
import { motion } from "framer-motion";

export default function Invitation({ onAccept }) {
  const [message, setMessage] = useState("");

  const messages = [
    "¿Segura?",
    "Pensalo bien.",
    "Peter Parker estaría triste",
    "Última oportunidad"
  ];

  const showMessage = () => {
    setMessage(
      messages[Math.floor(Math.random() * messages.length)]
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Fondo con zoom cinematográfico */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${poster})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-10 text-center px-6 max-w-2xl"
      >
        <h1
          className="
            text-red-500
            text-5xl
            md:text-7xl
            font-bold
            mb-8
            tracking-wide
          "
        >
          SPIDER-MAN
        </h1>

        <h2 className="text-white text-3xl md:text-5xl mb-10 leading-tight">
          ¿Querés ver el estreno de
          <br />
          <span className="text-white">
            Brand New Day
          </span>
          <br />
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
              px-10
              py-3
              rounded-md
              text-xl
              font-semibold
              shadow-lg
            "
          >
            Sí
          </button>

          <button
            onClick={showMessage}
            className="
              bg-gray-300
              hover:bg-gray-400
              transition-all
              duration-300
              text-black
              px-10
              py-3
              rounded-md
              text-xl
              font-semibold
              shadow-lg
            "
          >
            No
          </button>
        </div>

        {message && (
          <motion.p
            key={message}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-white text-xl mt-6"
          >
            {message}
          </motion.p>
        )}

      </motion.div>
    </div>
  );
}