import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6 text-gray-300">Let’s build something amazing together 🚀</p>

      <div className="flex justify-center gap-6 text-xl">
        <p>Email: <span className="text-indigo-400">nexloraindia@gmail.com</span></p>
        <a
          href="https://www.linkedin.com/company/nexlora-tech-solutions/"
          target="_blank"
          className="text-indigo-400 hover:text-indigo-300 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </section>
  );
}
