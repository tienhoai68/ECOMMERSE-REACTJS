import React from 'react';
import styles from './styles.module.scss';
import Layout from '@components/Layout/Layout';
import ProductItem from '@components/ProductItem/ProductItem';

export const PopularProduct = ({ data }) => {
  const { container } = styles;
  return (
    <Layout>
      <div className={container}>
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
    </Layout>
  );
};
