import React from "react";

import PropTypes from 'prop-types';

import s from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
    const isShowTitle = title;
  return (
    <section className={s.statistics}>
      {isShowTitle && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={s.listItem}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
export default Statistics;