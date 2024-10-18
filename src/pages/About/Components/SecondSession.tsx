import { Box, Typography, useTheme } from '@mui/material'
import { ReactNode } from 'react';

interface ISecondSessionProps {

  children: ReactNode
}

export const SecondSession = ({ children }: ISecondSessionProps) => {
  const constants = {
    experienceTitle: "As Melhores Experiências",
    phrase: "Viaje leve, viva o presente e volte com histórias inesquecíveis.",
  }
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
        >{constants.experienceTitle}</Typography>

        <Typography
          variant='h6'
          fontStyle='italic'
          fontWeight='300'
          textAlign='center'
          marginTop={theme.spacing(5)}
        >{constants.phrase}</Typography>
      </Box>
      {children}
    </>
  )
}