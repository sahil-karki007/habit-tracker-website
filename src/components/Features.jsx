import { motion } from 'framer-motion';
import './Features.css';

const FEATURES = [
  { icon: '📊', title: 'Smart Dashboard', text: 'See your calories, water, sleep and daily progress at a glance.' },
  { icon: '🏋️', title: 'Workout Splits', text: 'Pick PPL, Bro Split or Upper/Lower, or build your own custom split.' },
  { icon: '🍽️', title: 'Meal Tracking', text: 'Log meals and track calories, macros and key nutrients.' },
  { icon: '💧', title: 'Water Intake', text: 'Tap to log every glass and fill the bottle to hit your daily goal.' },
  { icon: '☕', title: 'Caffeine Control', text: 'Stay under your limit with quick-log drinks and a fill-up cup.' },
  { icon: '😴', title: 'Sleep Tracker', text: 'Log bedtime and wake time and see your sleep trends.' },
];

function Features() {
  return (
    <section id="features" className="features">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Everything you need, <span>in one app</span>
      </motion.h2>

      <div className="features-grid">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.12 }}
          >
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;