import { motion } from "framer-motion";

export default function EnvelopeIntro({ onOpen }) {
  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center bg-black relative">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="
          relative z-10
          cursor-pointer
          w-[80vw] max-w-xs
          h-40 sm:h-48
          bg-red-600
          rounded-md
          shadow-2xl
          flex items-center justify-center
        "
      >
        <div className="text-white text-center px-4">
          <p className="text-base sm:text-lg font-bold tracking-widest">
            TENÉS UNA INVITACIÓN
          </p>
          <p className="text-xs sm:text-sm opacity-80 mt-1">
            Tocar para abrir
          </p>
        </div>
      </motion.div>

    </div>
  );
}