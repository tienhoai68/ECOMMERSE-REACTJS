import React from 'react';
import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/youtubeIcon.svg';
const BoxIcon = ({ type, href }) => {
  const { boxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return insIcon;
      case 'ytb':
        return ytbIcon;
    }
  };
  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={href} />
    </div>
  );
};

export default BoxIcon;
