
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSlider from '@/components/HeroSlider';
import { amenities, reviews, bookingPartners } from '@/data/resortData';
import { Star, Phone, MapPin, Wifi, ConciergeBell, Users, Car } from 'lucide-react';
import SignatureExperiencesBanner from '@/assets/Maheshwar Heritage & Culture Discovery.webp';

const Index = () => {
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'wifi':
        return <Wifi className="w-8 h-8" />;
      case 'pool':
        return <div className="w-8 h-8 bg-resort-blue rounded-full flex items-center justify-center text-white text-xs">🏊</div>;
      case 'spa':
        return <div className="w-8 h-8 bg-resort-blue rounded-full flex items-center justify-center text-white text-xs">🧘</div>;
      case 'circle-parking':
        return <Car className="w-8 h-8" />;
      case 'service':
        return <ConciergeBell className="w-8 h-8" />;
      case 'hall':
        return <Users className="w-8 h-8" />;
      default:
        return <div className="w-8 h-8 bg-resort-blue rounded-full" />;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-marcellus text-resort-navy mb-6">
              Welcome to Ahilya Resort
            </h2>
            <p className="text-lg text-resort-dark mb-8 font-sans leading-relaxed">
              Nestled in a peaceful setting just a short distance from historic Maheshwar, Ahilya Resort is surrounded by scenic hills and close to the sacred Narmada River. Enjoy the perfect blend of nature, tranquility, and modern luxury while experiencing world-class comfort and warm hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="font-rubik bg-resort-blue hover:bg-resort-navy" asChild>
                <Link to="/rooms">Explore Rooms</Link>
              </Button>
              <Button variant="outline" className="font-rubik border-resort-blue text-resort-blue" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking */}
      <section className="py-16 bg-resort-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-marcellus text-resort-navy mb-4">Quick Booking</h3>
            <p className="text-resort-dark font-sans">Choose your preferred booking method</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Button 
              className="h-16 font-rubik bg-resort-blue hover:bg-resort-navy"
              asChild
            >
              <a href="tel:+919425046824" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Call Direct
              </a>
            </Button>
            
            {bookingPartners.map((partner) => (
              <Button
                key={partner.name}
                variant="outline"
                className="h-16 font-rubik border-resort-blue text-resort-blue hover:bg-resort-blue hover:text-white"
                asChild
              >
                <a href={partner.url} target="_blank" rel="noopener noreferrer">
                  {partner.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-marcellus text-resort-navy mb-4">Resort Amenities</h3>
            <p className="text-resort-dark font-sans">Experience luxury at every turn</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity) => (
              <Card key={amenity.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-resort-blue">
                    {getAmenityIcon(amenity.icon)}
                  </div>
                  <h4 className="font-rubik font-semibold text-resort-navy mb-2">{amenity.name}</h4>
                  <p className="text-sm text-resort-dark font-sans">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-resort-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-marcellus text-resort-navy mb-4">Signature Experiences</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={SignatureExperiencesBanner} 
                alt="Curated Narmada Sunset Experience"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-rubik font-semibold text-resort-navy mb-2">Curated Narmada Sunset Experience</h4>
                <p className="text-sm text-resort-dark font-sans">Enjoy a thoughtfully planned visit to the sacred Narmada ghats, where serene views, gentle river breezes, and a calm sunset moment create a deeply peaceful and memorable experience.</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={SignatureExperiencesBanner} 
                alt="Bonfire Evenings at the Resort"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-rubik font-semibold text-resort-navy mb-2">Bonfire Evenings at the Resort</h4>
                <p className="text-sm text-resort-dark font-sans">Unwind after a day of exploration with a cozy bonfire evening at the resort, featuring warm lighting, relaxed seating, soft music, and conversations under a starlit sky.</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={SignatureExperiencesBanner} 
                alt="Maheshwar Heritage & Culture Discovery"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="font-rubik font-semibold text-resort-navy mb-2">Maheshwar Heritage & Culture Discovery</h4>
                <p className="text-sm text-resort-dark font-sans">Explore the timeless charm of Maheshwar through guided visits to historic forts, ghats, and local handloom traditions, followed by a relaxed return to the comfort of the resort.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-marcellus text-resort-navy mb-4">What Our Guests Say</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.slice(0, 3).map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-resort-gold fill-current' : 'text-resort-gray'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-resort-dark font-sans mb-4 italic">"{review.comment}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-resort-blue rounded-full flex items-center justify-center text-white font-rubik font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="font-rubik font-semibold text-resort-navy">{review.name}</p>
                      <p className="text-sm text-resort-dark">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="font-rubik border-resort-blue text-resort-blue" asChild>
              <Link to="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-16 bg-resort-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-marcellus text-resort-navy mb-6">Perfect Location</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-resort-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-rubik font-semibold text-resort-navy">Historic Maheshwar</p>
                    <p className="text-resort-dark font-sans">Located in the heart of this ancient temple town</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-resort-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-rubik font-semibold text-resort-navy">Narmada Riverfront</p>
                    <p className="text-resort-dark font-sans">Direct access to the sacred river and ghats</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-resort-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-rubik font-semibold text-resort-navy">Easy Access</p>
                    <p className="text-resort-dark font-sans">Well-connected to Indore and other major cities</p>
                  </div>
                </div>
              </div>
              <Button className="mt-6 font-rubik bg-resort-blue hover:bg-resort-navy" asChild>
                <Link to="/contact">View Location</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop"
                alt="Maheshwar Location"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
