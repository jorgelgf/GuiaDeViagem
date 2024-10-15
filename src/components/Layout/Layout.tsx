import { ReactNode } from 'react'
import { Box } from '@mui/material'
import '../Animation.scss'
interface IChildrenProps {
  children: ReactNode;
}

export const Layout = ({ children }: IChildrenProps) => {
  return (
    <Box className='classLayout'>
      {children}
    </Box>)
}



