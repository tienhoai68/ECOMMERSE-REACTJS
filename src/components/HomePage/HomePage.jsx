import Banner from '@components/Banner/Banner';
import Header from '@components/Header/Header';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Info from '@components/Info/Info';
import { AdvanceHeading } from '@components/AdvanceHeading/AdvanceHeading';
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct';
import { getProduct } from '@components/apis/productService';
import { PopularProduct } from '@components/PopularProduct/PopularProduct';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';
import Footer from '@components/Footer/Footer';

const HomePage = () => {
  const { container } = styles;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct().then((res) => {
      setProduct(res.contents);
    });
  }, []);

  return (
    <>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHeading />
        <HeadlingListProduct data={product.slice(0, 2)} />
        <PopularProduct data={product.slice(2, product.length)} />
        <SaleHomePage />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
