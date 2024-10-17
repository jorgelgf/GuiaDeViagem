import { Box, Paper, Typography, useTheme } from '@mui/material';
import { Footer, Layout } from '../../components';
import { constants } from './constants';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import HowToRegIcon from '@mui/icons-material/HowToReg';
export const About = () => {
  const theme = useTheme();
  const sizeTitleCards = 'h6';


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
      <Footer />
    </Layout>
  );
};