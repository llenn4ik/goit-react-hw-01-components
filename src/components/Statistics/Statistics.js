import React from 'react';
// import stats from '../json/statistical-data.json'
import styles from './Statistics.module.css';

function Statistics({title, stats}) {
    return (
        
<section className={styles.statistics}>
    {title&&<h2 className={styles.title}>{title}</h2>}
    <ul className={styles.statList}>
    {stats.map(({id, label, percentage}) => (
      <li key={id} className={styles.li}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
          </li>
    ))}
    </ul>
</section>
    )
}



export default Statistics