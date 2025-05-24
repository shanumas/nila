'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';

const pricingList = [
  { service: 'Facial', price: '200 kr' },
  { service: 'Threading', price: '60 kr' },
  { service: 'Haircut', price: '150 kr' },
  { service: 'Nails', price: '100 kr' },
  { service: 'Detan', price: '100 kr' },
];

const Explore = () => {
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
      >
        <TypingText title="| Services" textStyles="text-center" />
        <TitleText title={<>Our Pricing List</>} textStyles="text-center" />

        <div className="mt-10 w-full max-w-md bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg text-white">
          {pricingList.map((item, idx) => (
            <div key={idx} className="flex justify-between py-2 border-b border-white/20 last:border-b-0">
              <span className="font-medium">{item.service}</span>
              <span className="font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
