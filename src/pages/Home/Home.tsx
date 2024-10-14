import { Box, Grid2, useTheme } from '@mui/material'
import { Header, Layout } from '../../components'
import { constants } from './constants'
export const Home = () => {

  const theme = useTheme();
  //

  //const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  //console.log(smDown)

  return (
    <Layout>
      <Header />
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
            width={theme.spacing(50)}
            height={theme.spacing(50)}
            loading="lazy"
            src={constants.images.main.src}
            alt={constants.images.main.alt}
            style={{ borderRadius: '50%' }}
          />
          <Box
            position='absolute'
            zIndex={1}
            marginRight={theme.spacing(35)}
            marginTop={theme.spacing(50)}
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
          bgcolor='blue'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          teste
        </Grid2>
      </Grid2>
    </Layout >)
}