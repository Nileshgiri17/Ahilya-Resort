
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroBanner from '@/assets/Hero_Section_Banner.webp';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: HeroBanner,
      title: "Resort in Maheshwar for a Comfortable & Peaceful Stay",
      subtitle: "at Ahilya Resort, Maheshwar",
      description: "Experience riverside tranquility in the heart of Madhya Pradesh"
    },
    {
      image: HeroBanner,
      title: "Resort in Maheshwar: Escape to Comfort & Calm",
      subtitle: "Awaits You",
      description: "Wake up to stunning views of the sacred Narmada River"
    },
    {
      image: HeroBanner,
      title: "Resort in Maheshwar: Your Perfect Holiday Retreat",
      subtitle: "Meets Modern Luxury",
      description: "Immerse yourself in the rich traditions of Maheshwar"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
        <div className="max-w-4xl px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-marcellus mb-4">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-3xl md:text-5xl font-marcellus mb-6 text-resort-blue">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-xl md:text-2xl font-sans mb-8 opacity-90">
            {slides[currentSlide].description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="font-rubik bg-resort-blue hover:bg-resort-navy text-lg px-8 py-3"
              asChild
            >
              <Link to="/search" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Stay
              </Link>
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="font-rubik border-white text-white hover:bg-white hover:text-resort-navy text-lg px-8 py-3"
              asChild
            >
              <a href="tel:+919425046824" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button> */}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
