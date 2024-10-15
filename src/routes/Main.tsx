import { Navigate, Route, Routes } from "react-router-dom";
import { Home, Welcome } from '../pages';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



export const Main = () => {
  const Theme = createTheme({
    typography: {
      fontFamily: 'roboto'
    },
    palette: {
      mode: 'light',
    },
  });


  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />


      <Routes>
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/Home' element={<Home />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </ThemeProvider>
  )
};

