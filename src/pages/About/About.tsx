import { Box, Paper, Typography, useTheme } from '@mui/material';
import { Footer, Layout } from '../../components';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { FirstSession } from './FirstSession';
import { SecondSession } from './SecondSession';
import { ThirdSession } from './ThirdSession';
import { FourthSession } from './FourthSession';
export const About = () => {
  const theme = useTheme();

  //---- Início dos estilos e constantes  
  const sizeTitleCards = 'h6';
  const constants = {
    experienceTitle: "As Melhores Experiências",
    phrase: "Viaje leve, viva o presente e volte com histórias inesquecíveis.",
    iconSize: 6,
    sizeTitleCards: "h6",
    bgImage: 'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d559cfec2b425e1a8ee76c6a/pexels-photo-9800099.jpeg',
    title: 'Explore o Paraíso',
    subtitle: 'Descubra praias de areia branca, águas cristalinas e aventuras inesquecíveis. Venha viver momentos mágicos em lugares incríveis!',
    textButton: "SAIBA MAIS"
  };
  const styleBox = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 'auto%',
    width: 'auto%',
  };
  const styleCards = {
    backgroundColor: '#DCE7EB',
    height: theme.spacing(30),
    width: theme.spacing(30),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2)
  };

  const SXIconCards = {
    fontSize: theme.spacing(constants.iconSize), transition: 'transform 0.3s ease', '&:hover': {
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

  const whiteTextWithShadow = {
    textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)',
    color: 'white',
  }

  //---- Fim dos estilos e constantes  

  const cards = () => {
    return travelOptionsCards.map((item, key) => {
      return (
        <Box
          key={key}
          sx={styleBox}>
          <Paper sx={styleCards}>
            {item.component}
            <Typography
              marginTop={theme.spacing(2)}
              fontWeight={300}
              textAlign='center'
              variant={sizeTitleCards}>{item.title}</Typography>
            <Typography textAlign='center' fontWeight={300}>{item.text}</Typography>
          </Paper>
        </Box>)
    });
  };
  return (
    <Layout>
      <FirstSession whiteTextWithShadow={whiteTextWithShadow} constants={constants} />
      <SecondSession
        phrase={constants.phrase}
        experienceTitle={constants.experienceTitle}
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
      <Footer />
    </Layout >
  );
};