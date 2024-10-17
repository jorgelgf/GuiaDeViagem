import { Box, useTheme } from '@mui/material';

interface IImageCircleProps {
  src: string,
  alt: string
};
export const ImageCircle = ({ src, alt }: IImageCircleProps) => {
  const theme = useTheme();

  return <>
    <img
      width={theme.spacing(40)}
      height={theme.spacing(40)}
      src={src}
      alt={alt}
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
    ></Box></>
};