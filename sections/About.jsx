'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title="| About NILA"
        textStyles="text-center"
      />

      <motion.p
  variants={fadeIn('up', 'tween', 0.2, 1)}
  className="mt-[8px] font-normal sm:text-[28px] text-[18px] text-center text-secondary-white"
>
  <span className="font-extrabold">NILA </span> offers budget-friendly 💰 beauty services like eyebrow-threading, hair-cuts ✂️, facials 💆‍♀️ & manicures 💅 with pro care 🌟.
</motion.p>


      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
