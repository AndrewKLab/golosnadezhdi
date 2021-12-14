import { DarkTheme } from 'react-native-paper';

export const darkTheme = {
    ...DarkTheme,
    // Specify custom property in nested object
    colors: {
        ...DarkTheme.colors,
    }
  };