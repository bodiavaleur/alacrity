import {StyleSheet} from 'react-native';
import {CARD_HEIGHT, CARD_WIDTH} from '~config/cards';

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    position: 'absolute',
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
