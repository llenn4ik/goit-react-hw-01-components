import React from 'react';

import PropTypes from 'prop-types';

import s from './FriendList.module.css'


function FriendsList({friends}) {
    return (
        <section className={s.container}>
            <ul className={s.friendsItems}>
                {friends.map(
                    ({name, avatar, isOnline, id}) =>(<li key={id} className={s.item}>
                    <span className={isOnline ? s.statusOn : s.statusOff}> </span>
                    <img className={s.avatar} src={avatar} alt="" width="48" />
                    <p className={s.name}>{name}</p>
                  </li>)
                )}
            </ul>
        </section>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default FriendsList