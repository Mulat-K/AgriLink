import { IMPACT_STATS } from '@/constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { TrendingUp, Users, Leaf, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const incomeData = [
  { name: 'Before AgriLink', value: 4000 },
  { name: 'With AgriLink', value: 7200 },
];

const wasteData = [
  { name: 'Efficient Delivery', value: 75 },
  { name: 'Distribution Loss', value: 15 },
  { name: 'On-Farm Loss', value: 10 },
];

const COLORS = ['hsl(152, 50%, 28%)', 'hsl(38, 92%, 50%)', 'hsl(22, 70%, 45%)'];

const Impact = () => {
  const getIcon = (index: number) => {
    const icons = [
      <Users className="text-primary" />,
      <Leaf className="text-primary" />,
      <TrendingUp className="text-primary" />,
      <ShoppingBag className="text-primary" />
    ];
    return icons[index];
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 opacity-10">
          <Leaf className="w-96 h-96" />
        </div>
        <div className="container-main relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-up">
            Our <span className="text-secondary">Local Impact</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-up delay-100">
            Measurable change in Ethiopia's agricultural landscape through transparency and technology.
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 -mt-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, i) => (
              <article 
                key={i} 
                className="bg-card rounded-3xl p-8 shadow-elevated border border-border hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="bg-muted w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  {getIcon(i)}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">{stat.label}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visualizations */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Income Chart */}
            <div className="animate-fade-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Farmer Income Growth
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                By bypassing traditional commission agents and middlemen, farmers retain more of the final sale price. On average, farmers in our initial cohort saw an immediate 22% increase in net revenue per harvest cycle.
              </p>
              <div className="h-[300px] w-full bg-card rounded-3xl p-6 shadow-soft border border-border">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(45, 20%, 88%)" />
                    <XAxis dataKey="name" tick={{ fill: 'hsl(150, 15%, 40%)' }} />
                    <YAxis tick={{ fill: 'hsl(150, 15%, 40%)' }} />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        backgroundColor: 'hsl(45, 25%, 99%)'
                      }} 
                      formatter={(value) => [`${value} ETB`, 'Avg Monthly Revenue']}
                    />
                    <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                      {incomeData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? 'hsl(45, 20%, 80%)' : 'hsl(152, 50%, 28%)'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Waste Chart */}
            <div className="bg-card p-10 rounded-3xl shadow-elevated border border-border animate-fade-up delay-200">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Waste Reduction
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Post-harvest loss in Ethiopia can be as high as 40%. Our streamlined logistics and real-time data tracking have brought this down significantly for our partners.
              </p>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={wasteData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {wasteData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: 'none', 
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        backgroundColor: 'hsl(45, 25%, 99%)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[0] }}></div> 
                  Efficient Delivery
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[1] }}></div> 
                  Distribution Loss
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[2] }}></div> 
                  On-Farm Loss
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="section-padding">
        <div className="container-main">
          <div className="bg-primary rounded-4xl overflow-hidden flex flex-col md:flex-row shadow-elevated">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1589923188651-268a9765e432?w=800&h=800&fit=crop" 
                className="w-full h-full object-cover min-h-[300px]" 
                alt="Ethiopian farmer success story"
              />
            </div>
            <div className="md:w-1/2 p-10 md:p-16 text-primary-foreground flex flex-col justify-center">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">
                Success Story: Oromia Region
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">
                Doubling Efficiency in Bishoftu
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed italic">
                "Before AgriLink, I had to travel to the city market myself or wait for middlemen who dictated the price. Now, I receive an SMS notification when a truck is coming, and I know exactly what I'll be paid."
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-5 rounded-2xl">
                  <div className="text-2xl font-bold">14 days</div>
                  <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Avg Payment Time</div>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm p-5 rounded-2xl">
                  <div className="text-2xl font-bold">4.8 / 5</div>
                  <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Farmer Satisfaction</div>
                </div>
              </div>
              <Button size="lg" className="bg-card text-foreground hover:bg-card/90 w-fit shadow-soft">
                Read the full case study <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;
