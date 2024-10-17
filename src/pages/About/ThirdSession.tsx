import { Box, Button, Typography, useTheme } from '@mui/material'
import { ImageCircle } from '../../components';

export const ThirdSession = () => {
  const constants = {
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/47ea5573c9725790814dd1b4/vbbv.jpg',
    alt: 'imagem com montanhas com geleiras, próximo tem casas simples estilo europeu de cores vermelhas'
  }
  const theme = useTheme();
  return (
    <Box
      height='100vh'
      display={{ md: 'flex', xs: 'column' }}
    >
      <Box
        width='100%'
        paddingLeft={theme.spacing(8)}
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Typography variant='h2' fontWeight={600}>Sua Melhor Jornada</Typography>
        <Typography maxWidth={theme.spacing(75)}>
          Venha descobrir as melhores aventuras com os melhores momentos!
          Venha descobrir as melhores aventuras com os melhores momentos!
          Venha descobrir as melhores aventuras com os melhores momentos!
          Venha descobrir as melhores aventuras com os melhores momentos!
        </Typography>
        <Box marginTop={theme.spacing(4)}>
          <Button
            sx={{
              color: '#272626',
              backgroundColor: '#e0dede',
              padding: '1rem 2rem',
              '&:hover': {
                backgroundColor: "#5a5454",
                color: 'white'
              }
            }}
          >
            SAIBA MAIS
          </Button>
        </Box>
      </Box>
      <Box
        width='100%'
        height={{ md: '100%', xs: theme.spacing(60) }}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <ImageCircle src={constants.img} alt={constants.alt} />
      </Box>
    </Box >
  );
};