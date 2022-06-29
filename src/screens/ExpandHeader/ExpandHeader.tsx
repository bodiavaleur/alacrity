import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Layout from '~components/Layout';
import useExpandHeader from '~hooks/useExpandHeader';

const ExpandHeader: React.FC = () => {
  const header = useExpandHeader();

  return <Layout title="Expand header"></Layout>;
};

export default ExpandHeader;
