import { motion } from 'motion/react';
import { Heart, Star, Sparkles, Gift } from 'lucide-react';

const wishes = [
  {
    icon: Heart,
    title: 'Love & Happiness',
    message: 'May your year be filled with endless love, joy, and beautiful moments that make your heart smile.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Star,
    title: 'Dreams Come True',
    message: 'Chase your dreams fearlessly and watch them unfold into reality. You deserve all the success!',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: Sparkles,
    title: 'Amazing Adventures',
    message: 'Here\'s to new adventures, exciting journeys, and experiences that take your breath away.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Gift,
    title: 'Precious Moments',
    message: 'May every day bring you precious moments worth treasuring and memories to last a lifetime.',
    color: 'from-cyan-500 to-blue-500',
  },
];

export function WishesSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Birthday Wishes
        </h2>
        <p className="text-2xl text-purple-200">
          For someone truly special
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {wishes.map((wish, index) => {
          const Icon = wish.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="group"
            >
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${wish.color} shadow-2xl overflow-hidden`}>
                {/* Animated background effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <Icon className="w-16 h-16 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {wish.title}
                </h3>

                <p className="text-lg text-white/90 leading-relaxed">
                  {wish.message}
                </p>

                {/* Floating sparkle effect */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-4 right-4 text-3xl"
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
