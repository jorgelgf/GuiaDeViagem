import { Box, Button, Typography, useTheme } from '@mui/material';

interface IFirstSessionProps {
  constants: {
    experienceTitle: string,
    phrase: string,
    iconSize: number,
    sizeTitleCards: string,
    bgImage: string,
    title: string,
    subtitle: string,
    textButton: string
  };
  whiteTextWithShadow: {
    textShadow: string,
    color: string,
  };
};
export const FirstSession = ({ constants, whiteTextWithShadow }: IFirstSessionProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `url(${constants.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: "column",
        gap: theme.spacing(2)
      }}
    >
      <Typography
        variant='h1'
        fontWeight={600}
        paddingRight={theme.spacing(5)}
        sx={whiteTextWithShadow}
      >{constants.title}</Typography>
      <Typography
        variant='h6'
        width={theme.spacing(100)}
        textAlign='end'
        sx={whiteTextWithShadow}
        paddingRight={theme.spacing(5)}
      >{constants.subtitle}</Typography>
      <Button
        sx={{
          marginRight: theme.spacing(5),
          color: 'white',
          border: 'solid white',
          padding: '1rem 2rem',
          marginTop: "2rem", '&:hover': { color: 'black', backgroundColor: "white" }
        }}
      ><Typography variant='h6'>{constants.textButton} </Typography></Button>
    </Box >
  );
};