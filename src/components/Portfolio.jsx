import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="work" className="py-20 bg-gray-950 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((item) => (
          <div key={item.title} className="border border-gray-700 p-6 rounded-lg">

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

            {/* Description */}
            <p className="text-gray-300 mb-4">{item.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tech.map((t) => (
                <span key={t} className="bg-gray-800 px-3 py-1 rounded text-sm">
                  {t}
                </span>
              ))}
            </div>

            {/* ---- 3 IMAGES ---- */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {item.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${item.title} screenshot ${idx + 1}`}
                  className="w-full rounded-lg"
                />
              ))}
            </div>

            {/* ---- SCREEN RECORDING ---- */}
            {item.videos && item.videos.length > 0 && (
              <div className="mb-6">
                <video controls className="w-full rounded-lg">
                  <source src={item.videos[0]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* ---- GITHUB LINK ---- */}
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 px-5 py-2 rounded text-white hover:bg-blue-700"
            >
              View on GitHub
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}
