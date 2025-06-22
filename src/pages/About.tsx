
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Users, MapPin, Calendar, Phone } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence Award",
      description: "Recognized for outstanding hospitality"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Guest Satisfaction",
      description: "98% positive guest reviews"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Local Community",
      description: "Supporting local artisans and culture"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "Ahilya Resort was established with a vision to showcase the heritage of Maheshwar while providing luxury accommodation."
    },
    {
      year: "2019",
      title: "Grand Opening",
      description: "Opened our doors to guests with 20 luxury rooms and suites, immediately establishing ourselves as Maheshwar's premier resort."
    },
    {
      year: "2020",
      title: "Spa Launch",
      description: "Introduced our Ayurvedic spa center, offering traditional wellness treatments using authentic local herbs and practices."
    },
    {
      year: "2021",
      title: "Cultural Programs",
      description: "Launched our cultural tour programs, partnering with local artisans and temple authorities to offer authentic experiences."
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Implemented eco-friendly practices and renewable energy systems, reducing our environmental footprint by 40%."
    },
    {
      year: "2024",
      title: "Excellence Recognition",
      description: "Received multiple awards for hospitality excellence and contribution to sustainable tourism in Madhya Pradesh."
    }
  ];

  return (
    <div className="min-h-screen bg-resort-lighter pt-16">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-marcellus mb-4">
            About Ahilya Resort
          </h1>
          <p className="text-xl font-sans opacity-90 max-w-2xl mx-auto">
            Discover the story behind Maheshwar's premier luxury resort, where heritage meets modern hospitality.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-marcellus text-resort-navy">
              Our Story
            </h2>
            <p className="text-resort-dark font-sans leading-relaxed">
              Nestled on the sacred banks of the Narmada River, Ahilya Resort stands as a testament to the 
              timeless beauty and rich cultural heritage of Maheshwar. Named after the legendary Queen Ahilyabai Holkar, 
              who transformed this historic town into a center of art, culture, and spirituality, our resort embodies 
              her vision of harmonious living.
            </p>
            <p className="text-resort-dark font-sans leading-relaxed">
              Since our inception, we have been committed to providing guests with an authentic experience that 
              celebrates the essence of Madhya Pradesh while offering world-class luxury and comfort. Every corner 
              of our resort tells a story, from the traditional architecture that pays homage to local craftsmanship 
              to the carefully curated cultural programs that connect our guests with the living heritage of Maheshwar.
            </p>
            <p className="text-resort-dark font-sans leading-relaxed">
              Our team of dedicated hospitality professionals works tirelessly to ensure that every guest experiences 
              the warmth and richness of Indian hospitality, while our partnerships with local artisans and cultural 
              practitioners help preserve and promote the unique traditions of this historic region.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
              alt="Ahilya Resort Heritage"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <Badge className="absolute top-4 left-4 bg-resort-blue text-white">
              Est. 2018
            </Badge>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-resort-light">
            <CardHeader>
              <CardTitle className="font-marcellus text-resort-navy flex items-center gap-3">
                <Heart className="w-6 h-6 text-resort-blue" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-resort-dark leading-relaxed">
                To be the premier destination resort in Central India, where guests experience the perfect blend 
                of luxury, culture, and sustainability while contributing to the preservation and celebration of 
                Maheshwar's rich heritage.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-resort-light">
            <CardHeader>
              <CardTitle className="font-marcellus text-resort-navy flex items-center gap-3">
                <MapPin className="w-6 h-6 text-resort-blue" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-sans text-resort-dark leading-relaxed">
                To provide exceptional hospitality experiences that showcase the cultural richness of Maheshwar 
                while supporting local communities, preserving traditional arts, and maintaining the highest 
                standards of sustainable tourism practices.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="font-marcellus text-resort-navy">
              Our Achievements
            </CardTitle>
            <CardDescription className="font-sans">
              Recognition for our commitment to excellence and community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-resort-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white">
                    {achievement.icon}
                  </div>
                  <h3 className="font-rubik font-semibold text-resort-navy mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-sans text-resort-dark">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-marcellus text-resort-navy text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-resort-blue rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-resort-navy">
                          {event.year}
                        </Badge>
                        <h3 className="text-xl font-rubik font-semibold text-resort-navy">
                          {event.title}
                        </h3>
                      </div>
                      <p className="font-sans text-resort-dark leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-resort-navy text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-marcellus mb-4">
              Experience Our Heritage
            </h3>
            <p className="font-sans opacity-90 mb-6 max-w-2xl mx-auto">
              Join us at Ahilya Resort and become part of our continuing story. Experience the perfect blend 
              of luxury, culture, and warm hospitality that defines our unique approach to tourism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-resort-blue hover:bg-white hover:text-resort-navy" asChild>
                <a href="tel:+919425046824" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Book Your Stay
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-resort-navy">
                Explore Our Facilities
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
