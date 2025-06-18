import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, BrainCircuit, TimerReset } from "lucide-react";

const benefits = [
  {
    icon: <Lightbulb className="w-10 h-10 text-yellow-400" />,
    title: "Solusi Lebih Cerdas",
    desc: "Berpikir kritis membantu menemukan solusi yang lebih tepat dan tidak terburu-buru.",
  },
  {
    icon: <BrainCircuit className="w-10 h-10 text-purple-400" />,
    title: "Analisis Lebih Dalam",
    desc: "Melatih otak untuk menelaah fakta dan data dengan lebih akurat dan terstruktur.",
  },
  {
    icon: <TimerReset className="w-10 h-10 text-blue-400" />,
    title: "Keputusan Lebih Cepat",
    desc: "Waktu adalah segalanya. Ambil keputusan dengan cepat tanpa mengorbankan kualitas.",
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-yellow-400 text-transparent bg-clip-text shadow-lg">
          Mengapa Berpikir Kritis Itu Penting?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
          Di tengah derasnya arus informasi, kemampuan untuk berpikir cepat dan kritis
          menjadi keunggulan utama dalam dunia profesional maupun kehidupan sehari-hari.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-12">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:scale-105 hover:bg-gray-700 transition-transform duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;

