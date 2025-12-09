import practitionerImage from "@/assets/practitioner.jpg";

const About = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-secondary/50 rounded-3xl transform -rotate-2" />
              
              <img
                src={practitionerImage}
                alt="Din behandler"
                className="relative rounded-2xl shadow-xl object-cover w-full aspect-[3/4] max-w-md mx-auto"
              />
              
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm opacity-90">års erfaring</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-delay-1">
            <div className="space-y-2">
              <p className="text-primary font-medium uppercase tracking-wider text-sm">Om mig</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Din partner i bedre helbred
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Jeg hedder Marie Jensen og har i over 15 år hjulpet mennesker med at 
                overvinde smerter og fysiske udfordringer. Min tilgang er helhedsorienteret 
                – jeg behandler ikke kun symptomerne, men finder årsagen til dine problemer.
              </p>
              <p>
                Med en baggrund fra Syddansk Universitet og efteruddannelse i moderne 
                behandlingsmetoder, tilbyder jeg evidensbaseret behandling tilpasset 
                din unikke situation.
              </p>
              <p>
                For mig er det vigtigt, at du føler dig tryg og forstået. Derfor tager 
                jeg mig altid tid til at lytte og forklare, så vi sammen kan finde den 
                bedste vej til dit mål.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold text-foreground italic text-xl" style={{ fontFamily: 'cursive' }}>
                    Marie Jensen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Autoriseret fysioterapeut, cand.scient.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
