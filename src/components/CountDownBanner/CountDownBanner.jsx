import React from 'react';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountDownTimer/CountDownTimer';
import Button from '@components/Button/Button';

export const CountDownBanner = () => {
  const { container, containerTimmer, title, boxBtn } = styles;
  const targetDate = '2025-12-31T00:00:00';
  return (
    <div className={container}>
      <div className={containerTimmer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The classics make a comeback</p>
      <div className={boxBtn}>
        <Button content={'Buy now'} />
      </div>
    </div>
  );
};
