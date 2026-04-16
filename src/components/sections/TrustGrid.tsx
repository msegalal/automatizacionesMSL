import { trustPoints } from "@/lib/site-content";

export default function TrustGrid() {
  return (
    <section className="px-6 pb-6">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {trustPoints.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.9rem] border border-white/80 bg-white/72 px-5 py-6 shadow-[0_18px_50px_rgba(8,19,33,0.07)] backdrop-blur-xl"
          >
            <p className="text-5xl font-semibold leading-none text-slate-200">{item.value}</p>
            <h2 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
