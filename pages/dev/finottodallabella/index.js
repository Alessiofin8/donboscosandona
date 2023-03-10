import styles from './cards.module.css';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function Cards() {
  return (
    
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="https://static.vecteezy.com/system/resources/previews/005/337/802/original/icon-symbol-chat-outline-illustration-free-vector.jpg" width />
        <h4>Free Chat</h4>
        <p>Offriamo servizi di chat gratuita </p>
      </div>

      <div className={styles.card}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJlJvV1bmbDAXzq_bgIKLxdd2KNejaDiUMA&usqp=CAU"  width={50} height={50}  alt="Shield icon" />
        <h4>Verified User</h4>
        <p>Utenti verificati</p>
      </div>

      <div className={styles.card}>
        <img src="https://media.gettyimages.com/id/534450004/it/vettoriale/vettore-rosso-di-impronte-digitali.jpg?s=612x612&w=0&k=20&c=XVPA1PGaNdsdr1zzTwKsY58-umXpYZELFRH5IdbhXgY=" width />
        <h4>Fingerprint</h4>
        <p>Accesso con impronte digitali</p>
      </div>
    </div>
    
  );
  }
