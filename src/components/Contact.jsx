import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Contact Me
        </h2>

        <div className="space-y-6 text-white">
          <div className="flex items-center gap-4">
            <FaPhone className="text-blue-400 text-2xl" />
            <span className="text-lg font-medium">+91 75988 27687</span>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <a
              href="https://mail.google.com/mail/?view=cm&to=navinkumar21000@gmail.com"
              target="_blank"
              class="text-lg font-medium hover:underline"
            >
              navinkumar21000@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-400 text-2xl" />
            <a
              href="https://linkedin.com/in/navin-kumar-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline"
            >
              www.linkedin.com/in/navin-kumar-s
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
