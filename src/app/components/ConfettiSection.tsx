import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
}

export function ConfettiSection() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  useEffect(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#6BCB77', '#A78BFA', '#F472B6'];
    const pieces = [...Array(100)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            left: `${piece.x}%`,
            backgroundColor: piece.color,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 20,
            rotate: 360,
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 py-12"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-9xl mb-8"
        >
          🎂
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Make a Wish!
        </h2>
        
        <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Today is all about celebrating YOU and the incredible person you are.
          Here's to another year of amazing adventures, unforgettable memories,
          and dreams coming true!
        </p>
      </motion.div>
    </div>
  );
}
