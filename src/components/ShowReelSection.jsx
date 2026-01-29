export const ShowReelSection = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center bg-black">
      {/* 🎥 Background Video */}
      <video
        className="max-h-screen max-w-full object-contain z-0"
        src="/assets/videos/showReel.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}