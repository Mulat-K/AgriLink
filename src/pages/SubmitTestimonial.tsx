import { useState } from 'react';
import { UserRole, Region } from '@/types';
import { Send, CheckCircle, HelpCircle } from 'lucide-react';
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

const SubmitTestimonial = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    region: '',
    quote: '',
    photo: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-background">
        <div className="bg-card p-12 rounded-4xl shadow-elevated text-center max-w-md border border-border animate-scale-in">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Ameseginalehu!</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Your testimonial has been submitted. Our team will review it and it will appear on the site soon. 
            Thank you for being part of the AgriLink journey.
          </p>
          <Button 
            onClick={() => setIsSubmitted(false)}
            className="bg-primary text-primary-foreground shadow-elevated"
          >
            Submit Another
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-10 rounded-t-4xl shadow-elevated animate-fade-up">
          <h1 className="text-3xl font-heading font-bold mb-4">Share Your Experience</h1>
          <p className="text-primary-foreground/80 leading-relaxed">
            Are you a farmer, consumer, or partner in Addis Ababa? Tell us how AgriLink has impacted your business or daily life.
          </p>
        </div>

        {/* Form */}
        <div className="bg-card p-8 md:p-12 rounded-b-4xl shadow-elevated border-x border-b border-border animate-fade-up delay-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  type="text" 
                  required
                  placeholder="e.g. Abebe Bikila"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">I am a...</Label>
                <Select 
                  value={formData.role} 
                  onValueChange={(value) => setFormData({...formData, role: value})}
                >
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(UserRole).map(role => (
                      <SelectItem key={role} value={role}>{role}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Region / Area</Label>
              <Select 
                value={formData.region} 
                onValueChange={(value) => setFormData({...formData, region: value})}
              >
                <SelectTrigger id="region">
                  <SelectValue placeholder="Select your region" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(Region).map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="story">Your Story</Label>
              <Textarea 
                id="story"
                required
                rows={5}
                placeholder="What changes have you noticed since working with AgriLink?"
                value={formData.quote}
                onChange={e => setFormData({...formData, quote: e.target.value})}
              />
              <p className="text-xs text-muted-foreground mt-2 flex items-center">
                <HelpCircle className="w-3 h-3 mr-1" />
                Keep it under 300 words for the best visibility.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Photo (Optional)</Label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-border rounded-2xl hover:border-primary/50 transition-colors bg-muted/50">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-muted-foreground" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-muted-foreground justify-center">
                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                      <span>Upload a file</span>
                      <input 
                        type="file" 
                        className="sr-only" 
                        accept="image/*"
                        onChange={e => setFormData({...formData, photo: e.target.files ? e.target.files[0] : null})}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                  {formData.photo && (
                    <p className="text-xs text-primary font-bold mt-2">
                      File selected: {formData.photo.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground shadow-elevated"
              >
                Send My Testimonial <Send className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-6">
                By submitting, you agree to allow AgriLink to share your story on this website and marketing materials.
              </p>
            </div>
          </form>
        </div>

        {/* Support */}
        <div className="mt-12 text-center text-muted-foreground text-sm italic">
          <p>Having trouble with the form? Reach out to your local AgriLink Agent or call our toll-free help line at 8080.</p>
        </div>
      </div>
    </main>
  );
};

export default SubmitTestimonial;
