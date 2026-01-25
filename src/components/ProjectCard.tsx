import { useMemo, useState } from "react";
import { ExternalLink, Github, Clock, ChevronDown, ChevronUp } from "lucide-react";
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

  const hasLongText = useMemo(() => {
    if (isPlaceholder) return false;
    const t = `${project.problem} ${project.solution} ${project.contribution}`.trim();
    return t.length > 240; // umbral simple para mostrar botón
  }, [isPlaceholder, project.problem, project.solution, project.contribution]);

  const clampProblem = expanded ? "" : "line-clamp-2";
  const clampSolution = expanded ? "" : "line-clamp-3";
  const clampContribution = expanded ? "" : "line-clamp-2";

  const imgSrc = !isPlaceholder ? resolveProjectImage(project.image) : undefined;

  return (
    <article className={`card-tech flex flex-col h-full ${isPlaceholder ? "opacity-60" : ""}`}>
      {/* Image (si existe) */}
      {!isPlaceholder && imgSrc && (
        <div className="mb-4 rounded-lg overflow-hidden border border-border">
          <img
            src={imgSrc}
            alt={`Preview ${project.title}`}
            className="w-full h-44 object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
        {project.title}
      </h3>

      {/* Problem & Solution */}
      {!isPlaceholder ? (
        <div className="space-y-3 mb-4 flex-grow">
          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Problema
            </span>
            <p className={`text-sm text-muted-foreground mt-1 whitespace-pre-line ${clampProblem}`}>
              {project.problem}
            </p>
          </div>

          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Solución
            </span>
            <p className={`text-sm text-muted-foreground mt-1 whitespace-pre-line ${clampSolution}`}>
              {project.solution}
            </p>
          </div>

          <div>
            <span className="text-xs font-medium text-primary uppercase tracking-wide">
              Mi aporte
            </span>
            <p className={`text-sm text-muted-foreground mt-1 whitespace-pre-line ${clampContribution}`}>
              {project.contribution}
            </p>
          </div>

          {/* Ver más / menos */}
          {hasLongText && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              aria-expanded={expanded}
            >
              {expanded ? (
                <>
                  Ver menos <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Ver más <ChevronDown className="w-4 h-4" />
                </>
              )}
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
          <span key={tech} className="badge-tech text-xs">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {!isPlaceholder && (project.liveUrl || project.repoUrl) && (
        <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Repo
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
