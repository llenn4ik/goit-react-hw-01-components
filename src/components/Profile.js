import React from 'react';
import PropTypes from 'prop-types';


export default function  Profile({user }) {
    const { name, tag, location,avatar } = user;
    return( 
    <div className="description">
      <img
        src={avatar}
        alt="user avatar"
        class="avatar"
      />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
  
    </div>)
  }
  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }