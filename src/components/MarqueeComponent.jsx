import Marquee from "react-fast-marquee";

export const MarqueeComponent = ({ direction, speed = "40" }) => {
  const clients = [
    "Amazon", "Netflix", "Adidas", "Samsung", "Porsche", "Vogue", "Rolex"
  ];

  return (
    <section className="relative overflow-hidden bg-black py-4 border-y border-white/5">
      {/* Background Texture */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-10" />

      <Marquee
        direction={direction}
        gradient={true}
        gradientWidth={200}
        speed={speed}
        gradientColor={[0, 0, 0]}
        className="flex items-center"
      >
        {clients.map((client, i) => (
          <div key={i} className="flex items-center gap-6 mx-12 group">
            <img
              src="/assets/images/favicon.png"
              alt={client}
              className="h-8 md:h-12 object-contain opacity-30 grayscale group-hover:opacity-80 transition-opacity"
            />
            <span className="font-techno text-2xl md:text-4xl uppercase tracking-tighter text-white/20 group-hover:text-red-500 transition-colors">
              {client}
            </span>
          </div>
        ))}
        {/* Duplicate for seamless loop if needed by marquee library, but fast-marquee handles children arrays well */}
      </Marquee>
    </section>
  );
};

