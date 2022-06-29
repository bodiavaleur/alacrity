import React from 'react';
import Layout from '~components/Layout';
import Card from '~components/Card';

const Cards: React.FC = () => {
  const deck = [...Array(6).keys()];

  return (
    <Layout title="Cards">
      {deck.map((_, index) => (
        <Card key={index} index={index} />
      ))}
    </Layout>
  );
};

export default Cards;
