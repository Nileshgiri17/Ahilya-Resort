
export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  images: string[];
  amenities: string[];
  description: string;
  maxGuests: number;
  size: string;
}

export interface RoomCategory {
  id: string;
  name: string;
  type: string;
  pricePerNight: number;
  image: string;
  amenities: string[];
  description: string;
  maxGuests: number;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

export interface GuestReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  images?: string[];
  helpfulCount: number;
}

export interface BookingPartner {
  name: string;
  logo: string;
  url: string;
}

export const rooms: Room[] = [
  {
    id: "deluxe-riverside",
    name: "Deluxe Riverside Suite",
    type: "Suite",
    price: 8500,
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
    ],
    amenities: ["River View", "King Bed", "Mini Bar", "Balcony", "AC", "WiFi"],
    description: "Luxurious suite with panoramic river views and traditional décor",
    maxGuests: 3,
    size: "450 sq ft"
  },
  {
    id: "heritage-room",
    name: "Heritage Room",
    type: "Standard",
    price: 6500,
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop"
    ],
    amenities: ["Garden View", "Queen Bed", "AC", "WiFi", "Tea/Coffee"],
    description: "Elegant room with traditional Maheshwar architecture",
    maxGuests: 2,
    size: "350 sq ft"
  },
  {
    id: "royal-villa",
    name: "Royal Villa",
    type: "Villa",
    price: 15000,
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
    ],
    amenities: ["Private Pool", "2 Bedrooms", "Living Room", "Kitchen", "Butler Service"],
    description: "Spacious villa with private amenities and royal treatment",
    maxGuests: 6,
    size: "1200 sq ft"
  }
];

export const roomCategories: RoomCategory[] = [
  {
    id: "deluxe-riverside",
    name: "Deluxe Riverside Suite",
    type: "Deluxe",
    pricePerNight: 8500,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    amenities: ["River View", "King Bed", "Mini Bar", "Balcony", "AC", "WiFi", "Room Service", "Tea/Coffee Maker"],
    description: "Luxurious suite with panoramic river views and traditional décor",
    maxGuests: 3
  },
  {
    id: "heritage-room",
    name: "Heritage Room",
    type: "Standard",
    pricePerNight: 6500,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
    amenities: ["Garden View", "Queen Bed", "AC", "WiFi", "Tea/Coffee", "Daily Housekeeping"],
    description: "Elegant room with traditional Maheshwar architecture",
    maxGuests: 2
  },
  {
    id: "royal-villa",
    name: "Royal Villa",
    type: "Villa",
    pricePerNight: 15000,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
    amenities: ["Private Pool", "2 Bedrooms", "Living Room", "Kitchen", "Butler Service", "Spa Access", "Garden View"],
    description: "Spacious villa with private amenities and royal treatment",
    maxGuests: 6
  },
  {
    id: "premium-suite",
    name: "Premium Suite",
    type: "Suite",
    pricePerNight: 12000,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    amenities: ["River View", "King Bed", "Sitting Area", "Mini Bar", "Balcony", "AC", "WiFi", "Butler Service"],
    description: "Elegant suite with premium amenities and stunning views",
    maxGuests: 4
  }
];

export const amenities: Amenity[] = [
  { id: "pool", name: "Swimming Pool", icon: "pool", description: "Outdoor swimming pool with river views" },
  { id: "spa", name: "Ayurvedic Spa", icon: "spa", description: "Traditional wellness treatments" },
  { id: "wifi", name: "Free WiFi", icon: "wifi", description: "High-speed internet throughout the resort" },
  { id: "parking", name: "Free Parking", icon: "circle-parking", description: "Complimentary parking for all guests" }
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Priya Sharma",
    rating: 5,
    comment: "Amazing stay! The riverside location is breathtaking and the staff is incredibly welcoming.",
    date: "2024-01-15",
    images: ["https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"]
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Perfect place for a family vacation. The cultural tours were enlightening.",
    date: "2024-01-10",
    images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"]
  },
  {
    id: "3",
    name: "Sarah Johnson",
    rating: 4,
    comment: "Beautiful resort with excellent amenities. The spa treatments were divine!",
    date: "2024-01-05"
  }
];

export const guestReviews: GuestReview[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    comment: "Amazing stay! The riverside location is breathtaking and the staff is incredibly welcoming. The rooms were spotless and the food was absolutely delicious. We enjoyed the cultural tours and the peaceful ambiance.",
    date: "January 15, 2024",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=64&h=64&fit=crop&crop=face",
    images: ["https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop"],
    helpfulCount: 12
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    comment: "Perfect place for a family vacation. The cultural tours were enlightening and the kids loved the swimming pool. The heritage room was beautifully decorated with traditional touches.",
    date: "January 10, 2024",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    images: ["https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"],
    helpfulCount: 8
  },
  {
    id: "3",
    name: "Sarah Johnson",
    location: "London, UK",
    rating: 4,
    comment: "Beautiful resort with excellent amenities. The spa treatments were divine and the riverside dining was unforgettable. The only minor issue was the WiFi speed in some areas.",
    date: "January 5, 2024",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    helpfulCount: 15
  },
  {
    id: "4",
    name: "Amit Patel",
    location: "Ahmedabad, India",
    rating: 5,
    comment: "Exceptional hospitality and stunning views! The royal villa exceeded our expectations. Perfect for our anniversary celebration. The butler service was outstanding.",
    date: "December 28, 2023",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    helpfulCount: 9
  },
  {
    id: "5",
    name: "Lisa Chen",
    location: "Singapore",
    rating: 5,
    comment: "A truly magical experience! The resort perfectly captures the essence of Maheshwar's heritage. The food was authentic and delicious, and the staff went above and beyond.",
    date: "December 20, 2023",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
    images: ["https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"],
    helpfulCount: 11
  },
  {
    id: "6",
    name: "Vikram Singh",
    location: "Jaipur, India",
    rating: 4,
    comment: "Great location and beautiful architecture. The heritage room was comfortable and well-maintained. The cultural tours provided great insights into local history.",
    date: "December 15, 2023",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    helpfulCount: 6
  }
];

export const bookingPartners: BookingPartner[] = [
  { name: "Booking.com", logo: "/api/placeholder/120/40", url: "https://booking.com" },
  { name: "GoIbibo", logo: "/api/placeholder/120/40", url: "https://goibibo.com" },
  { name: "MakeMyTrip", logo: "/api/placeholder/120/40", url: "https://makemytrip.com" }
];

export const resortInfo = {
  name: "Ahilya Resort",
  tagline: "Discover Peace & Luxury at Ahilya Resort, Maheshwar",
  phone: "+91 9425046824",
  email: "ahilyaresort@gmail.com",
  address: "Ahilya Resort, road, Mandleshwar, Maheshwar, Tulya, Madhya Pradesh 451224",
  coordinates: { lat: 22.1760, lng: 75.5880 }
};
