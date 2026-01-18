export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p className="mb-4">
        © {new Date().getFullYear()} Nexlora — Built with ❤️ by Team Nexlora.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="https://www.fiverr.com/s/P2B1GyG"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Fiverr
        </a>

        <a
          href="https://www.linkedin.com/company/nexlora-tech-solutions/about/"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Nexloraa"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
