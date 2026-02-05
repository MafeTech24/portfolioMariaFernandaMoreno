import { useMemo, useState } from "react";
import { ExternalLink, Github, Clock, ChevronDown, ChevronUp, ZoomIn, X } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
}

/* Carga automática de imágenes */
const assetImages = import.meta.glob("/src/assets/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function resolveProjectImage(fileName?: string) {
  if (!fileName) return undefined;
  return assetImages[`/src/assets/${fileName}`];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const isPlaceholder = project.isPlaceholder;
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal

  const hasLongText = useMemo(() => {
    if (isPlaceholder) return false;
    const t = `${project.problem} ${project.solution} ${project.contribution} `.trim();
    return t.length > 240;
  }, [isPlaceholder, project.problem, project.solution, project.contribution]);

  const clampProblem = expanded ? "" : "line-clamp-2";
  const clampSolution = expanded ? "" : "line-clamp-3";
  const clampContribution = expanded ? "" : "line-clamp-2";

  const imgSrc = !isPlaceholder ? resolveProjectImage(project.image) : undefined;

  return (
    <>
      <article className={`card-tech flex flex-col h-full ${isPlaceholder ? "opacity-60" : ""}`}>
        {/* Image con funcionalidad de Zoom */}
        {!isPlaceholder && imgSrc && (
          <div 
            className="group relative mb-4 rounded-lg overflow-hidden border border-border cursor-zoom-in"
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={imgSrc}
              alt={`Preview ${project.title}`}
              className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay sutil al hacer hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <ZoomIn className="text-white w-8 h-8" />
            </div>
          </div>
        )}

        {/* ... (resto de tu código de título y textos igual) ... */}
        <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
          {project.title}
        </h3>

        {!isPlaceholder ? (
          <div className="space-y-3 mb-4 flex-grow">
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Problema</span>
              <p className={`text-sm text-muted-foreground mt-1 whitespace-pre-line ${clampProblem}`}>
                {project.problem}
              </p>
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Solución</span>
              <p className={`text-sm text-muted-foreground mt-1 whitespace-pre-line ${clampSolution}`}>
                {project.solution}
              </p>
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase tracking-wide">Mi aporte</span>
              <p className={`text-sm text-muted-foreground mt-1 whitespace-pre-line ${clampContribution}`}>
                {project.contribution}
              </p>
            </div>

            {hasLongText && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {expanded ? <>Ver menos <ChevronUp className="w-4 h-4" /></> : <>Ver más <ChevronDown className="w-4 h-4" /></>}
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-muted-foreground mb-4 flex-grow">
            <Clock className="w-4 h-4" />
            <span className="text-sm">En carga / Próximamente</span>
          </div>
        )}

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span key={tech} className="badge-tech text-xs">{tech}</span>
          ))}
        </div>

        {/* Links */}
        {!isPlaceholder && (project.liveUrl || project.repoUrl) && (
          <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                <ExternalLink className="w-4 h-4" /> Live
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-4 h-4" /> Repo
              </a>
            )}
          </div>
        )}
      </article>

      {/* MODAL DE IMAGEN (LIGHTBOX) */}
{isModalOpen && (
  <div 
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-zoom-out"
    onClick={() => setIsModalOpen(false)}
  >
    <div className="relative max-w-6xl w-full animate-in fade-in zoom-in duration-300">
      <button 
        className="absolute -top-12 right-0 text-white hover:text-primary flex items-center gap-2 font-medium transition-colors"
        onClick={() => setIsModalOpen(false)}
      >
        Cerrar <X className="w-6 h-6" />
      </button>
      
      {/* IMPORTANTE: Usamos imgSrc que ya tiene la ruta resuelta por tu función */}
      <img
        src={imgSrc} 
        alt={project.title}
        className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
      />
      
      <div className="mt-4 text-center">
        <h4 className="text-white text-lg font-medium">{project.title}</h4>
        <p className="text-muted-foreground text-sm">Vista detallada del proyecto</p>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default ProjectCard;