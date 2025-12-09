import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle } from "lucide-react";
import clinicHero from "@/assets/clinic-hero.jpg";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center">
      <div className="container-tight w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-gradient text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <CheckCircle className="w-4 h-4" />
              <span>Ingen venteliste – Book i dag</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Tilbage til et
                <span className="text-primary block">smertefrit liv</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Professionel behandling med fokus på dig. Jeg hjælper dig med at 
                genvinde din livskvalitet gennem personlig og evidensbaseret behandling.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                <Calendar className="w-5 h-5" />
                Book konsultation
              </Button>
              <Button variant="hero-outline" size="xl">
                Læs mere om mig
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">15+ års erfaring</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">2000+ tilfredse patienter</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Autoriseret behandler</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in-delay-2 lg:justify-self-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-secondary rounded-3xl -z-10" />
              
              {/* Main image */}
              <img
                src={clinicHero}
                alt="Moderne klinik med rolig atmosfære"
                className="rounded-2xl shadow-2xl object-cover w-full max-w-lg aspect-[4/3]"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl card-elevated">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Næste ledige tid</p>
                    <p className="text-xs text-muted-foreground">I dag kl. 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
