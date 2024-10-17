import { Box, Button, Grid2, Typography, useTheme } from '@mui/material';
import { Footer, Layout } from '../../components';
import { constants } from './constants';
import { useNavigate } from 'react-router';
export const Home = () => {

  const navigate = useNavigate();

  const theme = useTheme();
  const stylesButton = {
    paddingX: theme.spacing(5),
    paddingY: theme.spacing(3),
    backgroundColor: '#bdbdbd',
    marginTop: theme.spacing(3),
    color: theme.palette.grey[800],
    '&:hover': {
      backgroundColor: '#e2e2e2',
    },
  }
  return (
    <Layout>
      <Grid2
        container
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems='center'
      >
        <Grid2
          height='100vh'
          width={{ xs: '100%', md: '50%' }}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <img
            width={theme.spacing(40)}
            height={theme.spacing(40)}
            src={constants.images.main.src}
            alt={constants.images.main.alt}
            style={{ borderRadius: '50%' }}
          />
          <Box
            position='absolute'
            zIndex={1}
            marginTop={theme.spacing(40)}
            marginRight={theme.spacing(20)}
            bgcolor='#bdbdbd'
            borderRadius='50%'
            width={theme.spacing(20)}
            height={theme.spacing(20)}
          >

          </Box>
        </Grid2>
        <Grid2
          height='100vh'
          width={{ xs: '100%', md: '50%' }}
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
        >
          <Box
            height='50%'
            width='100%'
            display='flex'
            justifyContent='center'
            alignItems='flex-end'
            flexDirection='column'
            paddingRight={5}

          >
            <Typography
              fontWeight={500}
              letterSpacing={theme.spacing(1)}
              variant='h5'

            >{constants.texts.nameSite}
            </Typography>

            <Typography
              paddingTop={theme.spacing(2)}
              textAlign='end'>
              {constants.texts.description1}            </Typography>
          </Box>
          <Box
            paddingRight={5}


            width='100%'
            height='50%'
            display='flex'
            flexDirection='column'
            alignItems='flex-end'
            paddingBottom={theme.spacing(18)}
          >
            <Typography
              fontWeight={800}
              textAlign='end'
              variant={'h2'}
              fontFamily='Afacad Flux'
              color={theme.palette.grey['800']}
            >
              {constants.texts.tittle}
            </Typography>

            <Typography
              marginTop={theme.spacing(5)}
              textAlign='end'
            >
              {constants.texts.description2}
            </Typography>
            <Button
              sx={stylesButton}
              onClick={() => navigate('/About')}
            >
              <Typography>{constants.texts.textButton}</Typography>
            </Button>
          </Box>

        </Grid2>
      </Grid2>
      <Footer />

    </Layout >
  )
}