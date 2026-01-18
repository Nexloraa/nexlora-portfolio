export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 text-center py-6 text-sm">
      © {new Date().getFullYear()} Nexlora. All rights reserved.
      <p className="mt-2">
  Follow us: 
  <a 
    href="https://www.linkedin.com/company/nexlora-tech-solutions/" 
    target="_blank" 
    className="text-indigo-400 hover:underline ml-2"
  >
    LinkedIn
  </a>
</p>

    </footer>
  );
}

