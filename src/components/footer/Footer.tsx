import { Box, Typography, useTheme } from '@mui/material';
import { constants } from './constants';
export const Footer = () => {
  const theme = useTheme();
  const spaceLetter = .5;
  const information = () => {
    return (
      <Box>
        <Typography letterSpacing={theme.spacing(spaceLetter)} color='white'>
          <b>Rua:</b> {constants.address}
        </Typography>
        <Typography letterSpacing={theme.spacing(spaceLetter)} color='white'>
          <b>Fone</b> {constants.fone}
        </Typography>

        <Typography letterSpacing={theme.spacing(spaceLetter)} color='white'>
          <b>Email:</b>  {constants.email}
        </Typography>
        <Typography letterSpacing={theme.spacing(spaceLetter)} color='white'>
          <b>Horário de funcionamento:</b> {constants.openingHours}
        </Typography>
      </Box >
    );
  };
  return (
    <Box
      textAlign='center'
      sx={{
        zIndex: 1,
        padding: '5%',
        background: '#333333',
        marginTop: theme.spacing(4)
      }}
    >{information()}
    </Box>
  );
};