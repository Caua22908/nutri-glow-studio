export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="aurora-field drift-slow"
        style={{
          background:
            "radial-gradient(38% 42% at 22% 28%, oklch(0.78 0.13 62 / 0.75), transparent 70%)",
        }}
      />
      <div
        className="aurora-field drift-slower"
        style={{
          background:
            "radial-gradient(40% 38% at 78% 22%, oklch(0.42 0.09 158 / 0.55), transparent 70%)",
        }}
      />
      <div
        className="aurora-field drift-slow"
        style={{
          animationDelay: "-8s",
          background:
            "radial-gradient(45% 45% at 62% 82%, oklch(0.85 0.09 42 / 0.6), transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, color-mix(in oklab, var(--cream) 55%, transparent) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
