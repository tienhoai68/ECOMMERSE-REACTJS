import React, { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SidebarProvider';

const Menu = ({ content, href }) => {
  const { menu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const handleClickShowLogin = () => {
    setIsOpen(true);
    setType('login');
  };
  return (
    <div onClick={() => handleClickShowLogin()} className={menu}>
      {content}
    </div>
  );
};

export default Menu;
