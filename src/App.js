import './assets/styles/App.css';
import { ThemeProvider } from 'styled-components';
import ThemeToggler from './components/ThemeToggler';
import useDarkMode from './hooks/useDarkMode';
import { GlobalStyles } from './themes/global';
import { lightTheme } from './themes/lightTheme';
import { darkTheme } from './themes/darkTheme';
import MainLayout from './layout/MainLayout';

function App() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if(!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <MainLayout theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
