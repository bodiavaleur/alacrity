import {DefaultTheme} from '@react-navigation/native';

export const DEFAULT_SPACING = 4;

export const makeSpacing = (multiplier: number) => DEFAULT_SPACING * multiplier;

export const theme = {
  colors: {
    primary: '#fffb00',
    black: '#000',
    text: '#333333',
    white: '#FFFFFF',
    gray: '#bbbbbb',
    shadow: 'rgba(0,0,0,0.1)',
    divider: '#ccc',
    warning: '#ff9800',
  },
  spacing: {
    none: 0,
    xs: makeSpacing(1),
    small: makeSpacing(2),
    regular: makeSpacing(3),
    medium: makeSpacing(4),
    large: makeSpacing(8),
  },
};

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.white,
  },
};
