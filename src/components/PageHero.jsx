export const PageHero = ({ title, subtitle, image }) => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-4 text-white/80">{subtitle}</p>
      </div>
    </section>
  );
}


// relative min-h-screen flex flex-col items-center justify-center px-4

// h-[80vh] flex items-center justify-center text-center relative
