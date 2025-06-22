
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, Phone, ExternalLink } from 'lucide-react';
import { roomCategories } from '@/data/resortData';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'all'
  });

  const filteredRooms = roomCategories.filter(room => 
    searchParams.roomType === 'all' || room.type.toLowerCase() === searchParams.roomType
  );

  return (
    <div className="min-h-screen bg-resort-lighter pt-16">
      {/* Search Header */}
      <div className="bg-resort-navy text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-marcellus text-center mb-8">
            Search & Book Your Stay
          </h1>
          
          {/* Search Form */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="checkin" className="text-resort-dark">Check In</Label>
                  <Input
                    id="checkin"
                    type="date"
                    value={searchParams.checkIn}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, checkIn: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="checkout" className="text-resort-dark">Check Out</Label>
                  <Input
                    id="checkout"
                    type="date"
                    value={searchParams.checkOut}
                    onChange={(e) => setSearchParams(prev => ({ ...prev, checkOut: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="guests" className="text-resort-dark">Guests</Label>
                  <Select value={searchParams.guests} onValueChange={(value) => setSearchParams(prev => ({ ...prev, guests: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="roomtype" className="text-resort-dark">Room Type</Label>
                  <Select value={searchParams.roomType} onValueChange={(value) => setSearchParams(prev => ({ ...prev, roomType: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="deluxe">Deluxe</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Search Results */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-marcellus text-resort-navy mb-8">
          Available Rooms ({filteredRooms.length})
        </h2>

        <div className="space-y-6">
          {filteredRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-marcellus text-resort-navy mb-2">
                        {room.name}
                      </h3>
                      <p className="text-resort-dark font-sans mb-2">
                        {room.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-resort-dark">
                        <Users className="w-4 h-4" />
                        <span>Up to {room.maxGuests} guests</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-rubik font-bold text-resort-blue">
                        ₹{room.pricePerNight}
                      </div>
                      <div className="text-sm text-resort-dark">per night</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    <Button className="bg-resort-blue hover:bg-resort-navy" asChild>
                      <a href="tel:+919425046824" className="flex items-center justify-center gap-2">
                        <Phone className="w-4 h-4" />
                        Book by Call
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://booking.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Booking.com
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://goibibo.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        GoIbibo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://makemytrip.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        MakeMyTrip
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
