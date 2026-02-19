import { techSkills, softSkills } from "@/data/portfolio";

const SkillsSection = () => {
  const tech = techSkills.filter((s) => s.category === "tech");
  const ia = techSkills.filter((s) => s.category === "ia");
  const tools = techSkills.filter((s) => s.category === "tools");

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4">Habilidades</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack técnico, herramientas y habilidades blandas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Skills técnicas */}
          <article className="card-tech p-6">
            <h3 className="text-foreground font-semibold mb-4">Skills</h3>

            <div className="mb-5">
              <p className="text-sm text-muted-foreground mb-2">Frontend / Tech</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((s) => (
                  <span key={s.name} className="badge-primary text-sm">{s.name}</span>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <p className="text-sm text-muted-foreground mb-2">IA & Automatización</p>
              <div className="flex flex-wrap gap-2">
                {ia.map((s) => (
                  <span key={s.name} className="badge-primary text-sm">{s.name}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Tools</p>
              <div className="flex flex-wrap gap-2">
                {tools.map((s) => (
                  <span key={s.name} className="badge-primary text-sm">{s.name}</span>
                ))}
              </div>
            </div>
          </article>

          {/* Habilidades blandas */}
          <article className="card-tech p-6">
            <h3 className="text-foreground font-semibold mb-4">Habilidades blandas</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="badge-primary text-sm">{skill}</span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
