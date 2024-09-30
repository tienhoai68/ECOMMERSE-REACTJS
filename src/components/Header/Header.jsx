import React from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu/menu';
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

const Header = () => {
  const {
    containerHeader,
    containerBoxIcon,
    containerBoxMenu,
    containerBox,
    container
  } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => {
              return <BoxIcon key={index} type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerBoxMenu}>
            {dataMenu.slice(0, 3).map((item, index) => {
              return <Menu key={index} content={item.type} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt='Logo'
            style={{
              width: '153px',
              height: '53px'
            }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerBoxMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => {
              return <Menu key={index} content={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reLoadIcon} alt='reLoadIcon' />
            <img width={26} height={26} src={heartIcon} alt='heartIcon' />
            <img width={26} height={26} src={cartIcon} alt='cartIcon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
