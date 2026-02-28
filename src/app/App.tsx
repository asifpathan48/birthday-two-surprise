import { BirthdayHero } from './components/BirthdayHero';
import { ConfettiSection } from './components/ConfettiSection';
import { PhotoGallery } from './components/PhotoGallery';
import { WishesSection } from './components/WishesSection';
import { InteractiveMessage } from './components/InteractiveMessage';
import { FinalCelebration } from './components/FinalCelebration';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <BirthdayHero />
      <ConfettiSection />
      <PhotoGallery />
      <WishesSection />
      <InteractiveMessage />
      <FinalCelebration />
    </div>
  );
}
