import { motion } from 'framer-motion';
import { APP_NAME, DOWNLOAD_URL } from '../config';
import './Download.css';

const STEPS = [
  'Tap the download button and save the APK.',
  'Open the file. If Android asks, allow installs from this source.',
  'Tap Install, open the app and create your account.',
];

function Download() {
  return (
    <section id="download" className="download">
      <motion.div
        className="download-box"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          Ready to build your <span>streak?</span>
        </h2>
        <p className="download-sub">
          Get {APP_NAME} on your Android phone and start your first 100% day today.
        </p>

        <a className="btn-primary big" href={DOWNLOAD_URL} download>
          Download for Android
        </a>

        <ol className="download-steps">
          {STEPS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}

export default Download;