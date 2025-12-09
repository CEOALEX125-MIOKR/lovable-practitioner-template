import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand & Contact */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Marie's Klinik</h3>
                <p className="text-background/70 max-w-md">
                  Professionel fysioterapi med fokus på dig. Book din tid i dag 
                  og tag det første skridt mod et smertefrit liv.
                </p>
              </div>

              <Button variant="hero" size="lg" className="bg-primary hover:bg-primary/90">
                Book tid nu
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Kontakt</h4>
              
              <div className="space-y-3">
                <a href="tel:+4512345678" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+45 12 34 56 78</span>
                </a>
                
                <a href="mailto:kontakt@mariesklinik.dk" className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>kontakt@mariesklinik.dk</span>
                </a>
                
                <div className="flex items-start gap-3 text-background/80">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <div>
                    <p>Sundhedsvej 42</p>
                    <p>8000 Aarhus C</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Åbningstider</h4>
              
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Hverdage</span>
                </div>
                <p className="ml-8">Mandag - Fredag: 08:00 - 17:00</p>
                
                <div className="pt-2">
                  <p className="ml-8">Lørdag: 09:00 - 13:00</p>
                  <p className="ml-8">Søndag: Lukket</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-12 rounded-2xl overflow-hidden bg-background/10 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-2 text-background/50" />
              <p className="text-background/50">Kort integration</p>
              <p className="text-sm text-background/30">Sundhedsvej 42, 8000 Aarhus C</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="container-tight py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2024 Marie's Klinik. Alle rettigheder forbeholdes.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privatlivspolitik</a>
            <a href="#" className="hover:text-background transition-colors">Handelsbetingelser</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
