import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-12 py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              M.I.T.I Rene Corona Valdes
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              Maestro en Ingenieria en Tecnologias de la Información y Comunicación
            </p>
            <p className="text-xs text-gray-500">
              Especialista en desarrollo de software y soluciones tecnológicas
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Contacto</h4>
            <div className="space-y-2">
              <a
                href="tel:+527152533595"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone size={16} />
                <span>715-253-35-95</span>
              </a>
              <a
                href="mailto:ingeniero.rene.corona@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={16} />
                <span>ingeniero.rene.corona@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Redes</h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/rene-corona-valdes/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/developercrown"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://devcrown-tech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-500 hover:text-white transition-all duration-300"
                title="Portafolio"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">
            Herramienta de formateo de texto Unicode para redes sociales
            <br />
            © 2025 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
