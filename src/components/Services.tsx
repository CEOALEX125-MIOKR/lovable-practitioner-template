import { ClipboardList, Users, Video, Stethoscope, Heart, Zap } from "lucide-react";

const services = [
  {
    icon: ClipboardList,
    title: "Konsultation",
    description: "Grundig undersøgelse og personlig behandlingsplan tilpasset dine behov og mål.",
  },
  {
    icon: Stethoscope,
    title: "Behandling",
    description: "Manuel behandling kombineret med moderne teknikker for optimal effekt.",
  },
  {
    icon: Video,
    title: "Online opfølgning",
    description: "Fleksible videokonsultationer til opfølgning og vejledning hjemmefra.",
  },
  {
    icon: Heart,
    title: "Forebyggelse",
    description: "Individuelle øvelsesprogrammer for at forebygge fremtidige skader.",
  },
  {
    icon: Users,
    title: "Holdtræning",
    description: "Små holdtræninger med fokus på styrke, balance og bevægelighed.",
  },
  {
    icon: Zap,
    title: "Akut behandling",
    description: "Hurtig hjælp ved akutte smerter – ofte tid samme dag eller næste dag.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2">
            Ydelser
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Behandlinger tilpasset dig
          </h2>
          <p className="text-muted-foreground text-lg">
            Jeg tilbyder et bredt udvalg af behandlinger, alle med fokus på at 
            give dig den bedst mulige hjælp.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card p-8 rounded-2xl card-elevated group cursor-pointer animate-fade-in-delay-${Math.min(index + 1, 3)}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
