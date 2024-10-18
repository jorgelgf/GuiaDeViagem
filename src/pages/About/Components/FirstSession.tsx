import { Box, Button, Typography, useTheme } from '@mui/material';

export const FirstSession = () => {
  const constants = {
    experienceTitle: "As Melhores Experiências",
    phrase: "Viaje leve, viva o presente e volte com histórias inesquecíveis.",
    sizeTitleCards: "h6",
    bgImage: 'https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/d559cfec2b425e1a8ee76c6a/pexels-photo-9800099.jpeg',
    title: 'Explore o Paraíso',
    subtitle: 'Descubra praias de areia branca, águas cristalinas e aventuras inesquecíveis. Venha viver momentos mágicos em lugares incríveis!',
    textButton: "SAIBA MAIS"
  };

  const whiteTextWithShadow = {
    textShadow: '1px 1px 10px rgba(0, 0, 0, 0.5)',
    color: 'white',
  }
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