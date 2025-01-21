import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Terminal, Database, Code2, Server, Cpu,  Cloud, Github as Git, Monitor, Boxes } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Python', icon: <Terminal className="w-6 h-6" />, level: '95%' },
    { name: 'Django/Flask', icon: <Server className="w-6 h-6" />, level: '90%' },
    { name: 'SQL/PostgreSQL', icon: <Database className="w-6 h-6" />, level: '85%' },
    { name: 'React/JavaScript', icon: <Code2 className="w-6 h-6" />, level: '80%' },
    { name: 'Machine Learning', icon: <Cpu className="w-6 h-6" />, level: '75%' },
  ];

  const techStack = [
    {
      category: "Frontend",
      icon: <Monitor className="w-8 h-8 text-blue-400" />,
      technologies: ["React.js", "Bootstrap", "TailwindCSS"]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 text-green-400" />,
      technologies: ["Flask", "Django", "FastAPI"]
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      technologies: ["MYSQL", "MongoDB"]
    },
    {
      category: "Deployment",
      icon: <Cloud className="w-8 h-8 text-orange-400" />,
      technologies: ["Docker", "AWS", "Netlify","Vercel"]
    },
    {
      category: "Version Control",
      icon: <Git className="w-8 h-8 text-red-400" />,
      technologies: ["Git", "GitHub"]
    },
    {
      category: "Additional Tools",
      icon: <Boxes className="w-8 h-8 text-yellow-400" />,
      technologies: ["Celery", "Redis", "Pytest"]
    }
  ];

  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'Built with Python, Django, and machine learning for smart task prioritization',
      image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?auto=format&fit=crop&q=80&w=2072'
    },
    {
      title: 'E-Learning Platform',
      description: 'Full stack application with Django REST Framework and React',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1974'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Real-time data visualization using Python, Flask, and D3.js',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Previous hero section content remains the same */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold animate-fadeInUp">
                  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 hover:text-slate-600">
                    Hello, I'm Vivek
                  </span>
                </h1>
                <h2 className="text-3xl text-gray-300 animate-fadeInUp">
                  Python Full Stack Developer
                </h2>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed animate-fadeInUp">
                Transforming ideas into elegant solutions through code. Specialized in building 
                scalable web applications with Python, Django, and modern frontend technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 hover:border-blue-400 transition-colors"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                <a 
                  href="#contact" 
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get in Touch
                </a>
                <div className="flex items-center gap-4">
                  <a href=" https://github.com/viewz18?tab=repositories" className="hover:text-blue-400 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/vivek-shukla-3b2968347/" className="hover:text-blue-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:vivek1809.kyn@gmail.com" className="hover:text-blue-400 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
              <img 
                src="/vivek.jpg"
                alt="Vivek Shukla"
                className="relative w-72 h-72 rounded-full mx-auto object-cover border-4 border-gray-800 shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Tools and Technologies Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-12 text-center">Tools & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 hover:border-blue-400 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-400">Bachelor of Engineering in Computer Science</h3>
            <p className="text-gray-300 mt-2">2021 - 2025</p>
            <p className="text-gray-400 mt-2">
              Focused on core computer science concepts, data structures, algorithms, and modern web technologies.
              During my academic journey, I developed a strong foundation in software engineering principles
              and gained hands-on experience through various projects and internships.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-32 text-center" id="contact">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            I'm always open to discussing new projects and opportunities.
            Let's create something amazing together!
          </p>
          <a 
            href="mailto:vivek1809.kyn@gmail.com"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Send Message
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 mt-32 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Vivek Shukla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
