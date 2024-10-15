import { Box, Typography, useTheme } from '@mui/material'

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      textAlign='center'
      sx=
      {{
        padding: '5%',
        background: '#333333',
        marginTop: theme.spacing(4)
      }}

    >
      <Typography letterSpacing={theme.spacing(1)} color='white'>
        Minhas informações
      </Typography>

    </Box>)

}