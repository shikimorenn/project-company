import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="bg-black text-white w-full pt-20 pb-10 px-6 md:px-16 lg:px-28 relative"
      >
        <div className="flex flex-col md:flex-row justify-between w-full gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let’s build
              <br />
              something awesome
            </h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-14 bg-gray-500"></div>
              <span className="uppercase tracking-wide font-semibold">
                Contact
              </span>
            </div>

            <div className="space-y-2 text-gray-300">
              <p>saudio@system.com</p>
              <p>(021) 123456789</p>

              <p className="pt-4">
                saudio Building, First Floor, Jaya
                <br />
                South Jakarta City, Jakarta 12330
              </p>
            </div>

            <p className="text-sm text-gray-400 mt-12">
              © 2025 Saudio. All Rights Reserved.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="border-t border-gray-600 mt-5"
        ></motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex items-center gap-6 mt-10 mb-16"
        >
          <a
            href="https://twitter.com/Shikimoreng"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-xl
               transition-all duration-300 hover:scale-110 hover:bg-white/20"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://instagram.com/alfindraxyaka"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-xl
               transition-all duration-300 hover:scale-110 hover:bg-white/20"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/6281299004985"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-xl
               transition-all duration-300 hover:scale-110 hover:bg-white/20"
          >
            <FaWhatsapp />
          </a>
        </motion.div>
      </footer>

      <div className="w-full h-14 bg-gradient-to-r from-black via-red-800 to-red-600"></div>
    </>
  );
};

export default Footer;
