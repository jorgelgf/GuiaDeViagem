import { Box, Paper, Typography, useTheme } from '@mui/material';
import { Footer, Layout } from '../../components';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { FifthSession, FirstSession, FourthSession, SecondSession, SixthSession, ThirdSession } from '.';

export const About = () => {
  const theme = useTheme();

  //---- Início dos estilos e constantes  
  const sizeTitleCards = 'h6';

  const styleCards = {
    backgroundColor: '#DCE7EB',
    height: theme.spacing(30),
    width: theme.spacing(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  };
  const SXIconCards = {
    fontSize: theme.spacing(6), transition: 'transform 0.3s ease', '&:hover': {
      transform: 'scale(1.2)'
    }
  };
  const travelOptionsCards = [
    {
      title: 'PASSEIOS INCRÍVEIS',
      text: 'Conforto e Segurança',
      component: <CardTravelIcon sx={SXIconCards} />
    },
    {
      title: 'EXPLORE O MUNDO',
      text: 'Escolha o Melhor Lugar',
      component: <TravelExploreIcon sx={SXIconCards} />
    }, {
      title: 'FÉRIAS E AVENTURAS',
      text: 'Diversão Garantida',
      component: <HowToRegIcon sx={SXIconCards} />
    }, {
      title: 'HOTÉIS LUXUOSOS',
      text: 'Conforto e Qualidade',
      component: <ApartmentIcon sx={SXIconCards} />
    },
  ];
  //---- Fim dos estilos e constantes  

  const cards = () => {
    return travelOptionsCards.map((item, key) => {
      return (

        <Paper key={key} sx={styleCards}>
          {item.component}
          <Typography
            marginTop={theme.spacing(2)}
            fontWeight={300}
            textAlign='center'
            variant={sizeTitleCards}>{item.title}</Typography>
          <Typography textAlign='center' fontWeight={300}>{item.text}</Typography>
        </Paper>
      )
    });
  };
  return (
    <Layout>
      <FirstSession />
      <SecondSession
      >
        <Box
          display='flex'
          justifyContent='space-evenly'
          marginBottom={theme.spacing(12)}
          alignItems='center'
          flexWrap='wrap'
          gap={theme.spacing(5)}
          flexDirection={{ md: 'row', xl: 'column' }}
        >
          {cards()}
        </Box>
      </SecondSession>
      <ThirdSession />
      <FourthSession />
      <FifthSession />
      <SixthSession />
      <Footer />
    </Layout >
  );
};