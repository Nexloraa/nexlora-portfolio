const services = [
  {
    title: "Full-Stack Web Development",
    desc: "We build scalable, secure and high-performance web applications tailored to your business needs.",
    icon: "💻",
  },
  {
    title: "AI & ML Integrations",
    desc: "Integrate intelligent features like recommendations, predictions and automation using modern AI models.",
    icon: "🤖",
  },
  {
    title: "Power BI Dashboards",
    desc: "Transform your raw data into interactive dashboards for smarter business decisions.",
    icon: "📊",
  },
  {
    title: "Chatbots & Automation",
    desc: "Automate customer support, workflows and repetitive tasks with custom AI-powered bots.",
    icon: "⚡",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

      <div className="grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-gray-50 shadow-md transform transition-all duration-300 hover:-translate-y-3 hover:shadow-xl hover:bg-indigo-50"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
