
import React from 'react';
import SpaceXMissions from './Mission';
import SpaceXRockets from './Rockets';

const MyProfile = () => {
  return (
    <div>
      <h1>My SpaceX Profile</h1>
      
      <div>
        <h2>My Missions</h2>
        <SpaceXMissions />
      </div>
      
      <div>
        <h2>My Rockets</h2>
        <SpaceXRockets />
      </div>
    </div>
  );
};

export default MyProfile;
