import React from "react";

// Single-file React portfolio component (TailwindCSS)
// Usage: put this file in src/components/Portfolio.jsx and import in App.jsx

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Veterinaria App (Java + Spring Boot)",
      description:
        "Backend en Spring Boot (REST), PostgreSQL, seguridad con JWT. Frontend React con autenticación y CRUD de citas.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
      repo: "https://github.com/tu-usuario/veterinaria-app",
      demo: "https://veterinaria-demo.example.com",
    },
    {
      id: 2,
      title: "Batch Processor (Spring Batch)",
      description:
        "Job de procesamiento por lotes para transformar ficheros, métricas y reintentos configurables.",
      tech: ["Spring Batch", "Docker", "Kubernetes"],
      repo: "https://github.com/tu-usuario/spring-batch-job",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <header className="max-w-4xl mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Santiago Grueso</h1>
          <p className="mt-1 text-sm text-slate-600">Backend Java · APIs · Microservicios</p>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">
            Proyectos
          </a>
          <a href="#about" className="hover:underline">
            Sobre mí
          </a>
          <a href="#contact" className="hover:underline">
            Contacto
          </a>
        </nav>
      </header>

      <section className="bg-white border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Desarrollador Backend (Java)</h2>
            <p className="mt-4 text-slate-600">
              Construyo APIs escalables y mantenibles usando Spring Boot, diseño arquitecturas de microservicios y
              despliego soluciones en la nube.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-block px-4 py-2 rounded-lg border border-slate-200 text-sm hover:shadow"
                href="/cv.pdf"
                download
              >
                Descargar CV
              </a>
              <a
                className="inline-block px-4 py-2 rounded-lg bg-slate-900 text-white text-sm hover:opacity-95"
                href="#projects"
              >
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="w-40 h-40 bg-gradient-to-br from-slate-200 to-white rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-xs text-slate-500">Foto</div>
              <div className="mt-2 font-medium">Tu nombre</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold">Proyectos destacados</h3>
        <p className="text-sm text-slate-600 mt-2">Proyectos en los que diseñé el backend o la arquitectura completa.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.id} className="bg-white rounded-xl p-4 shadow-sm border">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 border rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                {p.repo && (
                  <a href={p.repo} className="text-sm underline" target="_blank" rel="noreferrer">
                    Código
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} className="text-sm underline" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold">Sobre mí</h3>
        <p className="mt-2 text-sm text-slate-600">
          Soy desarrollador Java con 3 años de experiencia (ajusta según tu experiencia). Me especializo en diseño de
          APIs REST, procesamiento por lotes y despliegue en contenedores. Me gustan las soluciones limpias, observabilidad
          y pruebas automáticas.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border">Experiencia: Java · Spring Boot</div>
          <div className="bg-white p-4 rounded-lg border">Arch: Microservicios · Docker · K8s</div>
          <div className="bg-white p-4 rounded-lg border">DB: PostgreSQL · Redis</div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-xl font-semibold">Contacto</h3>
        <p className="mt-2 text-sm text-slate-600">¿Quieres trabajar conmigo o revisar un proyecto? Escríbeme.</p>

        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input name="name" placeholder="Tu nombre" className="p-3 rounded-lg border" />
          <input name="email" placeholder="Tu correo" className="p-3 rounded-lg border" />
          <textarea name="message" placeholder="Mensaje" className="p-3 rounded-lg border md:col-span-2" rows={4} />
          <button type="submit" className="md:col-span-2 px-4 py-2 rounded-lg bg-slate-900 text-white">
            Enviar
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-500">También puedes ver mis repositorios en GitHub: <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" className="underline">github.com/tu-usuario</a></p>
      </section>

      <footer className="border-t mt-12 py-6">
        <div className="max-w-4xl mx-auto px-6 text-sm text-slate-500 flex justify-between">
          <div>© {new Date().getFullYear()} Santiago Grueso — Desarrollador Java</div>
          <div>Hecho con React · Tailwind</div>
        </div>
      </footer>
    </main>
  );
}
