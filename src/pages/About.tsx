import { FOUNDERS } from '@/constants';
import { Target, Heart, Scale, Globe, Leaf } from 'lucide-react';

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Narrative Intro */}
      <section className="section-padding bg-muted border-b border-border">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight animate-fade-up">
              The Future of <span className="text-primary">Ethiopian</span> Agriculture is Direct.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-up delay-100">
              AgriLink was founded on a simple realization: the gap between rural production and urban consumption in Ethiopia is unnecessarily wide, inefficient, and often unfair.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* The Challenge */}
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 flex items-center">
                <div className="bg-accent/10 p-2 rounded-xl mr-3">
                  <Target className="text-accent w-6 h-6" />
                </div>
                The Challenge
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ethiopia's agricultural system supports over 80% of the population, yet smallholder farmers often remain marginalized by complex, multi-layered supply chains. In Addis Ababa, prices fluctuate wildly while farmers in rural zones see only a fraction of that value.
              </p>
              <ul className="space-y-4">
                {[
                  'Post-harvest waste due to inefficient logistics.',
                  'Lack of price transparency at the farm gate.',
                  'Limited digital inclusion for small-scale producers.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-destructive/10 p-1 rounded-full mr-3 mt-1.5">
                      <span className="w-2 h-2 block bg-destructive rounded-full"></span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div className="animate-fade-up delay-200">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6 flex items-center">
                <div className="bg-secondary/20 p-2 rounded-xl mr-3">
                  <Heart className="text-secondary w-6 h-6" />
                </div>
                The AgriLink Way
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are building a digital market infrastructure that connects the producer directly to the final sale hub. By aligning with national priorities for agricultural transformation, we're not just a startup; we're a utility for rural development.
              </p>
              <ul className="space-y-4">
                {[
                  'Simplified SMS-based onboarding for low-tech areas.',
                  'Strategic distribution hubs in Addis Ababa.',
                  'Data-driven demand forecasting to stabilize prices.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1.5">
                      <span className="w-2 h-2 block bg-primary rounded-full"></span>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 opacity-10">
          <Leaf className="w-80 h-80" />
        </div>
        <div className="container-main text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 animate-fade-up">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Scale className="w-12 h-12 mx-auto text-secondary mb-6" />, 
                title: "Transparency", 
                text: "Open pricing models that farmers can trust." 
              },
              { 
                icon: <Globe className="w-12 h-12 mx-auto text-secondary mb-6" />, 
                title: "Local Impact", 
                text: "Every birr earned is reinvested in the community." 
              },
              { 
                icon: <Heart className="w-12 h-12 mx-auto text-secondary mb-6" />, 
                title: "Inclusivity", 
                text: "No farmer is left behind by the digital divide." 
              }
            ].map((v, i) => (
              <div 
                key={i} 
                className="animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {v.icon}
                <h3 className="text-xl font-heading font-bold mb-4">{v.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 animate-fade-up">
              The People Behind the Mission
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto animate-fade-up delay-100">
              Founded by Ethiopians with a deep commitment to national growth and food security.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {FOUNDERS.map((founder, i) => (
              <article 
                key={i} 
                className="text-center group animate-fade-up"
                style={{ animationDelay: `${(i + 2) * 100}ms` }}
              >
                <div className="relative mb-8 inline-block">
                  <div className="absolute inset-0 bg-secondary rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform shadow-glow"></div>
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="relative z-10 w-56 h-56 md:w-64 md:h-64 object-cover rounded-3xl shadow-elevated grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">{founder.name}</h3>
                <p className="text-secondary font-bold mb-4">{founder.role}</p>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">{founder.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
