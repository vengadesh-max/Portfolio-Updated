import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Database, 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Server,
  Cloud,
  Bot,
  Zap,
  Globe,
  MessageSquare,
  FileText,
  Users
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              {['about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-blue-600 font-medium ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Photo */}
          <div className="relative mx-auto mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/chatgpt.png" 
                  alt="Vengadeshwaran B" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-2">
              Hey, I'm <span className="text-blue-600 font-semibold">Vengadeshwaran B</span>
            </h2>
          </div>

          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent pb-2">
              Software Engineer
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable backend systems and intelligent AI solutions. 
            Experienced in AI Engineering and full-stack development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-blue-100 rounded-full px-6 py-3 border border-blue-200">
              <Server className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Backend Systems</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3 border border-purple-200">
              <Brain className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">AI & ML</span>
            </div>
            <div className="flex items-center space-x-2 bg-green-100 rounded-full px-6 py-3 border border-green-200">
              <Cloud className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Cloud Architecture</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:bvengadesh25504@gmail.com"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                 I'm a Software Engineer with expertise in building scalable systems and intelligent solutions. A 2025 Computer Science graduate, highly skilled in backend development and AI engineering. 
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                 My experience includes multiple software engineering internships where I worked with technologies such as Python, React.js, Docker, AWS, Airflow, FastAPI, and AI frameworks. I thrive in solving real-world problems and designing robust, efficient backend architectures. 
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-blue-600">
                  <GraduationCap className="w-5 h-5" />
                  <span>Trichy Engineering College</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-600">
                  <MapPin className="w-5 h-5" />
                  <span>Tiruchirappalli, Tamil Nadu</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">600+</div>
                <div className="text-gray-600">Problems Solved</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">1935</div>
                <div className="text-gray-600">LeetCode Rating</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                <div className="text-gray-600">Internships</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-pink-200 shadow-sm">
                <div className="text-3xl font-bold text-pink-600 mb-2">8.5</div>
                <div className="text-gray-600">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                company: "SatSure Analytics",
                role: "Software Development Intern",
                duration: "June 2025 - Sep 2025",
                location: "Bengaluru",
                tech: ["Python", "Airflow", "AWS", "Postman", "STAC", "Retool"],
                icon: <Cloud className="w-6 h-6" />
              },
              {
                company: "Afame Technologies",
                role: "Software Engineer Intern",
                duration: "Oct 2024 - Nov 2024",
                location: "Remote",
                tech: ["Python", "OOPS", "Design Patterns"],
                icon: <Code2 className="w-6 h-6" />
              },
              {
                company: "GrapplTech",
                role: "Software Developer Intern",
                duration: "Sep 2024 - Oct 2024",
                location: "Remote",
                tech: ["React.js", "JavaScript", "GitHub", "HTML", "CSS"],
                icon: <Globe className="w-6 h-6" />
              },
              {
                company: "VDart",
                role: "Summer Intern",
                duration: "July 2023 - Aug 2023",
                location: "Tiruchirappalli, Tamil Nadu",
                tech: ["Python", "ML", "Pandas", "Numpy", "Matplotlib", "TensorFlow"],
                icon: <Brain className="w-6 h-6" />
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg text-white">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm bg-blue-100 px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hobby Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a 
              href="https://github.com/vengadesh-max/Chat-application"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-lg text-white">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Chat Application</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Engineered a real-time chat web app using React and WebSockets, achieving 90% faster message-sharing speed 
                and boosting user engagement by 40%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Express.js", "Socket.io", "Node.js", "MongoDB", "JavaScript"].map((tech, index) => (
                  <span key={index} className="bg-green-100 border border-green-200 text-green-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>• 50% increase in collaboration</span>
                <span>• Real-time messaging</span>
              </div>
            </a>

            <a 
              href="https://github.com/vengadesh-max/AskMyDoc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg text-white">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">AskMyDoc</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AI-powered document querying system with FastAPI and React, featuring Google Generative AI embeddings 
                and FAISS for high-speed similarity search.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["FastAPI", "LangChain", "Generative AI", "FAISS", "React.js"].map((tech, index) => (
                  <span key={index} className="bg-purple-100 border border-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>• 30% better engagement</span>
                <span>• Under 8s response time</span>
              </div>
            </a>

            <a 
              href="https://github.com/vengadesh-max/AI-Powered-Meeting-Info-Extractor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">AI Meeting Info Extractor</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AI-powered tool that extracts key information from meeting recordings and transcripts, 
                automatically generating summaries, action items, and insights.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "AI", "NLP", "Machine Learning", "Data Processing"].map((tech, index) => (
                  <span key={index} className="bg-blue-100 border border-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>• Automated insights</span>
                <span>• Meeting summaries</span>
              </div>
            </a>

            <a 
              href="https://github.com/vengadesh-max/Scribo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg text-white">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Scribo</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A Medium-like blogging platform that enables users to create, publish, and discover engaging content 
                with a clean, intuitive interface and powerful writing tools.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"].map((tech, index) => (
                  <span key={index} className="bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>• Content publishing</span>
                <span>• User engagement</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Code2 className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">Languages</h3>
              </div>
              <div className="space-y-2">
                {["Python", "Java", "JavaScript", "SQL"].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-green-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Server className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-800">Backend</h3>
              </div>
              <div className="space-y-2">
                {["Django", "Node.js", "FastAPI", "MongoDB"].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-800">AI & ML</h3>
              </div>
              <div className="space-y-2">
                {["TensorFlow", "LangChain", "FAISS", "Generative AI"].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-yellow-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-800">Tools</h3>
              </div>
              <div className="space-y-2">
                {["Docker", "Git", "AWS", "Linux"].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-yellow-600" />
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Competitive Programming",
                description: (
                  <span>
                    Solved 600+ problems across LeetCode and CodeChef with max rating of 1935 on{' '}
                    <a 
                      href="https://leetcode.com/u/Vengadesh_25/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      LeetCode
                    </a>
                  </span>
                ),
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "National Project Expo Recognition",
                description: "Shortlisted among top 10% students in SCIMIT-2024 National level project expo",
                color: "from-green-500 to-blue-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Professional Certifications",
                description: "Cloud Infrastructure (Oracle), Data Analytics (Udemy), and OOP (Infosys)",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Hackathon",
                description: "Top 15% out of 6000 participants in Cosmocloud Low Code Hackathon",
                color: "from-blue-500 to-purple-500"
              }
            ].map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${achievement.color} mb-4 text-white`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{achievement.title}</h3>
                <div className="text-gray-600 leading-relaxed">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-blue-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to build something amazing together? Let's discuss your next project!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:bvengadesh25504@gmail.com"
              className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300 text-white">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600">bvengadesh25504@gmail.com</p>
            </a>

            <a
              href="tel:+91-6380542192"
              className="bg-white rounded-xl p-6 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300 text-white">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Phone</h3>
              <p className="text-gray-600">+91-6380542192</p>
            </a>

            <div className="bg-white rounded-xl p-6 border border-purple-200 shadow-sm">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg inline-flex mb-4 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Location</h3>
              <p className="text-gray-600">Tiruchirappalli, Tamil Nadu</p>
            </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/vengadesh-max?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110 text-white shadow-lg"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vengadeshb/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 p-4 rounded-full transition-all duration-300 transform hover:scale-110 text-white shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500">
           Crafted with passion for backend engineering and AI innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;