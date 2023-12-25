// SpaceXMissions.js

import React, { useState, useEffect } from 'react';

const SpaceXMissions = () => {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        setMissions(data);
      } catch (error) {
        console.error('Error fetching SpaceX missions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>SpaceX Missions</h1>
      <ul>
        {missions.map((mission) => (
          <li key={mission.mission_id}>
            <h2>{mission.mission_name}</h2>
            <p>{mission.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceXMissions;
