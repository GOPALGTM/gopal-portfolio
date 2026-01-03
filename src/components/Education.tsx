import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subheading">
            Continuous learning is the key to growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Card */}
          <div className="glass rounded-2xl p-8 card-hover hover-lift">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-0.5 mb-6">
              <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-foreground" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">Bachelor of Computer Applications</h3>
            <p className="text-primary text-lg font-medium mb-4">BCA</p>
            
            <p className="text-muted-foreground mb-4">
              Bon Maharaj Institute of Management and Technology
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Sep 2019 – Jul 2022</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Vrindavan, Uttar Pradesh</span>
              </div>
            </div>
          </div>

          {/* Certification Card */}
          <div className="glass rounded-2xl p-8 card-hover hover-lift">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 p-0.5 mb-6">
              <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                <Award className="w-7 h-7 text-foreground" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">AWS Certified Solutions Architect</h3>
            <p className="text-primary text-lg font-medium mb-4">Cloud Architecture</p>
            
            <p className="text-muted-foreground mb-4">
              Ducat, Noida
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Jul 2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
