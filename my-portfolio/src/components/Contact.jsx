export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-3xl mx-auto text-center text-neutral-300"
    >
      <h2 className="text-4xl font-bold text-white mb-6">Contacto</h2>

      <p className="mb-8 text-neutral-400">
        Si deseas hablar sobre oportunidades, colaborar en un proyecto 
        o simplemente conectar, aquí tienes mis canales de contacto.
      </p>

      <div className="flex flex-col gap-4 items-center">
        <a
          href="mailto:tu-correo@gmail.com"
          className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
        >
          ✉️ tu-correo@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
        >
          🔗 LinkedIn
        </a>

        <a
          href="https://github.com/tuusuario"
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
        >
          💻 GitHub
        </a>
      </div>
    </section>
  );
}
