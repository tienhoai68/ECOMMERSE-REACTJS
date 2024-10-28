import React from 'react';
import Layout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { CountDownBanner } from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

const HeadlingListProduct = ({ data }) => {
  const { container, containerItem } = styles;

  return (
    <Layout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
          {data && data.length > 0 ? (
            data.map((item) => (
              <ProductItem
                key={item.id}
                src={item.images[0]}
                prevSrc={item.images[1]}
                name={item.name}
                price={item.price}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HeadlingListProduct;
