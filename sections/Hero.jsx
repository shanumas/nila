"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
const copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => alert(`Copied: ${text}`))
    .catch((err) => console.error("Copy failed:", err));
};

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-white">
        Click icons to CALL, MESSAGE, GOOGLE MAPS
        <div className="hidden">
          <span>0762739173</span>
          <button onClick={() => copyToClipboard("0762739173")} title="Copy">
            📋
          </button>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span>Folkvisegatan 2</span>
          <button
            onClick={() => copyToClipboard("Folkvisegatan 2")}
            title="Copy"
          >
            📋
          </button>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span>Balladgatan bus stop</span>
          <button
            onClick={() => copyToClipboard("Balladgatan bus stop")}
            title="Copy"
          >
            📋
          </button>
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            padding: "12px",
          }}
        >
          <a
            href="tel:0762739173"
            style={{ fontSize: "50px", textDecoration: "none" }}
            aria-label="Call"
          >
            📞
          </a>
          <a
            href="https://wa.me/46762739173"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "50px", textDecoration: "none" }}
            aria-label="WhatsApp"
          >
            💬
          </a>
          <a
            href="https://www.google.com/maps?q=Folkvisegatan+2,+Gothenburg,+Sweden"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "50px", textDecoration: "none" }}
            aria-label="Location"
          >
            📍
          </a>
        </div>
        <div>
          <span>0762739173</span>
          <button
            onClick={() => copyToClipboard("0762739173")}
            title="Copy"
            style={{
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
          Copy Number
          </button>
        </div>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          NILA
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] sm:-top-[20px] -top-[10px]" />
        <img
          src="/cover.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
            <motion.img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 7, repeatType: "loop" }}
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
