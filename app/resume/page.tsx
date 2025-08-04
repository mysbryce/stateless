import React from "react"

const Resume = () => {
  const experiences = [
    { title: "Freelancer & Grand City", period: "Now - WFH Fulltime", type: "current" },
    { title: "Freelancer & MSC Shop (FiveM)", period: "2025 - WFH Fulltime", type: "recent" },
    { title: "EZ Shop (FiveM)", period: "2024 - WFH Fulltime", type: "past" },
    { title: "Do My Own FiveM Store", period: "2023 - WFH Fulltime", type: "past" },
    { title: "Funny Production", period: "2022 - WFH Fulltime", type: "past" },
    { title: "Do My Own FiveM Store", period: "2021 - WFH Fulltime", type: "past" }
  ]

  const projects = [
    { name: "Portfolio Website", tech: "Next.js, Tailwind CSS", description: "Personal portfolio showcasing projects and experience" },
    { name: "FiveM Store Platform", tech: "React.js, Node.js, MySQL", description: "E-commerce platform for FiveM gaming community" },
    { name: "Grand City Management", tech: "PHP, MySQL, JavaScript", description: "City management system for roleplay server" }
  ]

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="card bg-base-100 shadow-sm mb-6 mt-4">
          <div className="card-body">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-xl font-bold text-base-content mb-2">
                  กิตติชัย มาละอินทร์
                </h1>
                <h2 className="text-xl lg:text-2xl text-base-content/70 font-medium mb-4">
                  Full Stack Developer
                </h2>
                <p className="text-base-content/60 text-lg">
                  Passionate developer with expertise in modern web technologies
                  and gaming platforms. Focused on creating efficient, scalable solutions.
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="card bg-base-200 p-4 shadow-sm">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-base-content" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>fx.frame009@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-base-content" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>080-154-3784</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-base-content" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>สกลนคร, ไทย 47110</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience Section */}
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-2xl text-base-content mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zM8 5a1 1 0 011-1h2a1 1 0 011 1v1H8V5zM4 8v6h12V8H4z" clipRule="evenodd" />
                  </svg>
                  Experience
                </h3>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-base-300 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className={`w-3 h-3 rounded-full mt-2 ${exp.type === 'current' ? 'bg-base-content' :
                            exp.type === 'recent' ? 'bg-base-content/70' : 'bg-base-content/30'
                          }`}></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{exp.title}</h4>
                        <p className="text-base-content/60">{exp.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-2xl text-base-content mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                  Projects
                </h3>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="p-4 bg-base-200 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">{project.name}</h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tech.split(', ').map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-base-100 text-base-content text-xs rounded border border-base-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-base-content/60 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills Section */}
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-2xl text-base-content mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Skills
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2 text-base-content/70">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript", "React.js", "Next.js"].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-base-content text-base-100 text-xs rounded">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-base-content/70">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "PHP", "Python", "Lua"].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-base-content/70 text-base-100 text-xs rounded">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-base-content/70">Database</h4>
                    <div className="flex flex-wrap gap-2">
                      {["MySQL", "MariaDB", "MongoDB", "PostgreSQL"].map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-base-content/50 text-base-100 text-xs rounded">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-2xl text-base-content mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">มัธยมศึกษาตอนต้น</h4>
                    <p className="text-base-content/60">โรงเรียนสว่างแดนดิน</p>
                    <p className="text-base-content/50 text-sm">สว่างแดนดิน, สกลนคร</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body">
                <h3 className="card-title text-2xl text-base-content mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  About
                </h3>
                <p className="text-sm leading-relaxed text-base-content/60">
                  Experienced Full Stack Developer specializing in modern web technologies
                  and gaming platform development. Strong background in FiveM server
                  management and e-commerce solutions. Passionate about creating
                  user-friendly applications with clean, maintainable code.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-base-content/50">
          <p className="text-sm">© 2025 กิตติชัย มาละอินทร์ - Full Stack Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Resume