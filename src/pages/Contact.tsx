
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar, ExternalLink } from 'lucide-react';
import { resortInfo, bookingPartners } from '@/data/resortData';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-resort-lighter pt-16">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-marcellus mb-4">
            Contact Us
          </h1>
          <p className="text-xl font-sans opacity-90 max-w-2xl mx-auto">
            Get in touch with us for reservations, inquiries, or any assistance you need for your perfect getaway.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-marcellus text-resort-navy mb-6">
                Get in Touch
              </h2>
              <p className="text-resort-dark font-sans leading-relaxed">
                We're here to help make your stay at Ahilya Resort unforgettable. Reach out to us for reservations, 
                special requests, or any questions about our facilities and services.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-resort-blue rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-rubik font-semibold text-resort-navy mb-2">
                        Phone
                      </h3>
                      <a 
                        href="tel:+919425046824" 
                        className="text-resort-dark font-sans hover:text-resort-blue transition-colors"
                      >
                        {resortInfo.phone}
                      </a>
                      <p className="text-sm text-resort-dark mt-1">
                        Available 24/7 for reservations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-resort-blue rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-rubik font-semibold text-resort-navy mb-2">
                        Email
                      </h3>
                      <a 
                        href="mailto:ahilyaresort@gmail.com" 
                        className="text-resort-dark font-sans hover:text-resort-blue transition-colors"
                      >
                        {resortInfo.email}
                      </a>
                      <p className="text-sm text-resort-dark mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-resort-blue rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-rubik font-semibold text-resort-navy mb-2">
                        Address
                      </h3>
                      <p className="text-resort-dark font-sans leading-relaxed">
                        {resortInfo.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-resort-blue rounded-full">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-rubik font-semibold text-resort-navy mb-2">
                        Business Hours
                      </h3>
                      <div className="text-resort-dark font-sans space-y-1">
                        <p>Reception: 24/7</p>
                        <p>Restaurant: 7:00 AM - 11:00 PM</p>
                        <p>Spa: 8:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full bg-resort-blue hover:bg-resort-navy" asChild>
                <a href="tel:+919425046824" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now for Instant Booking
                </a>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href="https://wa.me/919425046824" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </Button>
              <Button variant="outline" className="w-full border-resort-blue text-resort-blue hover:bg-resort-blue hover:text-white" asChild>
                <Link to="/search" className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Check Availability
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-marcellus text-resort-navy">
                Send us a Message
              </CardTitle>
              <CardDescription className="font-sans">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-resort-blue hover:bg-resort-navy">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* How to Reach Us */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy">
              How to Reach Us
            </CardTitle>
            <CardDescription className="font-sans">
              Easy access from major transportation hubs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">✈️</div>
                  <div>
                    <h4 className="font-rubik font-semibold text-resort-navy mb-2">
                      From Devi Ahilya Bai Holkar Airport, Indore
                    </h4>
                    <p className="text-resort-dark font-sans mb-2 font-medium">By car / taxi</p>
                    <ul className="text-resort-dark font-sans space-y-1 text-sm">
                      <li>• Devi Ahilya Bai Holkar Airport is located approximately 90 km from Ahilya Resort.</li>
                      <li>• The drive takes around 2.5–3 hours, offering a comfortable journey through scenic countryside routes.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🚆</div>
                  <div>
                    <h4 className="font-rubik font-semibold text-resort-navy mb-2">
                      From Indore Junction Railway Station
                    </h4>
                    <p className="text-resort-dark font-sans mb-2 font-medium">By car / taxi</p>
                    <ul className="text-resort-dark font-sans space-y-1 text-sm">
                      <li>• Indore Junction is about 95 km from the resort.</li>
                      <li>• Guests can reach the property in around 3 hours via a smooth road journey.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Map Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy">
              Our Location
            </CardTitle>
            <CardDescription className="font-sans">
              Find us on the banks of the sacred Narmada River in historic Maheshwar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1014.0965675730777!2d75.6149614887513!3d22.1779981235472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396265079d243ee9%3A0xfc93716a8dd1ae52!2sAhilya%20Resort!5e0!3m2!1sen!2sin!4v1767513525578!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ahilya Resort Location"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
