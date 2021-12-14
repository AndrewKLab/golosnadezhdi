import { DefaultTheme } from 'react-native-paper';

export const lightTheme = {
    ...DefaultTheme,
    // Specify custom property in nested object
    colors: {
        ...DefaultTheme.colors,
    }
  };