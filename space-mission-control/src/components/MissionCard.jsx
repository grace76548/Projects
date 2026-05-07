import styles from './MissionCard.module.css';

function MissionCard ({name, status, crew}) {
    return (
    <>
        <h2 className={styles.title}>{name}</h2>

        <p className={styles.detail}>Status: {status}</p>
        <p className={styles.detail}>Crews: {crew.join(", ")}</p>
    </>
    );
}

export default MissionCard;