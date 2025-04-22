import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="container">
      <div className="box1">
        <center>
          <img src="https://i.ibb.co/zWjjkTL6/profile-1.png" alt="Profile" />
        </center>
        <h3>My Profile</h3>
        <center>
          <button>Save</button>
        </center>
      </div>
      <div className="box2">
        <h3>Voted Promises</h3>
      </div>
      <div className="box3">
        <h3>Filed Complaints</h3>
      </div>
    </div>
  );
};

export default Profile;