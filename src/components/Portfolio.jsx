import { useState } from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="work" className="py-20 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>

            {/* ---- ALL IMAGES GRID ---- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${item.title} screenshot ${i + 1}`}
                  className="w-full rounded-lg cursor-pointer hover:opacity-80 transition"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* GitHub button */}
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 px-5 py-2 rounded text-white hover:bg-blue-700"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {/* FULL-SCREEN IMAGE VIEWER */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            alt="Enlarged view"
          />
        </div>
      )}
    </section>
  );
}
