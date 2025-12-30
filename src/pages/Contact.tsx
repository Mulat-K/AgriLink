import { useState } from 'react';
import { Mail, Phone, MapPin, Building2, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/",
    name: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/",
    name: "Facebook",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/",
    name: "X",
  },
  {
    icon: FaTiktok,
    link: "https://www.tiktok.com/",
    name: "TikTok",
  },
];


  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-up">
            Partner with <span className="text-secondary">AgriLink</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-100">
            Whether you're an investor, a development partner, or a logistics provider, let's build the future of Ethiopia together.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted -mt-12">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 animate-fade-up">
              <div className="bg-card p-10 rounded-4xl shadow-soft border border-border h-full">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-10">Our Office</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-muted p-3 rounded-xl mr-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Addis Ababa</h4>
                      <p className="text-muted-foreground text-sm">Bole Sub-City, Road 4<br />Ethiopia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-muted p-3 rounded-xl mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Phone</h4>
                      <a
                        href="tel:+251988880085"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        +251 98 888 0085
                      </a>
                      <p className="text-muted-foreground text-sm">Mon - Fri, 8:30 - 17:30</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-muted p-3 rounded-xl mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">Email</h4>
                      <a
                        href="mailto:agrilinkc@gmail.com"
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        agrilinkc@gmail.com
                      </a>
                    </div>
                  </div>

                </div>

                <div className="mt-12 pt-12 border-t border-border">
                  <h4 className="font-bold text-foreground mb-4">Follow Us</h4>

                  <div className="flex space-x-3">
                    {socialLinks.map(({ icon: Icon, link, name }) => (
                      <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="w-10 h-10 bg-muted rounded-xl
                                  hover:bg-secondary hover:text-secondary-foreground
                                  transition-colors flex items-center justify-center
                                  text-muted-foreground"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 animate-fade-up delay-100">
              <div className="bg-card p-10 md:p-16 rounded-4xl shadow-elevated border border-border relative overflow-hidden">
                {submitted ? (
                  <div className="text-center py-20 animate-scale-in">
                    <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Message Received</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto">
                      Our partnership team will review your inquiry and get back to you within 2 business days.
                    </p>
                    <Button 
                      variant="link"
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold"
                    >
                      Send another inquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Inquiry Form</h2>
                      <p className="text-muted-foreground">Tell us how you would like to work with AgriLink.</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Name</Label>
                          <Input id="contact-name" type="text" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="organization">Organization</Label>
                          <Input id="organization" type="text" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Email</Label>
                          <Input id="contact-email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contact-phone">Phone</Label>
                          <Input id="contact-phone" type="tel" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="interest">I'm interested in...</Label>
                        <Select>
                          <SelectTrigger id="interest">
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="investment">Investment Opportunities</SelectItem>
                            <SelectItem value="logistics">Logistics Partnership</SelectItem>
                            <SelectItem value="buyer">Becoming a Buyer</SelectItem>
                            <SelectItem value="technology">Technology Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message"
                          rows={5} 
                          placeholder="Tell us about your interest in AgriLink..."
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full bg-primary text-primary-foreground shadow-elevated"
                      >
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="py-20 bg-background">
        <div className="container-main text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Our Growing Network
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We collaborate with government bodies, development agencies, and private sector partners to create a more equitable food system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Agricultural Transformation Institute', 'Ministry of Agriculture', 'Addis Ababa City Admin', 'Ethiopian Investment Holdings'].map((partner) => (
              <div 
                key={partner}
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-2xl shadow-soft"
              >
                <Building2 className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
