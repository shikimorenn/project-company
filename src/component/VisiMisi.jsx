import React from "react";
import { motion } from "framer-motion";
import image from "../assets/saudiobahan.jpeg";

const VisiMisi = () => {
  return (
    <section
      id="visimisi"
      className="w-full bg-black text-white px-6 md:px-20 py-20"
    >
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <motion.div
          className="w-full rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt="studio"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm text-gray-400 tracking-widest">Vision</h3>

          <h2 className="text-3xl font-bold mt-2 leading-snug">
            Committed to <br /> excellence
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            S.Audio aims to be the best audio system company in Indonesia. We
            are committed to creating sound solutions and acoustic environments
            founded on meaningful values—solutions that inspire the senses,
            elevate creativity, and respect the harmony between technology,
            people, and space.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm text-gray-400 tracking-widest">Mission</h3>

          <h2 className="text-3xl font-bold mt-2 leading-snug">
            Committed to <br /> excellence
          </h2>

          <p className="text-gray-300 mt-4 leading-relaxed">
            S.Audio’s mission is to create audio systems that deliver clarity,
            emotion, and immersive sound experiences by developing innovative
            and reliable solutions built on continuous research and
            technological advancement. We collaborate with communities,
            businesses, and creators to shape acoustic environments that inspire
            creativity and enrich everyday life, while upholding precision,
            integrity, and sustainability in every project and fostering a
            culture of learning and excellence within our team.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisiMisi;
