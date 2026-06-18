import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import poster from "../assets/spiderman.jpg";
import heartLogo from "../assets/logo.svg";
import entradasPdf from "../assets/entradas.pdf";

export default function DateConfirmed() {
  const targetDate = new Date(2026, 6, 30, 14, 40);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Cita%20con%20el%20amor%20de%20mi%20vida%20para%20ver%20Spiderman%E2%9D%A4%EF%B8%8F%F0%9F%95%B7" +
    "&dates=20260730T144000/20260730T170000" +
    "&location=Cinemark%20Terrazas%20de%20Mayo";
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
      />

      <div className="absolute inset-0 bg-black/75" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10
          bg-black/60
          border border-white/20
          backdrop-blur-md
          text-center
          px-4 sm:px-6 md:px-8
          py-6 sm:py-8 md:py-10
          max-w-[95vw] sm:max-w-lg md:max-w-2xl
          w-full
          mx-2
          rounded-lg
          shadow-2xl
        "
      >
        <h1 className="text-red-500 text-3xl sm:text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-2">
          <img
            src={heartLogo}
            alt="heart"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
          />
          TENEMOS UNA CITA
          <img
            src={heartLogo}
            alt="heart"
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
          />
        </h1>

        <p className="text-white mt-6 text-xl sm:text-2xl md:text-4xl font-bold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          JUEVES 30 DE JULIO | 21:00
        </p>

        <div className="mt-8 space-y-2">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium">
            Spider-Man: Brand New Day
          </p>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            Cinemark Terrazas de Mayo
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white mt-8">
          <p className="text-lg">FALTAN:</p>

          <div>
            <p className="text-2xl sm:text-3xl font-bold">{timeLeft.days}</p>
            <p className="text-xs text-gray-400">Días</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold">{timeLeft.hours}</p>
            <p className="text-xs text-gray-400">Horas</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold">{timeLeft.minutes}</p>
            <p className="text-xs text-gray-400">Min</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-bold">{timeLeft.seconds}</p>
            <p className="text-xs text-gray-400">Seg</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="
              bg-red-600
              hover:bg-red-700
              transition
              text-white
              px-4 sm:px-6 py-2 sm:py-3
              rounded-md
              text-base sm:text-lg
              font-semibold
            "
          >
            Agendar en calendario
          </a>

          <a
            href={entradasPdf}
            download="Entradas-Spiderman.pdf"
            className="
    bg-white/10
    border border-white/20
    hover:bg-white/20
    transition
    text-white
    px-4 sm:px-6 py-2 sm:py-3
    rounded-md
    text-base sm:text-lg
    font-semibold
  "
          >
            Descargar entradas
          </a>
        </div>

        <div className="mt-10 text-gray-400 italic text-xs sm:text-sm leading-relaxed space-y-3 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Un gran poder lleva una gran responsabilidad, y una hermosa cita con
            vos.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Deseo que seas siempre feliz, y que la vida me permita ver películas
            con vos por siempre.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Tú eres mi camino... siempre serás mi camino.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center mt-2"
          >
            <p className="text-white font-medium">
              Te amo para siempre Dafne Azul
            </p>

            <img
              src={heartLogo}
              alt="heart"
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain ml-2"
            />
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
