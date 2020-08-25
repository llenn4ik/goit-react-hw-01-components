import React from 'react';
// import stats from '../json/statistical-data.json'


function Statistics({title, stats}) {
    return (
        
<section class="statistics">
    {title&&<h2 class="title">{title}</h2>}
    <ul>
    {stats.map(({id, lable, percentage}) => (
      <li key={id}>
          <span class="label">{lable}</span>
          <span class="percentage">{percentage}%</span>
          </li>
    ))}
    </ul>
</section>
    )
}



export default Statistics