'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { StartSteps, TitleText, TypingText } from '../components';

import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
  src="/metaverse.png"
  alt="Get-Started"
  className="w-[90%] h-[90%] object-contain rounded-2xl border-4 border-pink-300 shadow-lg m-4"
/>

      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How to book " />
<TitleText
  title={
    <>
      <a
        href="tel:0762739173"
        style={{
          display: 'block',
          padding: '8px 0',
          borderBottom: '1px solid #ccc',
          textDecoration: 'none',
        }}
      >
        📞 Call: 0762739173
      </a>
      <a
        href="https://wa.me/46762739173"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          padding: '8px 0',
          borderBottom: '1px solid #ccc',
          textDecoration: 'none',
        }}
      >
        💬 Message on WhatsApp
      </a>
      <a
        href="https://www.google.com/maps?q=Folkvisegatan+2,+Gothenburg,+Sweden"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          padding: '8px 0',
          textDecoration: 'none',
        }}
      >
        Dropin 📍 Folkvisegatan 2, Gothenburg, Sweden
      </a>
    </>
  }
/>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
