
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { resortInfo } from '@/data/resortData';

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
            <div className="h-96 bg-resort-light rounded-lg flex items-center justify-center">
              <p className="text-resort-dark font-sans">
                Google Maps integration would be embedded here
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
