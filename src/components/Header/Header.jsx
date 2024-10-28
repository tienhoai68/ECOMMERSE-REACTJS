import React, { useContext, useEffect, useState } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu/menu';
import Logo from '@icons/images/Logo-retina.png';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@components/hooks/useScrollHandling';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SidebarProvider';

const Header = () => {
  const {
    containerHeader,
    containerBoxIcon,
    containerBoxMenu,
    containerBox,
    container,
    topHeader,
    fixedHeader
  } = styles;
  const { isOpen, setIsOpen, type, setType } = useContext(SideBarContext);
  const { scrollPosition } = useScrollHandling();
  const [fixedPositon, setFixedPositon] = useState(false);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };
  useEffect(() => {
    setFixedPositon(scrollPosition > 200 ? true : false);
  }, [[scrollPosition]]);
  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPositon
      })}
    >
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
              return (
                <Menu
                  key={index}
                  content={item.type}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              style={{
                fontSize: '20px'
              }}
              onClick={() => handleOpenSideBar('compare')}
            />
            <BsHeart
              style={{
                fontSize: '20px'
              }}
              onClick={() => handleOpenSideBar('wishlist')}
            />
            <PiShoppingCart
              style={{
                fontSize: '25px'
              }}
              onClick={() => handleOpenSideBar('cart')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
