import { motion } from 'motion/react';
import { useState } from 'react';
import { Cake } from 'lucide-react';

export function FinalCelebration() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const blowCandles = () => {
    setCandlesLit(false);
    setTimeout(() => setShowMessage(true), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated stars background */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          ⭐
        </motion.div>
      ))}

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <Cake className="w-40 h-40 mx-auto text-pink-300" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            One Last Thing...
          </h2>

          {candlesLit ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="mb-8 flex justify-center gap-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    className="text-6xl"
                  >
                    🕯️
                  </motion.div>
                ))}
              </div>

              <p className="text-2xl md:text-3xl text-white mb-8">
                Make a wish and blow out the candles!
              </p>

              <motion.button
                onClick={blowCandles}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-2xl font-bold shadow-2xl"
              >
                Blow Candles 💨
              </motion.button>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="mb-8"
              >
                <div className="flex justify-center gap-4 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="text-6xl"
                    >
                      💨
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {showMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-white/20"
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      ease: "linear",
                    }}
                    className="text-8xl mb-6"
                  >
                    🎉
                  </motion.div>

                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Wish Granted! ✨
                  </h3>

                  <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8">
                    May all your dreams and wishes come true this year and always.
                    You deserve nothing but the absolute best!
                  </p>

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-6xl"
                  >
                    🎈🎁🎊
                  </motion.div>

                  <div className="mt-12 text-3xl text-white/90">
                    best wishes,
                  </div>
                  <div className="mt-4 text-4xl font-bold text-yellow-300">
                    Asif 
                  </div>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
