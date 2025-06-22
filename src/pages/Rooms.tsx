
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Wifi, Car, Coffee, Phone } from 'lucide-react';
import { roomCategories } from '@/data/resortData';

const Rooms = () => {
  return (
    <div className="min-h-screen bg-resort-lighter">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-20 mt-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-marcellus mb-4 animate-slide-in">
            Luxury Rooms & Suites
          </h1>
          <p className="text-xl font-sans opacity-90 max-w-2xl mx-auto animate-fade-in">
            Choose from our carefully designed accommodations, each offering comfort and elegance with stunning riverside views.
          </p>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomCategories.map((room, index) => (
            <Card 
              key={room.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-500 hover-scale group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <Badge className="absolute top-4 left-4 bg-resort-blue animate-scale-in">
                  {room.type}
                </Badge>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <CardHeader className="transition-all duration-300 group-hover:bg-resort-light">
                <CardTitle className="font-marcellus text-resort-navy transition-colors duration-300 group-hover:text-resort-blue">
                  {room.name}
                </CardTitle>
                <CardDescription className="font-sans">
                  {room.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-resort-dark">
                    <Users className="w-4 h-4 text-resort-blue" />
                    <span>Up to {room.maxGuests} guests</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs transition-all duration-300 hover:bg-resort-blue hover:text-white"
                      >
                        {amenity}
                      </Badge>
                    ))}
                    {room.amenities.length > 3 && (
                      <Badge 
                        variant="outline" 
                        className="text-xs transition-all duration-300 hover:bg-resort-blue hover:text-white"
                      >
                        +{room.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <div>
                      <span className="text-2xl font-rubik font-bold text-resort-blue">
                        ₹{room.pricePerNight}
                      </span>
                      <span className="text-sm text-resort-dark">/night</span>
                    </div>
                    <div className="space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="transition-all duration-300 hover:bg-resort-blue hover:text-white hover-scale" 
                        asChild
                      >
                        <Link to={`/rooms/${room.id}`}>View Details</Link>
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-resort-blue hover:bg-resort-navy transition-all duration-300 hover-scale" 
                        asChild
                      >
                        <a href="tel:+919425046824">
                          <Phone className="w-4 h-4 mr-1" />
                          Book
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
