import React from 'react';
import styles from './FriendList.module.css'


function FriendsList({friends}) {
    return (
        <section className={styles.container}>
            <ul className={styles.friendsItems}>
                {friends.map(
                    ({name, avatar, isOnline, id}) =>(<li key={id} className={styles.item}>
                    <span className={isOnline ? styles.statusOn : styles.statusOff}> </span>
                    <img className={styles.avatar} src={avatar} alt="" width="48" />
                    <p className={styles.name}>{name}</p>
                  </li>)
                )}
            </ul>
        </section>
    )
}

export default FriendsList