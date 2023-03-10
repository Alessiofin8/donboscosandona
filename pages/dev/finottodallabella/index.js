import styles from './cards.module.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
export default function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="https://static.vecteezy.com/system/resources/previews/005/337/802/original/icon-symbol-chat-outline-illustration-free-vector.jpg" width />
        <h1>Free Chat</h1>
        <p>Offriamo servizi di chat gratuita </p>
      </div>

      <div className={styles.card}>
        <img src="" alt="Image 2" />
        <p>SICUREZZA</p>
      </div>

      <div className={styles.card}>
        <img src="https://img.freepik.com/premium-vector/finger-print-fingerprint-lock-secure-security-logo-icon-template_7688-1386.jpg" width />
        <p>Fingerprint</p>
      </div>
    </div>
    
  );
  }