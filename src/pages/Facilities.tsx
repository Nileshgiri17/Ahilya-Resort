
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Waves, 
  Utensils, 
  Flower, 
  Dumbbell, 
  Wifi, 
  Car, 
  Coffee, 
  TreePine,
  Camera,
  Users,
  Calendar,
  Phone
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      id: 1,
      name: "Swimming Pool",
      description: "Infinity pool overlooking the sacred Narmada River with panoramic views",
      icon: <Waves className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      features: ["Infinity design", "River views", "Pool bar", "Sunbeds", "Towel service"],
      timing: "6:00 AM - 10:00 PM",
      category: "Recreation"
    },
    {
      id: 2,
      name: "Riverside Restaurant",
      description: "Fine dining experience with authentic Madhya Pradesh cuisine and international dishes",
      icon: <Utensils className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      features: ["Local cuisine", "International menu", "River views", "Private dining", "Room service"],
      timing: "7:00 AM - 11:00 PM",
      category: "Dining"
    },
    {
      id: 3,
      name: "Ayurvedic Spa",
      description: "Traditional wellness treatments using authentic Ayurvedic practices and herbs",
      icon: <Flower className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      features: ["Ayurvedic treatments", "Massage therapy", "Herbal baths", "Meditation", "Yoga sessions"],
      timing: "8:00 AM - 8:00 PM",
      category: "Wellness"
    },
    {
      id: 4,
      name: "Fitness Center",
      description: "Modern gym equipment with personal training available",
      icon: <Dumbbell className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      features: ["Modern equipment", "Personal trainer", "Yoga mats", "Free weights", "Cardio machines"],
      timing: "24/7",
      category: "Fitness"
    },
    {
      id: 5,
      name: "Cultural Tours",
      description: "Guided tours of historic Maheshwar including temples and handicraft centers",
      icon: <Camera className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
      features: ["Temple visits", "Handicraft tours", "Local guide", "Photography", "Cultural shows"],
      timing: "9:00 AM - 6:00 PM",
      category: "Activities"
    },
    {
      id: 6,
      name: "Gardens & Landscaping",
      description: "Beautifully maintained gardens with native plants and peaceful walkways",
      icon: <TreePine className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      features: ["Native plants", "Walking paths", "Seating areas", "Bird watching", "Photography spots"],
      timing: "24/7",
      category: "Outdoor"
    }
  ];

  const amenities = [
    { name: "Free Wi-Fi", icon: <Wifi className="w-5 h-5" /> },
    { name: "Free Parking", icon: <Car className="w-5 h-5" /> },
    { name: "24/7 Room Service", icon: <Coffee className="w-5 h-5" /> },
    { name: "Conference Hall", icon: <Users className="w-5 h-5" /> },
    { name: "Event Planning", icon: <Calendar className="w-5 h-5" /> },
    { name: "Airport Transfer", icon: <Car className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-resort-lighter pt-16">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-marcellus mb-4">
            Resort Facilities
          </h1>
          <p className="text-xl font-sans opacity-90 max-w-2xl mx-auto">
            Discover our world-class amenities designed to provide you with the ultimate luxury experience during your stay.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Amenities */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="font-marcellus text-resort-navy">
              Essential Amenities
            </CardTitle>
            <CardDescription className="font-sans">
              Everything you need for a comfortable stay
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 hover:bg-resort-light rounded-lg transition-colors">
                  <div className="p-3 bg-resort-blue rounded-full text-white mb-2">
                    {amenity.icon}
                  </div>
                  <span className="text-sm font-sans text-resort-dark">{amenity.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Facilities */}
        <div className="space-y-8">
          {facilities.map((facility) => (
            <Card key={facility.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-resort-blue">
                    {facility.category}
                  </Badge>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-resort-blue rounded-full text-white">
                      {facility.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-marcellus text-resort-navy">
                        {facility.name}
                      </h3>
                      <p className="text-sm text-resort-dark font-sans">
                        Timing: {facility.timing}
                      </p>
                    </div>
                  </div>

                  <p className="text-resort-dark font-sans mb-6 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-rubik font-semibold text-resort-navy mb-3">
                      Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {facility.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-resort-blue rounded-full"></div>
                          <span className="text-sm font-sans text-resort-dark">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-resort-blue hover:bg-resort-navy" asChild>
                    <a href="tel:+919425046824" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Book Now
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-resort-navy text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-marcellus mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="font-sans opacity-90 mb-6 max-w-2xl mx-auto">
              Book your stay at Ahilya Resort and enjoy access to all our premium facilities and services. 
              Our team is ready to make your experience unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-resort-blue hover:bg-white hover:text-resort-navy" asChild>
                <a href="tel:+919425046824" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call to Book
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-resort-navy">
                View Rooms
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Facilities;
