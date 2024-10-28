import React from 'react';
import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import viewIcon from '@icons/svgs/viewIcon.svg';
const ProductItem = ({ src, prevSrc, name, price }) => {
  const { boxImg, showImgWhenHover, showIconAction, boxIcon, title, desPrice } =
    styles;
  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt='' />
        <img className={showImgWhenHover} src={prevSrc} alt='' />
        <div className={showIconAction}>
          <div className={boxIcon}>
            <img src={cartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={reLoadIcon} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={viewIcon} alt='' />
          </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={desPrice}>{price}</div>
    </div>
  );
};

export default ProductItem;
