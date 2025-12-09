import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Marie er fantastisk! Efter bare få behandlinger var mine rygsmerter næsten væk. Hendes personlige tilgang gør hele forskellen.",
    author: "Peter Hansen",
    role: "Patient siden 2022",
    rating: 5,
  },
  {
    quote: "Endelig en behandler, der lytter og forstår. Patient-appen er genial til at holde styr på øvelserne derhjemme.",
    author: "Anna Kristensen",
    role: "Patient siden 2021",
    rating: 5,
  },
  {
    quote: "Professionel, dygtig og venlig. Jeg kan varmt anbefale klinikken til alle med fysiske udfordringer.",
    author: "Michael Sørensen",
    role: "Patient siden 2023",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-2">
            Anmeldelser
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Det siger mine patienter
          </h2>
          <p className="text-muted-foreground text-lg">
            Læs hvad andre har oplevet med min behandling
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-background p-8 rounded-2xl card-elevated relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="text-center mt-12 animate-fade-in-delay-3">
          <div className="inline-flex items-center gap-2 bg-secondary px-6 py-3 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-secondary-foreground">
              4.9 / 5 baseret på 120+ anmeldelser
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
