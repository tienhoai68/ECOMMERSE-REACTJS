import { dataInfo } from '@components/Info/constants';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import Layout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';

const Info = () => {
  const { container } = styles;
  return (
    <Layout>
      <div className={container}>
        {dataInfo.map((item, index) => {
          return (
            <InfoCard
              content={item.title}
              description={item.description}
              src={item.src}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Info;
