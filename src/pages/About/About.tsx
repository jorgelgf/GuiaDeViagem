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
  }
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
  }

  const textOnCards = {
    travelTitle: 'PASSEIOS INCRÍVEIS ',
    travelPhrase: 'Conforto e Segurança',
    worldTittle: 'EXPLORE O MUNDO',
    worldPhrase: 'Escolha o Melhor Lugar',
    vacationsTitle: 'FÉRIAS E AVENTURAS',
    vacationsPhrase: 'Diversão Garantida',
    hotelsTitle: 'HOTÉIS LUXUOSOS',
    hotelPhrase: 'Conforto e Qualidade'
  }

  const showCards = () => {
    return <>
      <Box sx={styleBox}>
        <Paper sx={styleCards}>
          <CardTravelIcon sx={{ fontSize: theme.spacing(constants.iconSize) }} />
          <Typography
            marginTop={theme.spacing(2)}
            fontWeight={300}
            textAlign='center'
            variant={sizeTitleCards}>{textOnCards.travelTitle}</Typography>
          <Typography textAlign='center' fontWeight={300}>{textOnCards.travelPhrase}</Typography>
        </Paper>
      </Box>
      <Box sx={styleBox}>
        <Paper sx={styleCards}>
          <TravelExploreIcon sx={{ fontSize: theme.spacing(constants.iconSize) }} />
          <Typography
            marginTop={theme.spacing(2)}
            fontWeight={300}
            textAlign='center'
            variant={sizeTitleCards}>{textOnCards.worldTittle}</Typography>
          <Typography textAlign='center' fontWeight={300}>{textOnCards.worldPhrase}</Typography>
        </Paper>
      </Box>
      <Box sx={styleBox}>
        <Paper sx={styleCards} >
          <HowToRegIcon sx={{ fontSize: theme.spacing(constants.iconSize) }} />
          <Typography
            marginTop={theme.spacing(2)}
            fontWeight={300}
            textAlign='center'
            variant={sizeTitleCards}>{textOnCards.vacationsTitle}</Typography>
          <Typography textAlign='center' fontWeight={300}>{textOnCards.vacationsPhrase}</Typography>
        </Paper>
      </Box>
      <Box sx={styleBox}>
        <Paper sx={styleCards}>
          <ApartmentIcon sx={{ fontSize: theme.spacing(constants.iconSize) }} />
          <Typography
            marginTop={theme.spacing(2)}
            fontWeight={300}
            textAlign='center'
            variant={sizeTitleCards}>{textOnCards.hotelsTitle}</Typography>
          <Typography textAlign='center' fontWeight={300}>{textOnCards.hotelPhrase}</Typography>
        </Paper>
      </Box></>
  }
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
        {showCards()}
      </Box>
      <Footer />
    </Layout>
  )

}