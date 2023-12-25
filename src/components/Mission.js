// MyComponent.js
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        setMissions(data);
      } catch (error) {
        console.error('Error fetching missions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {missions.map((mission) => (
            <li key={mission.mission_id}>
              <strong>{mission.mission_name}</strong>: {mission.description}
              <br />
              Manufacturers: {mission.manufacturers.join(', ')}
              <br />
              Payload IDs: {mission.payload_ids.join(', ')}
              <br />
              Wikipedia: <a href={mission.wikipedia} target="_blank" rel="noopener noreferrer">{mission.wikipedia}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
