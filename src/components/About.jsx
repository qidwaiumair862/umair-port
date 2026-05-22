const skills = [
  { name: "PHP", value: "90%" },
  { name: "MySQL", value: "85%" },
  { name: "Python", value: "80%" },
  { name: "Flask", value: "75%" },
  { name: "JavaScript", value: "70%" },
  { name: "React", value: "70%" },
];

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-5xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
          
          <p className="text-lg text-gray-300 leading-8">
            I am a Full Stack Developer from Ayodhya, Uttar Pradesh.
            I build responsive and dynamic web applications using
            PHP, Python, Flask, MySQL, React and modern technologies.
          </p>

          <div className="mt-10 space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                
                <div className="flex justify-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.value}</span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-purple-500 h-3 rounded-full"
                    style={{ width: skill.value }}
                  ></div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;