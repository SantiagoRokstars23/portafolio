export default function Skills() {
  const skills = [
    "Java",
    "Spring Boot",
    "Microservicios",
    "PostgreSQL",
    "Kubernetes",
    "Docker",
    "React",
    "Git",
    "JasperReports",
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-5xl mx-auto text-center text-neutral-300"
    >
      <h2 className="text-4xl font-bold text-white mb-12">Tecnologías</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-neutral-700 bg-neutral-900/40 py-4 rounded-xl
                       hover:border-blue-500 transition-all"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
