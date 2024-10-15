import { Box, LinearProgress, Typography } from '@mui/material'
import { Layout } from '../../components'
import { constants } from './constants'
import { useNavigate } from 'react-router'
export const Welcome = () => {
  const navigation = useNavigate();
  setTimeout(() => {
    navigation('/Home')
  }, 3500);

  return <Layout>
    <LinearProgress />

    <Box
      height='100vh'
      display='flex'
      flex='1'
      width='100%'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'>
      <Typography variant='h3'>
        {constants.welcomeText}
      </Typography>

    </Box>

  </Layout>
}