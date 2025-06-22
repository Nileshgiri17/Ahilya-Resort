
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, CreditCard, Users, AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-resort-lighter pt-16 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="outline" className="mb-6 hover-scale" asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-marcellus text-resort-navy mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg font-sans text-resort-dark max-w-2xl mx-auto">
            Please read these terms carefully before making your reservation at Ahilya Resort.
          </p>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Booking Policy */}
          <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-marcellus text-resort-navy">
                <Calendar className="w-6 h-6 text-resort-blue" />
                Booking Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-sans text-resort-dark">
              <div className="space-y-3">
                <h4 className="font-rubik font-semibold">Reservation Requirements</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All bookings must be confirmed with a valid government-issued ID</li>
                  <li>Check-in time: 2:00 PM | Check-out time: 12:00 PM</li>
                  <li>Early check-in/late check-out subject to availability and charges</li>
                  <li>Maximum occupancy per room as specified in room details</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-rubik font-semibold">Payment Terms</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>50% advance payment required to confirm booking</li>
                  <li>Balance payment due at check-in</li>
                  <li>All prices are subject to applicable taxes</li>
                  <li>Payments accepted: Cash, UPI, Cards (Visa/MasterCard)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation Policy */}
          <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-marcellus text-resort-navy">
                <CreditCard className="w-6 h-6 text-resort-blue" />
                Cancellation Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-sans text-resort-dark">
              <div className="space-y-3">
                <h4 className="font-rubik font-semibold">Cancellation Charges</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>15+ days before arrival:</strong> No cancellation charges</li>
                  <li><strong>7-14 days before arrival:</strong> 25% of total booking amount</li>
                  <li><strong>3-6 days before arrival:</strong> 50% of total booking amount</li>
                  <li><strong>0-2 days before arrival:</strong> 100% of total booking amount</li>
                  <li><strong>No-show:</strong> 100% of total booking amount</li>
                </ul>
              </div>
              <div className="bg-resort-light p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> Refunds will be processed within 7-10 business days to the original payment method.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Guest Responsibilities */}
          <Card className="hover:shadow-lg transition-all duration-300 hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-marcellus text-resort-navy">
                <Users className="w-6 h-6 text-resort-blue" />
                Guest Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-sans text-resort-dark">
              <div className="space-y-3">
                <h4 className="font-rubik font-semibold">During Your Stay</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Guests are responsible for their personal belongings and valuables</li>
                  <li>Any damage to resort property will be charged separately</li>
                  <li>Smoking is prohibited in rooms and common areas</li>
                  <li>Pets are not allowed unless pre-approved</li>
                  <li>Visitors must be registered at reception</li>
                  <li>Pool and spa timings must be adhered to</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-rubik font-semibold">Conduct Guidelines</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintain noise levels to ensure peaceful environment</li>
                  <li>Respect other guests and resort staff</li>
                  <li>Follow all safety instructions and guidelines</li>
                  <li>Inappropriate behavior may result in immediate eviction</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Important Notices */}
          <Card className="hover:shadow-lg transition-all duration-300 hover-scale border-l-4 border-l-resort-gold">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-marcellus text-resort-navy">
                <AlertTriangle className="w-6 h-6 text-resort-gold" />
                Important Notices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-sans text-resort-dark">
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Resort reserves the right to refuse service without prior notice</li>
                  <li>Management is not responsible for loss/theft of personal belongings</li>
                  <li>All disputes subject to Maheshwar jurisdiction only</li>
                  <li>Force majeure events may affect booking confirmations</li>
                  <li>These terms are subject to change without prior notice</li>
                </ul>
              </div>
              <div className="bg-resort-light p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Contact:</strong> For any queries regarding these terms, please contact us at 
                  <a href="tel:+919425046824" className="text-resort-blue hover:underline ml-1">
                    +91 9425046824
                  </a> or email 
                  <a href="mailto:ahilyaresort@gmail.com" className="text-resort-blue hover:underline ml-1">
                    ahilyaresort@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Agreement */}
          <Card className="bg-resort-navy text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-rubik font-semibold mb-4">Agreement</h3>
              <p className="font-sans mb-6">
                By making a reservation at Ahilya Resort, you acknowledge that you have read, 
                understood, and agree to be bound by these terms and conditions.
              </p>
              <Button className="bg-resort-blue hover:bg-white hover:text-resort-navy transition-colors" asChild>
                <Link to="/contact">Contact Us for Booking</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;
