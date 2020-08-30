import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import Statistic from '../Statistic-profile/Statistic-profile';


export default function  Profile({user }) {
    const { name, tag, location,avatar } = user;
    return( 
      <div className={styles.profile}>
    <div className = {styles.description}>
      <img
        src={avatar}
        alt="user avatar"
        className={styles.avatar}
      /> 
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
       </div>
      <Statistic stats={user.stats} /> 

    </div>)
  }
  // Profile.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   avatar: PropTypes.string.isRequired,
  //   tag: PropTypes.string.isRequired,
  //   location: PropTypes.string.isRequired,
  // }