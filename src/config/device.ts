import {Dimensions, Platform} from 'react-native';

export const IOS_DEVICE = Platform.OS === 'ios';

export const DEVICE_WINDOW_WIDTH = Dimensions.get('window').width;
export const DEVICE_WINDOW_HEIGHT = Dimensions.get('window').height;
