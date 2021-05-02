import * as React from 'react';

import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Home from './pages/Home';
import { DarkTheme, LightTheme, GlobalStyles } from './themes';

const App = () => {
  const [theme, setTheme] = React.useState(LightTheme);

  const onThemeButtonClick = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header onThemeChange={onThemeButtonClick} />
      <main>
        <Home />
      </main>
    </ThemeProvider>
  );
};

export default App;
