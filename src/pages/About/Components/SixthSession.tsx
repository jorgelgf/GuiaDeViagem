import { Box, Typography, useTheme } from '@mui/material'

export const SixthSession = () => {
  const theme = useTheme();
  return (
    <Box
      width={1}
      height='100vh'
      display='flex'
      justifyContent='start'
      alignItems='center'
      flexDirection='column'    >
      <Box
        marginTop={theme.spacing(5)}
        display='flex'
        flexDirection='column'
        height='30%'
        textAlign='center'>
        <Typography variant='h2' fontWeight={600}>MEU TITULO</Typography>
        <Typography>Frases menores aqui</Typography>

      </Box>
      <Box
        border='solid black'
        width='100%'
        display='flex'
        alignItems='center'
        justifyContent='center'
        height={1}
      >
        test

      </Box>

    </Box>
  )
}