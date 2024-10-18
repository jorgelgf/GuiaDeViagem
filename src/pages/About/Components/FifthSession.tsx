import { Box, Button, Typography, useTheme } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex';


export const FifthSession = () => {
  const theme = useTheme();

  const constants = {
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3073a5b603d2512ca693656b/photo-1602836948295-14b195efa63d.jpg',
    alt: 'Casa estilo holandesa cor laranja com uma bela montanha ao fundo, tudo muito simples',
    textButton: 'RESERVE AGORA',
    title: 'Seu Passeio',
    phrase: 'Se encante com o lugares únicos, experiências memoráveis'

  };
  const styleLargeImage = {
    width: theme.spacing(50),
    height: theme.spacing(50),
    borderRadius: '50%',
    border: `${theme.spacing(2)} solid white`
  };

  const styleSmallImage = {
    zIndex: 1,
    marginRight: -125,
    marginTop: theme.spacing(35),
    borderRadius: '50%',
    width: theme.spacing(20),
    height: theme.spacing(20)
  };



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
        width={1}
      >
        <img style={styleSmallImage}
          src={constants.img} alt={constants.alt} />
        <img style={styleLargeImage}
          src={constants.img} alt={constants.alt} />

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