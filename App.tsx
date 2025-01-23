import React from 'react';
import { Provider as PaperProvider,MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee', // Customize primary color
    accent: '#03dac4',  // Customize accent color
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#bb86fc', // Customize primary color for dark theme
    accent: '#03dac4',  // Customize accent color for dark theme
  },
};

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <PaperProvider theme={isDarkTheme ? darkTheme : theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;