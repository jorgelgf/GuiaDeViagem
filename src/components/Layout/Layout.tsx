import { ReactNode } from 'react'
import { Box } from '@mui/material'

interface IChildrenProps {
  children: ReactNode;
}

export const Layout = ({ children }: IChildrenProps) => {

  return (
    <Box style={{ width: '100vw' }}>
      {children}
    </Box>)
}