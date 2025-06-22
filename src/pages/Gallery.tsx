
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Upload } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      category: "rooms",
      title: "Luxury Suite",
      description: "Spacious suite with river view"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      category: "facilities",
      title: "Swimming Pool",
      description: "Infinity pool overlooking the river"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      category: "dining",
      title: "Riverside Restaurant",
      description: "Fine dining with scenic views"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop",
      category: "activities",
      title: "Cultural Performance",
      description: "Traditional Maheshwar dance"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      category: "spa",
      title: "Ayurvedic Spa",
      description: "Rejuvenating wellness treatments"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      category: "exterior",
      title: "Resort Grounds",
      description: "Beautiful landscaped gardens"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'dining', name: 'Dining' },
    { id: 'activities', name: 'Activities' },
    { id: 'spa', name: 'Spa' },
    { id: 'exterior', name: 'Exterior' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-resort-lighter pt-16">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-marcellus mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl font-sans opacity-90 max-w-2xl mx-auto">
            Discover the beauty of Ahilya Resort through our curated collection of images showcasing luxury, comfort, and natural splendor.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "bg-resort-blue hover:bg-resort-navy" : ""}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Upload Section */}
        <Card className="mb-8 bg-resort-light">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-rubik font-semibold text-resort-navy mb-2">
              Share Your Experience
            </h3>
            <p className="text-resort-dark font-sans mb-4">
              Upload your photos from your stay and share the beauty of Ahilya Resort with others.
            </p>
            <Button className="bg-resort-blue hover:bg-resort-navy">
              <Upload className="w-4 h-4 mr-2" />
              Upload Photos
            </Button>
          </CardContent>
        </Card>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-resort-navy">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
                <Badge className="absolute top-2 right-2 bg-resort-blue">
                  {categories.find(cat => cat.id === image.category)?.name}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-rubik font-semibold text-resort-navy mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-resort-dark font-sans">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-resort-dark font-sans">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
