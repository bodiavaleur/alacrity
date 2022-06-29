import {StyleSheet} from 'react-native';
import {BOX_SIZE} from '~config/box';

const styles = StyleSheet.create({
  container: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: 'rgb(0,122,255)',
  },
  label: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
