import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/book.module.css';

const Progress = ({ percentage, circleWidth }) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage);
  const displayPer = Math.trunc(percentage * 100);
  return (
    <div className={styles.ProgressDiv}>
      <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
        <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth="15px" r={radius} className={styles.circleBG} />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className={styles.circleProgress}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <p x="50%" y="50%" dy="0.3em" textAnchor="middle" className={styles.ProgressPer}>{`${displayPer}%`}</p>
      <p className={styles.CompText}>Completed</p>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
  circleWidth: PropTypes.string.isRequired,
};

export default Progress;
