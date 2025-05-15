

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Banquet Hall Booking System</h3>
              <p className="text-gray-400 mb-4">
              Created a dynamic web app for booking banquet halls online with availability checks.
            Designed user interface and integrated booking confirmation email system.
            Handled backend logic and database management for user records and schedules.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS","JavaScript","PHP","MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Online Book Hub</h3>
              <p className="text-gray-400 mb-4">
              Developed a full-stack web platform enabling users to buy, rent, and sell books.
            Implemented secure user authentication, cart functionality, and book filtering.
            Designed responsive UI using React and Bootstrap, ensuring mobile compatibility.
            Integrated MongoDB for data storage and Node.js for backend logic
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB"," Express.js", "React.js", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};
