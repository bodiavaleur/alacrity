import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Gesture} from 'react-native-gesture-handler';
import {BOX_START_X_POSITION, BOX_START_Y_POSITION} from '~config/box';

function useMoveBox() {
  const boxX = useSharedValue(BOX_START_X_POSITION);
  const boxY = useSharedValue(BOX_START_Y_POSITION);
  const context = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: boxX.value, y: boxY.value};
    })
    .onUpdate(event => {
      const eventX = event.translationX + context.value.x;
      const eventY = event.translationY + context.value.y;

      boxX.value = eventX;
      boxY.value = eventY;
    });

  const style = useAnimatedStyle(
    () => ({
      transform: [
        {translateX: withSpring(boxX.value)},
        {translateY: withSpring(boxY.value)},
      ],
    }),
    [boxX, boxY],
  );

  return {gesture, style};
}

export default useMoveBox;
