import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { UserRole, Region } from '@/types';
import { TESTIMONIALS } from '@/constants';
import { Quote, Filter, MapPin, User as UserIcon, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TestimonialsPage = () => {
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');

  const filteredTestimonials = useMemo(() => {
    return TESTIMONIALS.filter(t => {
      const roleMatch = roleFilter === 'all' || t.role === roleFilter;
      const regionMatch = regionFilter === 'all' || t.region === regionFilter;
      return roleMatch && regionMatch;
    });
  }, [roleFilter, regionFilter]);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-up">
            Success Stories from <span className="text-secondary">Across Ethiopia</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-100">
            Real voices from the smallholder farmers, urban consumers, and local partners who are part of the AgriLink community.
          </p>
        </div>
      </section>

      <div className="container-main -mt-10 pb-20">
        {/* Filters */}
        <div className="bg-card rounded-3xl shadow-elevated p-6 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between border border-border animate-scale-in">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="flex items-center space-x-3">
              <UserIcon className="w-5 h-5 text-primary" />
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="All Roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  {Object.values(UserRole).map(role => (
                    <SelectItem key={role} value={role}>{role}s</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {Object.values(Region).map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="text-muted-foreground text-sm font-medium">
            Showing {filteredTestimonials.length} {filteredTestimonials.length === 1 ? 'story' : 'stories'}
          </div>
        </div>

        {/* Testimonial Grid */}
        {filteredTestimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((t, index) => (
              <article 
                key={t.id} 
                className="bg-card rounded-3xl overflow-hidden shadow-soft hover-lift border border-border group flex flex-col animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-tight shadow-soft">
                      {t.role}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <Quote className="w-10 h-10 text-muted mb-4" />
                  <p className="text-foreground italic leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                  <div className="flex items-center justify-between border-t border-border pt-6">
                    <div>
                      <h4 className="font-heading font-bold text-foreground">{t.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center mt-1">
                        <MapPin className="w-3 h-3 mr-1" /> {t.region}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(t.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="bg-muted inline-block p-6 rounded-full mb-6">
              <Filter className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">No testimonials found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your selection or view all stories.</p>
            <Button 
              variant="outline"
              onClick={() => { setRoleFilter('all'); setRegionFilter('all'); }}
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-muted rounded-4xl p-12 border border-border">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Are you an AgriLink partner?</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We value your feedback. Help us build trust by sharing your experience with the community.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-elevated">
              <Link to="/submit-testimonial">
                Submit My Testimonial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialsPage;
