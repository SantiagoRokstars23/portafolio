export default function Projects() {
  const projects = [
    {
      title: "App de Citas para Veterinaria",
      description:
        "Aplicación completa para gestionar citas, clientes y mascotas. Incluye autenticación, dashboard, CRUD y arquitectura limpia.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL"],
      link: "#", // Aquí pondrás tu repo cuando lo tengas público
    },
    {
      title: "Microservicio de Pagos",
      description:
        "Servicio independiente para procesar transferencias y validar operaciones. Implementa buenas prácticas, SOLID y manejo seguro de datos.",
      tech: ["Java", "Spring Boot", "Microservicios"],
      link: "#",
    },
    {
      title: "Gestor de Reportes con JasperReports",
      description:
        "Generación dinámica de reportes PDF usando plantillas JRXML, integrados dentro de una API robusta.",
      tech: ["Java", "JasperReports"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto text-neutral-300"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-neutral-900/40 border border-neutral-800 rounded-xl p-6
                       hover:border-blue-500 transition-all flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-neutral-400 mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-sm px-3 py-1 bg-neutral-800 rounded-md border border-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ver proyecto →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
