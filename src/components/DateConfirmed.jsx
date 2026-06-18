import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import poster from "../assets/spiderman.jpg";

export default function DateConfirmed() {
  const targetDate = new Date(2026, 6, 30, 14, 40); // julio = 6

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

  // 📅 Google Calendar (FIX: único y reutilizable)
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Spider-Man%3A%20Brand%20New%20Day" +
    "&dates=20260730T144000/20260730T170000" +
    "&details=Salida%20al%20cine%20-%20Spider-Man%3A%20Brand%20New%20Day" +
    "&location=Cinemark%20Terrazas%20de%20Mayo";

  // 📄 ICS download (FIX limpio)
  const downloadICS = () => {
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Spider-Man Date//ES
BEGIN:VEVENT
UID:spiderman-date
DTSTAMP:20260101T120000Z
DTSTART:20260730T144000
DTEND:20260730T170000
SUMMARY:Spider-Man: Brand New Day
DESCRIPTION:Salida al cine - Cinemark Terrazas de Mayo
LOCATION:Cinemark Terrazas de Mayo
END:VEVENT
END:VCALENDAR
    `.trim();

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "spiderman-date.ics";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.URL.revokeObjectURL(url); // FIX memoria
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Fondo cinematográfico */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* 🎟️ TICKET */}
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
          px-8 py-10
          max-w-2xl
          w-full
          mx-4
          rounded-lg
          shadow-2xl
        "
      >

        {/* Título */}
        <h1 className="text-red-500 text-5xl md:text-6xl font-bold mb-6">
          TENEMOS UNA CITA
        </h1>

        {/* Info */}
        <p className="text-white text-xl">
          Spider-Man: Brand New Day
        </p>

        <p className="text-gray-300 mt-1">
          Cinemark Terrazas de Mayo
        </p>

        <p className="text-white mt-4 text-lg">
          JUE., 30 JUL · 14:40
        </p>

        {/* BOTONES */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">

          {/* Google Calendar FIX */}
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="
              bg-red-600
              hover:bg-red-700
              transition
              text-white
              px-6 py-3
              rounded-md
              text-lg
              font-semibold
            "
          >
            Agregar a Google Calendar
          </a>

          {/* ICS FIX */}
          <button
            onClick={downloadICS}
            className="
              bg-gray-200
              hover:bg-gray-300
              transition
              text-black
              px-6 py-3
              rounded-md
              text-lg
              font-semibold
            "
          >
            Agregar al calendario
          </button>

        </div>

        {/* CONTADOR */}
        <div className="flex justify-center gap-6 text-white mt-10">
          <div>
            <p className="text-3xl font-bold">{timeLeft.days}</p>
            <p className="text-xs text-gray-400">Días</p>
          </div>

          <div>
            <p className="text-3xl font-bold">{timeLeft.hours}</p>
            <p className="text-xs text-gray-400">Horas</p>
          </div>

          <div>
            <p className="text-3xl font-bold">{timeLeft.minutes}</p>
            <p className="text-xs text-gray-400">Min</p>
          </div>

          <div>
            <p className="text-3xl font-bold">{timeLeft.seconds}</p>
            <p className="text-xs text-gray-400">Seg</p>
          </div>
        </div>

        {/* FRASE FINAL */}
        <p className="text-gray-400 italic mt-10 text-sm">
          Con grandes poderes vienen grandes responsabilidades,
          y una buena película para compartir.
        </p>

      </motion.div>
    </div>
  );
}