import { APK_READY, DOWNLOAD_URL } from '../config';

function DownloadButton({ className = '' }) {
  if (!APK_READY) {
    return (
      <span className={`btn-primary ${className}`} style={{ opacity: 0.7, cursor: 'default' }}>
        Coming soon
      </span>
    );
  }

  return (
    <a className={`btn-primary ${className}`} href={DOWNLOAD_URL} download>
      Download for Android
    </a>
  );
}

export default DownloadButton;