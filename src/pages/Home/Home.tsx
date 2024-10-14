import { Grid2 } from '@mui/material'
import { Header, Layout } from '../../components'
import { constants } from './constants'
export const Home = () => {

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
          <img src={constants.images.main.src} alt={constants.images.main.alt} />
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