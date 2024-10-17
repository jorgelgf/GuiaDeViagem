import { Box, Typography, useTheme } from '@mui/material'
import { ReactNode } from 'react';

interface ISecondSessionProps {
  experienceTitle: string,
  phrase: string,
  children: ReactNode
}

export const SecondSession = ({ experienceTitle, phrase, children }: ISecondSessionProps) => {
  const theme = useTheme();

  return (
    <>
      <Box
        height='50vh'
        display='flex'
        alignItems='Center'
        justifyContent='Center'
        flexDirection='column'
      >
        <Typography
          fontWeight='500'
          variant='h2'
          textAlign='center'
        >{experienceTitle}</Typography>

        <Typography
          variant='h6'
          fontStyle='italic'
          fontWeight='300'
          textAlign='center'
          marginTop={theme.spacing(5)}
        >{phrase}</Typography>
      </Box>
      {children}
    </>
  )
}