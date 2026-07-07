import { useState } from "react";
import { motion } from "framer-motion";

export default function PasswordScreen({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleVerificar = () => {
    const claveCorrecta = import.meta.env.VITE_APP_PASSWORD || ""; 

    if (password.trim().toLowerCase() === claveCorrecta.trim().toLowerCase()) {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleVerificar();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-black/80 border border-white/10 p-8 rounded-lg shadow-2xl text-center max-w-sm w-full backdrop-blur-sm"
      >
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Acceso Restringido</h2>

        <input
          type="password"
          placeholder="Ingresa la contraseña..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-3 mb-4 rounded bg-zinc-900 text-white border border-gray-700 focus:outline-none focus:border-red-500 transition-colors"
        />

        <button
          onClick={handleVerificar}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition-all duration-300"
        >
          Ingresar
        </button>

        {error && (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-red-500 mt-4 text-sm font-medium"
          >
            Contraseña incorrecta. Intentá de nuevo.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}