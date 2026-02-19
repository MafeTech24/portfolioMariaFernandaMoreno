import { aboutText } from "@/data/portfolio";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-foreground mb-4">Sobre mí</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* About Text */}
          <div className="card-tech mb-8">
            <p className="text-muted-foreground leading-relaxed about-text">
              {aboutText.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>        
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
