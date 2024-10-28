import React from 'react';
import styles from './styles.module.scss';
import { dataFooter } from '@components/Header/constants';
const Footer = () => {
  const { container, boxNav } = styles;
  return (
    <div className={container}>
      <img
        src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png'
        alt=''
        width={160}
        height={55}
      />
      <div className={boxNav}>
        {dataFooter.map((item) => {
          return <div>{item.content}</div>;
        })}
      </div>
      <div>
        <p style={{ textAlign: 'center' }}>Guaranteed safe ckeckout</p>
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
          alt=''
        />
      </div>
      <div>
        Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce
        themes.
      </div>
    </div>
  );
};

export default Footer;
