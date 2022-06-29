import {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  HEADER_COLOR_OUTPUT,
  HEADER_HIDDEN_THRESHOLD,
  HEADER_STATE_INPUT,
} from "~config/header";

function useExpandHeader() {
  const insets = useSafeAreaInsets();
  const background = useSharedValue("rgba(255,255,255,0)");
  const opacity = useSharedValue(0);
  const display = useSharedValue<"flex" | "none">("flex");

  const handler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      const { y } = contentOffset;
      const isHidden = y <= HEADER_HIDDEN_THRESHOLD;

      display.value = isHidden ? "none" : "flex";
      opacity.value = interpolate(y, HEADER_STATE_INPUT, [0, 1]);
      background.value = interpolateColor(
        y,
        HEADER_STATE_INPUT,
        HEADER_COLOR_OUTPUT
      );
    },
  });

  const animatedContainer = useAnimatedStyle(() => ({
    paddingTop: insets.top,
    backgroundColor: background.value,
  }));

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: opacity.value,
    display: display.value,
  }));

  const style = {
    container: animatedContainer,
    opacity: animatedOpacity,
  };

  return { handler, style };
}

export default useExpandHeader;
