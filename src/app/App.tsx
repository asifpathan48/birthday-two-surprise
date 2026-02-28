import { useEffect, useRef } from 'react';
import { BirthdayHero } from './components/BirthdayHero';
import { ConfettiSection } from './components/ConfettiSection';
import { PhotoGallery } from './components/PhotoGallery';
import { WishesSection } from './components/WishesSection';
import { InteractiveMessage } from './components/InteractiveMessage';
import { FinalCelebration } from './components/FinalCelebration';

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.25; // 🎵 soft background volume
        audioRef.current.play().catch((err) => {
          console.log("Playback prevented:", err);
        });
      }

      // Remove listener after first interaction
      window.removeEventListener('click', startMusic);
    };

    // Wait for first user interaction
    window.addEventListener('click', startMusic);

    return () => {
      window.removeEventListener('click', startMusic);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Background Music */}
      <audio ref={audioRef} src="/song.mp3" loop />

      <BirthdayHero />
      <ConfettiSection />
      <PhotoGallery />
      <WishesSection />
      <InteractiveMessage />
      <FinalCelebration />
    </div>
  );
}