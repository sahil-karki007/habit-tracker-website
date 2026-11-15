import { motion } from 'framer-motion';
import { APP_NAME, TAGLINE } from '../config';
import DownloadButton from './DownloadButton';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img className="hero-logo" src="/logo.svg" alt={`${APP_NAME} logo`} />
        <span className="hero-badge">All-in-one habit tracker</span>
        <h1>{APP_NAME}</h1>
        <p className="hero-tagline">{TAGLINE}</p>
        <p className="hero-sub">
          Track water, sleep, meals, workouts and caffeine in one place.
          Hit 100% every day and watch your streak grow.
        </p>
        <div className="hero-buttons">
          <DownloadButton />
          <a className="btn-secondary" href="#features">
            See features
          </a>
        </div>
      </motion.div>

      <motion.div
        className="phone-wrap"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="phone">
          <div className="phone-screen">
            <div className="ring">
              <span>82%</span>
            </div>
            <p className="phone-label">Today's progress</p>
            <p className="phone-streak">🔥 12 day streak</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;