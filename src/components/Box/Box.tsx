import React from 'react';
import styles from './styles';
import Animated from 'react-native-reanimated';
import {StyleProp, ViewStyle} from 'react-native';
import {Text} from 'native-base';

interface BoxProps {
  label: string;
  style?: StyleProp<ViewStyle>;
}

const Box: React.FC<BoxProps> = ({label, style}) => {
  return (
    <Animated.View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
    </Animated.View>
  );
};

export default Box;
