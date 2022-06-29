import React from 'react';
import {ScrollView} from 'native-base';
import MenuLink from '~components/MenuLink';
import {Routes} from '~navigation/routes';
import Layout from '~components/Layout';
import styles from './styles';

const Menu: React.FC = () => {
  return (
    <Layout title="Animations">
      <ScrollView contentContainerStyle={styles.container}>
        <MenuLink to={Routes.MoveBox} label="Move box" />
        <MenuLink to={Routes.Cards} label="Cards" />
        <MenuLink to={Routes.ExpandHeader} label="Expand header" />
        <MenuLink to="" label="Cards" />
      </ScrollView>
    </Layout>
  );
};

export default Menu;
