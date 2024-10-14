import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from '../pages'; import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const Main = () => {


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </ThemeProvider>
  )
}