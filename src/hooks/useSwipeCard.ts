import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture} from 'react-native-gesture-handler';
import {snapPoint} from 'react-native-redash';
import {
  CARD_OPACITY_OUTPUT,
  CARD_ROTATION_DEG,
  CARD_ROTATION_OUTPUT,
  CARD_SNAP_POINTS,
  CARD_START_X_POSITION,
  CARD_START_Y_POSITION,
} from '~config/cards';

function useSwipeCard() {
  const translateX = useSharedValue(CARD_START_X_POSITION);
  const translateY = useSharedValue(CARD_START_Y_POSITION);
  const rotateZ = useSharedValue((Math.random() - 0.5) * CARD_ROTATION_DEG);
  const opacity = useSharedValue(1);
  const context = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      const {translationX, translationY} = event;
      const nextX = translationX + context.value.x;
      const nextY = translationY + context.value.y;

      translateX.value = nextX;
      translateY.value = nextY;

      rotateZ.value = interpolate(
        translationX,
        CARD_SNAP_POINTS,
        CARD_ROTATION_OUTPUT,
      );

      opacity.value = interpolate(
        translationX,
        CARD_SNAP_POINTS,
        CARD_OPACITY_OUTPUT,
      );
    })
    .onEnd(event => {
      const {translationX, velocityX} = event;
      const nextX = translationX + context.value.x;
      const snap = snapPoint(nextX, velocityX, CARD_SNAP_POINTS);
      const isSwipeLeft = snap < 0;
      const isSwipeRight = snap > 0;

      if (isSwipeLeft || isSwipeRight) {
        translateX.value = withTiming(snap);
      } else {
        translateX.value = withTiming(CARD_START_X_POSITION);
        rotateZ.value = withTiming(0);
        opacity.value = withTiming(1);
      }
    });

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {translateX: translateX.value},
      {translateY: translateY.value},
      {rotateZ: `${rotateZ.value}deg`},
    ],
  }));

  return {gesture, style};
}

export default useSwipeCard;
