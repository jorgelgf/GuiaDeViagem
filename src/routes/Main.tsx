import { Navigate, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Welcome } from '../pages';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


export const Main = () => {
  const Theme = createTheme({});
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Navigate to='/welcome' />} />
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </ThemeProvider>
  )
};

