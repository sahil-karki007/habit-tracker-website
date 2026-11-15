import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import './Streaks.css';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const TARGET = 7;
const DURATION = 1.4;

function Streaks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, TARGET, {
      duration: DURATION,
      ease: 'linear',
      onUpdate: (v) => setCount(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView]);

  return (
    <section className="streaks" ref={ref}>
      <motion.div
        className="streak-flame"
        animate={inView ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        🔥
      </motion.div>

      <div className="streak-number">{count}</div>
      <p className="streak-caption">day streak</p>

      <div className="streak-dots">
        {DAYS.map((d, i) => (
          <motion.div
            key={i}
            className="streak-dot"
            initial={{ backgroundColor: '#2a2a40', scale: 0.8 }}
            animate={inView ? { backgroundColor: '#2ecc71', scale: 1 } : {}}
            transition={{ delay: (i * DURATION) / TARGET, duration: 0.3 }}
          >
            {d}
          </motion.div>
        ))}
      </div>

      <h2>
        Hit 100% every day. <span>Don't break the chain.</span>
      </h2>
      <p className="streak-text">
        Finish your water, sleep, meals, schedule and workout. When your day
        reaches 100%, your streak grows by one. Reach 7 days and Hustlr
        celebrates with you. Miss a day and it starts again, so every day counts.
      </p>
    </section>
  );
}

export default Streaks;