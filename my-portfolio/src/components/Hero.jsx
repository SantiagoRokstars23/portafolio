export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Hola, soy <span className="text-blue-500">Santiago Grueso</span>
      </h1>

      <p className="text-xl max-w-xl text-neutral-300">
        Desarrollador de software especializado en Java, Spring Boot y
        microservicios. Construyo soluciones sólidas, limpias y escalables.
      </p>

      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all"
      >
        Ver proyectos
      </a>
    </section>
  );
}
