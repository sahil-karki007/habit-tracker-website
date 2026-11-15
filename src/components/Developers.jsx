import { motion } from 'framer-motion';
import { DEVELOPERS } from '../config';
import './Developers.css';

function Developers() {
  return (
    <section className="devs">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Meet the <span>developers</span>
      </motion.h2>

      <div className="devs-row">
        {DEVELOPERS.map((d, i) => (
          <motion.div
            key={d.name}
            className="dev-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="dev-avatar">{d.name.charAt(0)}</div>
            <h3>{d.name}</h3>
            <p>{d.role}</p>
            {d.url && (
              <a href={d.url} target="_blank" rel="noreferrer">
                View profile
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Developers;