
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Users, ArrowLeft, Wifi, Car, Coffee, Bath, Bed, Eye } from 'lucide-react';
import { roomCategories } from '@/data/resortData';

const RoomDetails = () => {
  const { id } = useParams();
  const room = roomCategories.find(r => r.id === id);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-marcellus text-resort-navy mb-4">Room Not Found</h1>
          <Button asChild>
            <Link to="/rooms">Back to Rooms</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-resort-lighter pt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="outline" className="mb-6" asChild>
          <Link to="/rooms">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rooms
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-resort-blue">
                {room.type}
              </Badge>
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-marcellus text-resort-navy mb-2">
                {room.name}
              </h1>
              <p className="text-lg font-sans text-resort-dark">
                {room.description}
              </p>
            </div>

            {/* Pricing */}
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-3xl font-rubik font-bold text-resort-blue">
                      ₹{room.pricePerNight}
                    </span>
                    <span className="text-lg text-resort-dark">/night</span>
                  </div>
                  <div className="flex items-center gap-2 text-resort-dark">
                    <Users className="w-5 h-5" />
                    <span>Up to {room.maxGuests} guests</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-resort-blue hover:bg-resort-navy" asChild>
                    <a href="tel:+919425046824" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call to Book - +91 9425046824
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/search">Check Availability</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <div>
              <h3 className="text-xl font-rubik font-semibold text-resort-navy mb-4">
                Room Amenities
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-resort-blue rounded-full"></div>
                    <span className="font-sans text-resort-dark">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
