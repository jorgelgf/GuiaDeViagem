import { Box, Drawer, Typography, useTheme } from '@mui/material'
import { constants } from './constants';
import { DensitySmall } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useNavigate } from 'react-router';
export const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const logoName = 'Sua Logo';

  const showItemMenu = () => {
    return <>
      {constants.map((item, key) => {
        return (
          <Typography
            variant='h6'
            padding={theme.spacing(1)}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(item.link)}
            key={key}>{item.name}</Typography>)
      })}
    </>
  }
  return (
    <Box
      paddingX={theme.spacing(5)}
      paddingY={theme.spacing(2)}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Typography variant='h5'>{logoName}</Typography>
      <Box
        display={{ xs: 'flex', md: 'none' }}
        style={{ cursor: 'pointer' }}
        onClick={() => setShowDrawer(true)}
      >
        <DensitySmall />
      </Box>
      <Box
        display={{ md: 'flex', xs: 'none' }}
      >
        {showItemMenu()}
        <Box display={{ xs: 'flex', md: 'none' }}>
          <Drawer
            onClick={() => setShowDrawer(false)}
            open={showDrawer}
          >
            <Box
              flex={1}
              textAlign='center'
              paddingY={theme.spacing(3)}
              width={theme.spacing(20)}
            >
              <Box
                textAlign='end'
                marginRight={theme.spacing(3)}
              >
                <CloseIcon sx={{ cursor: 'pointer' }} />
              </Box>
              {showItemMenu()}
            </Box>
          </Drawer>
        </Box>
      </Box>
    </Box>
  )
};