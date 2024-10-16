import { ReactNode } from 'react';
import { Box } from '@mui/material';
import '../../Animation/Animation.scss';
import { Header } from '../header/Header';
interface IChildrenProps {
  children: ReactNode;
}

export const Layout = ({ children }: IChildrenProps) => {

  window.scrollTo(0, 0);

  return (
    <Box className='animation'>
      <Header />
      {children}
    </Box>)
}



