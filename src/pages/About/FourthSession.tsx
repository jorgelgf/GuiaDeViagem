import { Box, Button, Typography, useTheme } from '@mui/material'
import { ImageCircle } from '../../components'

export const FourthSession = () => {
  const theme = useTheme();
  const constants = {
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/4b1c4d6b735c5a1aa91cc8f1/fgfgf.jpg',
    alt: 'Fazenda com grandes montanhas na Europa',
    title: 'Visite Outros Países',
    phrase: 'Sua próxima viagem está a um clique de distância. Explore culturas, saboreie novas delícias e crie memórias inesquecíveis. Embarque na sua melhor jornada agora!',
    textButton: 'SAIBA MAIS'
  }
  return (
    <Box
      width='100%'
      height='auto'
      bgcolor='#C4D6DC'
      display='flex'
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        height={{ xs: theme.spacing(50), md: 'auto' }}
        marginTop={{ xs: theme.spacing(25), md: 'auto' }}
        width={1}
        zIndex={1}
      >
        <ImageCircle src={constants.img} alt={constants.alt} />
      </Box>
      <Box
        width={1}
        height={{ xs: theme.spacing(55), md: '100vh' }}
        display='flex'
        alignItems='center'
        justifyContent='flex-start'

      >
        <Box
          paddingX={theme.spacing(5)}
          display='flex'
          alignItems='flex-start'
          flexDirection='column'
          height={{ xs: 'auto', md: theme.spacing(50) }}
          bgcolor='white'
          padding={6}
        >
          <Typography zIndex={3}
            textAlign='end' variant='h2' fontWeight={600}>{constants.title}</Typography>
          <Typography textAlign='end' maxWidth={theme.spacing(55)}
          >{constants.phrase}
          </Typography>
          <Button
            sx={{
              zIndex: 2,
              backgroundColor: 'transparent',
              border: 'solid .8px',
              color: 'grey',
              padding: '1rem 2rem',
              marginTop: theme.spacing(2),
              '&:hover': {
                color: 'white',
                backgroundColor: 'grey'
              }
            }}
          >{constants.textButton}</Button>
        </Box>

      </Box>
    </Box >
  )
}