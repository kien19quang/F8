import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from 'src/assets/images/logo.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = (): JSX.Element => {
  return (
    <Box
      bgcolor="primary.main"
      width="100%"
      height="70px"
      px="15px"
      boxShadow="0 1px 5px rgb(0 0 0 / 30%)"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
      }}
      zIndex="20"
    >
      <Stack justifyContent="space-between" direction="row" alignItems="center" height="100%">
        <Stack
          direction="row"
          alignItems="center"
          height="50px"
          fontSize="18px"
          p="15px"
          sx={{
            cursor: 'pointer',
            '.logo': {
              width: '24px',
              height: '24px'
            }
          }}
        >
          <img src={Logo} alt="Logo" className="logo" />
          <Typography variant="body1" color="white" ml="10px">
            F8 - Cùng học lập trình mỗi ngày
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" p="15px">
          <MoreVertIcon sx={{ color: 'white', cursor: 'pointer' }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
