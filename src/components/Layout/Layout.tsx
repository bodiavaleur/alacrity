import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({title, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;
