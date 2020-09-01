import React from 'react';

import Statistic from '../Statistic-profile/Statistic-profile';

import PropTypes from 'prop-types';

import s from './Profile.module.css';


const Profile = ({ name, tag, location, avatar, stats }) => {
   return (
     <div className={s.profile}>
       <div className={s.description}>
         <img src={avatar} alt="user avatar" className={s.avatar} />
         <p className={s.name}>{name}</p>
         <p className={s.tag}>@{tag}</p>
         <p className={s.location}>{location}</p>
       </div>
       <Statistic {...stats} />
     </div>
   );
 }
 export default Profile;

Profile.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};