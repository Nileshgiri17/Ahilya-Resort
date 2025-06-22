
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, ThumbsUp, MessageSquare } from 'lucide-react';
import { guestReviews } from '@/data/resortData';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');

  const ratingFilters = [
    { id: 'all', name: 'All Reviews' },
    { id: '5', name: '5 Stars' },
    { id: '4', name: '4 Stars' },
    { id: '3', name: '3 Stars' }
  ];

  const filteredReviews = selectedRating === 'all' 
    ? guestReviews 
    : guestReviews.filter(review => review.rating.toString() === selectedRating);

  const averageRating = guestReviews.reduce((acc, review) => acc + review.rating, 0) / guestReviews.length;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-resort-gold text-resort-gold' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-resort-lighter pt-16">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-marcellus mb-4">
            Guest Reviews
          </h1>
          <p className="text-xl font-sans opacity-90 max-w-2xl mx-auto">
            Read what our guests say about their unforgettable experiences at Ahilya Resort.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Review Summary */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-rubik font-bold text-resort-blue mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <p className="text-resort-dark font-sans">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-rubik font-bold text-resort-blue mb-2">
                  {guestReviews.length}
                </div>
                <p className="text-resort-dark font-sans">Total Reviews</p>
              </div>
              <div>
                <div className="text-4xl font-rubik font-bold text-resort-blue mb-2">
                  98%
                </div>
                <p className="text-resort-dark font-sans">Would Recommend</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rating Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {ratingFilters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedRating === filter.id ? "default" : "outline"}
              onClick={() => setSelectedRating(filter.id)}
              className={selectedRating === filter.id ? "bg-resort-blue hover:bg-resort-navy" : ""}
            >
              {filter.name}
            </Button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="font-rubik text-resort-navy text-lg">
                        {review.name}
                      </CardTitle>
                      <CardDescription className="font-sans">
                        {review.location} • {review.date}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-resort-blue">
                    Verified Stay
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  {renderStars(review.rating)}
                  <span className="text-sm text-resort-dark font-sans ml-2">
                    {review.rating}/5
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-resort-dark leading-relaxed mb-4">
                  {review.comment}
                </p>
                
                {review.images && review.images.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Review image ${index + 1}`}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 text-sm text-resort-dark">
                  <button className="flex items-center gap-1 hover:text-resort-blue transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    Helpful ({review.helpfulCount})
                  </button>
                  <button className="flex items-center gap-1 hover:text-resort-blue transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    Reply
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-resort-dark font-sans">No reviews found for this rating.</p>
          </div>
        )}

        {/* Write Review CTA */}
        <Card className="mt-12 bg-resort-light">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-marcellus text-resort-navy mb-4">
              Share Your Experience
            </h3>
            <p className="text-resort-dark font-sans mb-6">
              Have you stayed with us? We'd love to hear about your experience at Ahilya Resort.
            </p>
            <Button className="bg-resort-blue hover:bg-resort-navy">
              Write a Review
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
