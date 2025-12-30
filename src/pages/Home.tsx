import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Map, Truck, Users, Leaf, TrendingUp, ArrowRight } from 'lucide-react';
import { IMPACT_STATS, TESTIMONIALS } from '@/constants';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-farm.jpg';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Ethiopian Farmland at Golden Hour" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-main py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground font-bold text-xs rounded-full mb-6 animate-fade-up shadow-glow">
              <span className="w-2 h-2 bg-secondary-foreground rounded-full mr-2 animate-pulse"></span>
              PHASE I: ADDIS ABABA & SURROUNDING REGIONS
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-up delay-100">
              Direct from Farm,{' '}
              <span className="text-secondary">Fair for All.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed animate-fade-up delay-200">
              AgriLink bridges the gap between Ethiopian smallholder farmers and urban consumers. 
              We ensure farmers get a fair price while providing families in Addis Ababa with fresh, traceable produce.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow group">
                <Link to="/testimonials">
                  Hear from Ethiopian Farmers
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 backdrop-blur-sm">
                <Link to="/contact">
                  Partner With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our Model for Ethiopia
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Map className="w-10 h-10" />,
                title: "Regional Sourcing",
                description: "We work directly with farmers in Oromia, Amhara, and Sidama, ensuring production meets urban demand."
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Fair Pricing",
                description: "Prices are strictly aligned with government reference prices, eliminating exploitative middlemen."
              },
              {
                icon: <Truck className="w-10 h-10" />,
                title: "Traceable Logistics",
                description: "A transparent cold chain from farm gates in rural zones straight to distribution hubs in Addis Ababa."
              }
            ].map((step, i) => (
              <div 
                key={i} 
                className="bg-card p-8 rounded-3xl shadow-soft border border-border hover-lift group"
              >
                <div className="bg-muted p-4 rounded-2xl w-fit mb-6 text-primary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicator */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-main text-center">
          <p className="text-sm opacity-70 uppercase tracking-widest font-semibold mb-3">Government Aligned</p>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 italic max-w-3xl mx-auto">
            "Supporting Ethiopia's Homegrown Economic Reform Agenda"
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {['Agricultural Transformation Institute', 'Ministry of Agriculture', 'Addis Ababa City Admin'].map((partner, i) => (
              <div 
                key={i} 
                className="font-semibold text-sm md:text-base border-2 border-primary-foreground/20 px-5 py-3 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Teaser */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 leading-tight">
                Digital Infrastructure for <span className="text-secondary">Local Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                By leveraging simple SMS technology and community agents, we reach farmers even in areas with limited internet access. Our platform doesn't just sell produce; it builds economic resilience.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {IMPACT_STATS.slice(0, 2).map((stat, i) => (
                  <div key={i} className="border-l-4 border-secondary pl-4">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Link to="/impact" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors group">
                View detailed impact report 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop" 
                className="rounded-3xl shadow-elevated" 
                alt="Ethiopian farmer harvesting crops" 
              />
              <img 
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=600&fit=crop" 
                className="rounded-3xl shadow-elevated mt-8" 
                alt="Fresh produce at market" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-muted">
        <div className="container-main">
          <div className="bg-card rounded-4xl p-8 md:p-12 shadow-elevated border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src={TESTIMONIALS[0].image} 
                alt={TESTIMONIALS[0].name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-soft"
              />
              <div className="flex-1 text-center md:text-left">
                <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                  "{TESTIMONIALS[0].quote}"
                </p>
                <div>
                  <span className="font-heading font-bold text-foreground">{TESTIMONIALS[0].name}</span>
                  <span className="text-muted-foreground mx-2">•</span>
                  <span className="text-secondary font-medium">{TESTIMONIALS[0].role}</span>
                  <span className="text-muted-foreground mx-2">•</span>
                  <span className="text-muted-foreground">{TESTIMONIALS[0].region}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 opacity-10">
          <Leaf className="w-80 h-80" />
        </div>
        <div className="absolute -left-10 -bottom-10 opacity-10">
          <Leaf className="w-60 h-60 rotate-45" />
        </div>
        
        <div className="container-main text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
            Ready to transform the way<br />Ethiopia eats?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Whether you are a farmer in rural Oromia or a business owner in Addis Ababa, join the movement for a fairer supply chain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-elevated">
              <Link to="/contact">
                Partner with AgriLink
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/submit-testimonial">
                Share Your Story
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
