import { Smartphone, MessageCircle, FileText, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FileText,
    title: "Dine øvelser",
    description: "Få tilpassede øvelsesprogrammer direkte på din telefon",
  },
  {
    icon: MessageCircle,
    title: "Sikker chat",
    description: "Skriv til mig mellem besøgene – jeg svarer inden for 24 timer",
  },
  {
    icon: Bell,
    title: "Påmindelser",
    description: "Automatiske påmindelser om øvelser og kommende aftaler",
  },
];

const PatientApp = () => {
  return (
    <section className="section-padding bg-primary/5">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-primary font-medium uppercase tracking-wider text-sm">
                Min patient-app
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Hold kontakten mellem besøgene
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Med min sikre patient-app får du adgang til dine øvelser, kan chatte 
              direkte med mig og modtage påmindelser. Det hele samlet ét sted – 
              trygt og nemt.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              <Smartphone className="w-5 h-5" />
              Prøv appen gratis
            </Button>
          </div>

          {/* Phone Mockup */}
          <div className="relative animate-fade-in-delay-2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden w-64 h-[520px]">
                  {/* Status bar */}
                  <div className="bg-primary/10 px-6 py-3 flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">9:41</span>
                    <div className="w-20 h-5 bg-foreground rounded-full" />
                    <span className="text-xs text-muted-foreground">100%</span>
                  </div>
                  
                  {/* App header */}
                  <div className="bg-primary p-4 text-primary-foreground">
                    <p className="text-sm opacity-80">Velkommen tilbage</p>
                    <p className="font-semibold">Marie's Klinik</p>
                  </div>
                  
                  {/* App content */}
                  <div className="p-4 space-y-3">
                    {/* Today's exercises card */}
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Dagens øvelser</p>
                      <p className="font-semibold text-foreground text-sm">3 af 5 gennemført</p>
                      <div className="mt-2 bg-border rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-3/5" />
                      </div>
                    </div>
                    
                    {/* Next appointment */}
                    <div className="bg-card border border-border rounded-xl p-4">
                      <p className="text-xs text-muted-foreground mb-1">Næste aftale</p>
                      <p className="font-semibold text-foreground text-sm">Tirsdag, 14. jan</p>
                      <p className="text-xs text-muted-foreground">Kl. 10:00 - Behandling</p>
                    </div>
                    
                    {/* Message preview */}
                    <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageCircle className="w-4 h-4 text-primary" />
                        <p className="text-xs font-medium text-primary">Ny besked</p>
                      </div>
                      <p className="text-sm text-foreground">Husk at lave dine øvelser...</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full -z-10 animate-float" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientApp;
