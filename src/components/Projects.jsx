import feedback from "../assets/feedback.png";
import petrol from "../assets/petrol-pump.png";

function Projects() {
  const projects = [
    {
      title: "Feedback System",
      image: feedback,
      desc: "PHP & MySQL based feedback system with admin panel."
    },
    {
      title: "Petrol Pump Management",
      image: petrol,
      desc: "Fuel stock, billing & employee management system."
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black/20">
      
      <h2 className="text-5xl font-bold text-center mb-14">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300"
          >
            
            <img
              src={project.image}
              alt=""
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-300 mt-3">
                {project.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;