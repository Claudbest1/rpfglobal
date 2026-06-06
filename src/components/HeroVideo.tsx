export function HeroVideo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/images/bg.png"
      className="absolute inset-0 h-full w-full object-cover object-center"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>
  );
}
