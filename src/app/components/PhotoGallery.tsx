import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const memories = [
  {
    id: 1,
    url: 'https://fiza-birthday-present.vercel.app/static/media/photo1.f72cf6a45006a9488ecc.jpg',
    caption: 'Smiles That Last Forever',
  },
  {
    id: 2,
    url: 'https://fiza-birthday-present.vercel.app/static/media/photo3.428a534e8f88f6f66e13.jpeg',
    caption: 'Celebrations & Joy',
  },
  {
    id: 3,
    url: 'https://fiza-birthday-present.vercel.app/static/media/photo2.b2fd4fa2eae835e7819d.jpeg',
    caption: 'Let your smile speak.',
  },
];

export function PhotoGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-6">

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Beautiful Memories
        </h2>
        <p className="text-2xl text-purple-200">
          Every moment is special
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 },
            }}
            className="relative"
          >

            {/* Card Container */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6">

              {/* Image */}
              <div className="flex justify-center items-center">
                <ImageWithFallback
                  src={memory.url}
                  alt={memory.caption}
                  className="w-full max-h-[500px] object-contain rounded-2xl"
                />
              </div>

              {/* Caption */}
              <div className="mt-6 text-center">
                <p className="text-white text-2xl font-semibold">
                  {memory.caption}
                </p>
              </div>

            </div>

            {/* Decorative Rotating Star */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-4 -right-4 text-5xl"
            >
              ⭐
            </motion.div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}