
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Mail, Phone } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-resort-lighter pt-16">
      {/* Hero Section */}
      <div className="bg-resort-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-marcellus mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl font-sans opacity-90 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Last Updated */}
        <div className="mb-8">
          <Badge className="bg-resort-blue">
            Last Updated: December 2024
          </Badge>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy flex items-center gap-3">
              <Shield className="w-6 h-6 text-resort-blue" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-sans text-resort-dark leading-relaxed">
              Ahilya Resort ("we," "our," or "us") is committed to protecting your privacy and ensuring the 
              security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our resort, use our services, or interact with our website.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy flex items-center gap-3">
              <Eye className="w-6 h-6 text-resort-blue" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-rubik font-semibold text-resort-navy mb-3">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 font-sans text-resort-dark">
                <li>Name, address, phone number, and email address</li>
                <li>Government-issued identification for check-in</li>
                <li>Payment and billing information</li>
                <li>Special requests and preferences</li>
                <li>Emergency contact information</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-rubik font-semibold text-resort-navy mb-3">Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 font-sans text-resort-dark">
                <li>Website browsing patterns and preferences</li>
                <li>Device information and IP addresses</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Communication preferences and history</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="font-rubik font-semibold text-resort-navy mb-3">Service Information</h3>
              <ul className="list-disc list-inside space-y-2 font-sans text-resort-dark">
                <li>Reservation and stay history</li>
                <li>Facility usage and preferences</li>
                <li>Guest feedback and reviews</li>
                <li>Photography and video (with consent)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy">
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 font-sans text-resort-dark">
              <li>Process reservations and provide accommodation services</li>
              <li>Communicate about your stay and respond to inquiries</li>
              <li>Personalize your experience and improve our services</li>
              <li>Process payments and maintain financial records</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Send promotional materials (with your consent)</li>
              <li>Ensure the safety and security of guests and property</li>
              <li>Analyze usage patterns to improve our website and services</li>
            </ul>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy">
              Information Sharing and Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-sans text-resort-dark leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            
            <ul className="list-disc list-inside space-y-2 font-sans text-resort-dark">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
              <li><strong>Emergency Situations:</strong> To protect the safety of guests, staff, or the public</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy flex items-center gap-3">
              <Lock className="w-6 h-6 text-resort-blue" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-sans text-resort-dark leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            
            <ul className="list-disc list-inside space-y-2 font-sans text-resort-dark">
              <li>Encryption of sensitive data during transmission and storage</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and employee training programs</li>
              <li>Secure payment processing systems</li>
              <li>Regular data backup and recovery procedures</li>
            </ul>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy">
              Your Rights and Choices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-sans text-resort-dark leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            
            <ul className="list-disc list-inside space-y-2 font-sans text-resort-dark">
              <li><strong>Access:</strong> Request access to your personal information we hold</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request a copy of your information in a structured format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Restrict Processing:</strong> Request limitation of how we use your information</li>
            </ul>
          </CardContent>
        </Card>

        {/* Cookies Policy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy">
              Cookies and Tracking Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-sans text-resort-dark leading-relaxed mb-4">
              Our website uses cookies and similar technologies to enhance your browsing experience, analyze 
              website traffic, and personalize content. You can control cookie settings through your browser preferences.
            </p>
            
            <div className="space-y-3">
              <div>
                <strong className="text-resort-navy">Essential Cookies:</strong>
                <span className="font-sans text-resort-dark"> Required for basic website functionality</span>
              </div>
              <div>
                <strong className="text-resort-navy">Analytics Cookies:</strong>
                <span className="font-sans text-resort-dark"> Help us understand how visitors use our website</span>
              </div>
              <div>
                <strong className="text-resort-navy">Marketing Cookies:</strong>
                <span className="font-sans text-resort-dark"> Used to deliver relevant advertisements</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy">
              Contact Us
            </CardTitle>
            <CardDescription className="font-sans">
              For questions about this Privacy Policy or to exercise your rights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-resort-blue" />
                <span className="font-sans text-resort-dark">ahilyaresort@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-resort-blue" />
                <span className="font-sans text-resort-dark">+91 9425046824</span>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-resort-blue mt-1" />
                <div>
                  <p className="font-sans text-resort-dark">Data Protection Officer</p>
                  <p className="font-sans text-resort-dark text-sm">
                    Ahilya Resort, Mandleshwar, Maheshwar, Tulya, Madhya Pradesh 451224
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Policy */}
        <Card>
          <CardHeader>
            <CardTitle className="font-marcellus text-resort-navy">
              Changes to This Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-sans text-resort-dark leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              for other operational, legal, or regulatory reasons. We will notify you of any material changes 
              by posting the updated policy on our website and updating the "Last Updated" date. We encourage 
              you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
