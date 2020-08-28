import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Profile.module.css';



export default function  Profile({user }) {
    const { name, tag, location,avatar } = user;
    return( 
    <div className = "description">
      <img
        src={avatar}
        alt="user avatar"
        className="avatar"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
  
    </div>)
  }
  // Profile.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   avatar: PropTypes.string.isRequired,
  //   tag: PropTypes.string.isRequired,
  //   location: PropTypes.string.isRequired,
  // }