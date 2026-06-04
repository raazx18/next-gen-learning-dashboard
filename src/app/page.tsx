import Sidebar from "@/components/sidebar/Sidebar";
import BentoGrid from "@/components/dashboard/BentoGrid";
import { supabase } from "@/lib/supabase";
import MobileNav from "@/components/sidebar/MobileNav";
    
export default async function Home() {
  const { data, error } = await supabase
  .from("courses")
  .select("*");
  if (error) {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <article className="rounded-3xl border border-red-500/30 bg-zinc-900 p-8">
        <h2 className="text-xl font-semibold text-red-400">
          Failed to load courses
        </h2>

        <p className="text-zinc-400 mt-2">
          Please try again later.
        </p>
      </article>
    </main>
  );
}

  return (
    <main className="min-h-screen bg-zinc-950 text-white flex relative overflow-hidden">
        <div className="absolute inset-0">
  <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
</div>
      <Sidebar />
      <MobileNav />

      <section className="flex-1 p-6 relative z-10 grain">
        <BentoGrid courses={data || []} />
      </section>
    </main>
  );
}