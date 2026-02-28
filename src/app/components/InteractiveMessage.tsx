import { motion } from 'motion/react';
import { useState } from 'react';
import { PartyPopper } from 'lucide-react';

export function InteractiveMessage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount >= 2) {
      setIsRevealed(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full text-center">
        {!isRevealed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-8"
            >
              <PartyPopper className="w-32 h-32 mx-auto text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              There's a Special Message for You!
            </h2>

            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="px-12 py-6 bg-white text-purple-600 rounded-full text-2xl font-bold shadow-2xl"
            >
              {clickCount === 0 && 'Click Me! 🎁'}
              {clickCount === 1 && 'One More Time! 🎉'}
              {clickCount >= 2 && 'Opening... ✨'}
            </motion.button>

            {clickCount > 0 && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-xl text-white/90"
              >
                Keep clicking...
              </motion.p>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-8xl mb-8"
            >
              🎊
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-white/20"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(255,255,255,0.3)',
                  '0 0 60px rgba(255,255,255,0.6)',
                  '0 0 30px rgba(255,255,255,0.3)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                You Are Incredible!
              </h3>

              <p className="text-xl md:text-2xl text-white leading-relaxed">
                On this special day, Thank you for
                being such an amazing person. Here's to celebrating YOU today
                and always! May this year bring you everything your heart desires
                and more. Happy Birthday, my wonderful friend! 🎂💝
              </p>

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-8 text-6xl"
              >
                💖
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
