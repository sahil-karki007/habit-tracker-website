import { APP_NAME, DEVELOPERS } from '../config';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '32px 24px', color: 'var(--muted)', fontSize: '0.85rem' }}>
      © {new Date().getFullYear()} {APP_NAME}. Built by {DEVELOPERS.map((d) => d.name).join(' & ')}.
    </footer>
  );
}

export default Footer;