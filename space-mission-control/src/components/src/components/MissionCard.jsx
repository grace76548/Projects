import stayles from './MissionCard.module.css';

function MissionCard ({name, status, crew}) {
    return (
    <>
        <h2 className={Styles.title}>{name}</h2>

        <p className={Styles.detail}>Status: {status}</p>
        <p className={Styles.detail}>Crews: {crew.join(", ")}</p>
    </>
    );
}

export default MissionCard;