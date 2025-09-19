import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  GitHub,
  Linkedin,
  Menu,
  X,
  Search,
  ExternalLink,
} from "lucide-react";

// Single-file React portfolio component (Tailwind + Framer Motion + lucide-react)
// --- Usage ---
// 1) Create a new Vite or CRA React project.
// 2) Install dependencies:
//    npm install framer-motion lucide-react
// 3) Install Tailwind and configure per Tailwind docs.
// 4) Replace App.jsx with this file or import this component.
// --- Personalize the `profile` and `projects` arrays below. ---

const profile = {
  name: "Harini",
  title: "Java Professor & Full‑stack Enthusiast",
  tagline: "I build thoughtful apps, teach computer science, and make code readable.",
  avatar: "https://avatars.dicebear.com/api/initials/Harini.svg",
  email: "harini@example.com",
  github: "https://github.com/harini",
  linkedin: "https://linkedin.com/in/harini",
};

const projectsSeed = [
  {
    id: 1,
    title: "Smart IoT Street Lighting",
    desc: "An IoT project that adapts lighting based on motion and ambient light.",
    tags: ["IoT", "C", "Embedded"],
    link: "#",
  },
  {
    id: 2,
    title: "Algorithm Visualizer",
    desc: "Interactive visualizations of sorting and shortest path algorithms.",
    tags: ["React", "D3", "Algorithms"],
    link: "#",
  },
  {
    id: 3,
    title: "SQL Tutor Portal",
    desc: "A mini learning site for SQL queries and practice exercises.",
    tags: ["Node", "SQL", "Education"],
    link: "#",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("All");

  const allTags = [
    "All",
    ...Array.from(new Set(projectsSeed.flatMap((p) => p.tags))).sort(),
  ];

  const filtered = projectsSeed.filter((p) => {
    const matchesQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase());
    const matchesTag = tagFilter === "All" || p.tags.includes(tagFilter);
    return matchesQuery && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={profile.avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full ring-2 ring-indigo-300"
          />
          <div>
            <h1 className="text-lg font-semibold">{profile.name}</h1>
            <p className="text-sm text-gray-600">{profile.title}</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <div className="flex items-center gap-3">
            <a href={profile.github} aria-label="github">
              <GitHub size={18} />
            </a>
            <a href={profile.linkedin} aria-label="linkedin">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="email">
              <Mail size={18} />
            </a>
          </div>
        </nav>

        {/* mobile menu */}
        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setMenuOpen((s) => !s)}
          aria-label="menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-4">
        <section className="grid md:grid-cols-3 gap-8 items-center py-12">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-sm text-indigo-600 font-medium">Hello, I'm</p>
            <h2 className="text-4xl font-extrabold leading-tight mt-2">
              {profile.name}
            </h2>
            <p className="mt-4 text-lg text-gray-700">{profile.tagline}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-600 text-white font-medium shadow"
              >
                See projects
                <ExternalLink size={14} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border"
              >
                <Mail size={14} /> Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow rounded-2xl p-6 flex flex-col items-center"
          >
            <img
              src={profile.avatar}
              alt="avatar"
              className="w-36 h-36 rounded-full mb-4"
            />
            <h3 className="font-semibold">{profile.name}</h3>
            <p className="text-sm text-gray-600">{profile.title}</p>
            <div className="mt-4 flex gap-3">
              <a href={profile.github} className="hover:text-indigo-600">
                <GitHub />
              </a>
              <a href={profile.linkedin} className="hover:text-indigo-600">
                <Linkedin />
              </a>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-6">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h3 className="text-2xl font-semibold">About me</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              I'm a computer science educator who loves writing clean code and
              building simple, maintainable systems. My core interests include
              algorithms, system design, embedded systems and teaching.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium">Languages</h4>
                <p className="text-sm text-gray-600">C, C++, Java, Python</p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Tools</h4>
                <p className="text-sm text-gray-600">Git, VSCode, Vite</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Projects</h3>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-white p-2 rounded-full shadow">
                <Search size={14} />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="outline-none text-sm w-48"
                />
              </div>

              <div className="bg-white p-2 rounded-2xl shadow">
                <select
                  value={tagFilter}
                  onChange={(e) => setTagFilter(e.target.value)}
                  className="bg-transparent outline-none text-sm"
                >
                  {allTags.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <motion.article
                key={p.id}
                whileHover={{ y: -6 }}
                className="bg-white p-5 rounded-2xl shadow"
              >
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={p.link}
                    className="text-sm font-medium inline-flex items-center gap-2"
                  >
                    View
                    <ExternalLink size={12} />
                  </a>

                  <button
                    onClick={() => window.alert(`Open project: ${p.title}`)}
                    className="text-sm px-3 py-1 rounded-xl border"
                  >
                    Demo
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-gray-600">Feel free to reach out for
              collaborations or lectures.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const name = fd.get("name");
                const msg = fd.get("message");
                window.location.href = `mailto:${profile.email}?subject=Message from ${encodeURIComponent(
                  String(name)
                )}&body=${encodeURIComponent(String(msg))}`;
              }}
              className="mt-4 grid md:grid-cols-2 gap-4"
            >
              <input
                name="name"
                placeholder="Your name"
                className="p-3 border rounded-lg outline-none"
                required
              />
              <input
                name="email"
                placeholder="Your email"
                className="p-3 border rounded-lg outline-none"
                required
                type="email"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="md:col-span-2 p-3 border rounded-lg outline-none h-32"
                required
              />

              <button className="md:col-span-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-indigo-600 text-white font-medium">
                Send message
              </button>
            </form>
          </motion.div>
        </section>

        <footer className="py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {profile.name} — Built with React & Tailwind
        </footer>
      </main>

      {/* Mobile nav overlay */}
      {menuOpen && (
        <motion.aside
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 flex items-start justify-end p-6 md:hidden"
        >
          <div className="w-64 bg-white rounded-2xl p-4 shadow">
            <nav className="flex flex-col gap-3">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </nav>
          </div>
        </motion.aside>
      )}
    </div>
  );
}
