export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="grid gap-4 lg:grid-cols-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="
              h-44
              rounded-3xl
              bg-zinc-900
              animate-pulse
            "
          />
        ))}
      </div>
    </main>
  );
}