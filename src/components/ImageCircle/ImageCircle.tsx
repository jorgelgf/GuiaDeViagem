import { Box, Grid2, useTheme } from '@mui/material';
interface IImageCircleProps {
  src: string,
  alt: string
};
export const ImageCircle = ({ src, alt }: IImageCircleProps) => {
  const theme = useTheme();
  return <>
    <Grid2
      height='100vh'
      width={{ xs: '100%', md: '50%' }}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <img
        width={theme.spacing(60)}
        height={theme.spacing(60)}
        src={src}
        alt={alt}
        style={{ borderRadius: '50%' }}
      />
      <Box
        position='absolute'
        zIndex={1}
        marginTop={theme.spacing(40)}
        marginRight={theme.spacing(40)}
        bgcolor='#bdbdbd'
        borderRadius='50%'
        width={theme.spacing(20)}
        height={theme.spacing(20)}
      ></Box>
    </Grid2>
  </>
};