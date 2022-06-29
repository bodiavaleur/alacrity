import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import Animated, {SlideInDown} from 'react-native-reanimated';
import {CARD_IMAGE_URL} from '~components/Card/config';
import useSwipeCard from '~hooks/useSwipeCard';
import {GestureDetector} from 'react-native-gesture-handler';

interface CardProps {
  index: number;
}

const Card: React.FC<CardProps> = ({index}) => {
  const card = useSwipeCard();
  const animationIn = SlideInDown.delay(index * 250);

  return (
    <GestureDetector gesture={card.gesture}>
      <Animated.View
        style={[styles.container, card.style]}
        entering={animationIn}>
        <Image source={{uri: CARD_IMAGE_URL}} style={styles.image} />
      </Animated.View>
    </GestureDetector>
  );
};

export default Card;
