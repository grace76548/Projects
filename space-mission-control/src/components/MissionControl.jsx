import React, {useState} from 'react';

import styles from "./MissionControl.module.css";

import MissionCard from './MissionCard.jsx';
import MissionAction from './MissionAction.jsx';
import MissionFilter from './MissionFilter.jsx';

function MissionControl ({initialMissions}) {
    
    const INITIAL_FILTER = "All";
    const [mission, setMission] = useState(initialMissions);
    const [filter, setFilter] = useState(INITIAL_FILTER);

    function updateMissionStatus (id, newStatus) {
        setMission(prevMission => prevMission.map(mission => mission.id === id ? {...mission, status: newStatus} : mission));
    }

    const filteredMissions = mission.filter(mission => filter === "All" || mission.status === filter);
    
    return (    
        <div>
            <h1>Space Mission Control</h1>

            <div className={styles.filterContainer}>
                <MissionFilter setFilter={setFilter} />

            </div>

            {filteredMissions.map(mission => {

                    const {id, name, status, crew} = mission;

                    return (
                        <div
                            key={id}
                            className={styles.missionContainer}
                        >
                        
                            <div>
                                <MissionCard
                                    name={name}
                                    status={status}
                                    crew={crew}
                                />
                            </div>
                
                            <div>
                                <MissionAction
                                    missionId={id}
                                    onUpdateMissionStatus={updateMissionStatus}
                                />
                            </div>
                        </div>    
                    );

            }
            )
            }
        </div>
    );        
}            

export default MissionControl;