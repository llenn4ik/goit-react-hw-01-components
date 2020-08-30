import React from 'react';
import styles from './Statistic-profile.module.css';



export default function Statistic ({stats}) {
    const {followers, views, likes } = stats;
    return(
      
   <ul className={styles.stats}>
   <li>
     <span className={styles.label}>Followers</span>
     <span className={styles.quantity}>{followers}</span>
   </li>
   <li>
     <span className={styles.label}>Views</span>
     <span className={styles.quantity}>{views}</span>
   </li>
   <li>
     <span className={styles.label}>Likes</span>
     <span className={styles.quantity}>{likes}</span>
   </li>
 </ul>
    )}
 