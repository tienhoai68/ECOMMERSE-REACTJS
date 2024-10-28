import React, { useContext } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishList from '@components/ContentSideBar/WishList/WishList';
import { Cart } from '@components/ContentSideBar/Cart/Cart';
const Sidebar = () => {
  const { container, overlay, sidebar, showSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);
  const handleCloseToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleRenderSidebar = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return <WishList />;
      case 'cart':
        return <Cart />;
      default:
        return <Login />;
    }
  };
  return (
    <div className={container}>
      <div
        onClick={handleCloseToggle}
        className={classNames({
          [overlay]: isOpen
        })}
      />
      <div
        className={classNames(sidebar, {
          [showSideBar]: isOpen
        })}
      >
        {isOpen && (
          <div onClick={handleCloseToggle} className={boxIcon}>
            <TfiClose />
          </div>
        )}
        {handleRenderSidebar()}
      </div>
    </div>
  );
};

export default Sidebar;
