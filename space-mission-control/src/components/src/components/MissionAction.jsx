import styles from './MissionAction.module.css';

function MissionAction ({missionId, onupdateMissionStatus}) {
    return (
        <>
            <button
                className={styles.button}
                onClick={() => onupdateMissionStatus(missionId, "Active")}
            >
                Launch
            </button>

            <button
                className={styles.button}
                onClick={() => onupdateMissionStatus(missionId, "Completed")}
            >
                Complete
            </button>   
        </>
    );
}

export default MissionAction;