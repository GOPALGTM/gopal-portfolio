import { posts } from "../data/blog.js";

export default function Blog() {
  return (
    <section id="blog" className="mt-20">
      <h2 className="text-2xl font-semibold">Writing & Notes</h2>
      <div className="mt-6 grid sm:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="card p-5">
            <div className="text-sm text-white/60">{p.date}</div>
            <h3 className="mt-2 font-semibold">{p.title}</h3>
            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tags.map((t) => <span key={t} className="badge">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
