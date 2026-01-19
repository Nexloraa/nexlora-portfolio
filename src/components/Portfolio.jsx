import { useState } from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="work" className="py-20 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-5 rounded-xl shadow-lg"
          >
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full rounded-lg cursor-pointer hover:opacity-80 transition"
              onClick={() => setSelectedImage(item.images[0])}
            />

            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-gray-300 mt-2">{item.description}</p>

            <a
              href={item.github}
              target="_blank"
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              View on GitHub →
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
