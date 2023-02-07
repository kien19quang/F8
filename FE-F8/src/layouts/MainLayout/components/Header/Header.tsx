import { Avatar, Box, Button, InputAdornment, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { MyTextField } from './HeaderStyles';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const isLoggedIn = window.localStorage.getItem('accessToken') ? true : false;

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('login');
  };

  return (
    <Stack
      height="66px"
      direction="row"
      position="fixed"
      sx={{ top: '0', left: '0', right: '0' }}
      bgcolor="#fff"
      borderBottom="1px solid #e8ebed"
      padding="0 28px"
      alignItems="center"
      zIndex="20"
    >
      <Stack direction="row" flex="1">
        <Typography variant="body1" color="initial" fontWeight="bold">
          Cùng học lập trình
        </Typography>
      </Stack>
      <Box width="420px">
        <MyTextField
          fullWidth
          placeholder="Tìm kiếm khóa học, bài viết"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Stack direction="row" flex="1" justifyContent="flex-end" alignItems="center" gap="16px">
        {isLoggedIn ? (
          <>
            <Typography sx={{ cursor: 'pointer' }}>Khóa học của tôi</Typography>
            <NotificationsIcon sx={{ color: 'rgb(112, 112, 112)' }} />
            <Avatar
              alt="avatar"
              src="https://files.fullstack.edu.vn/f8-prod/user_avatars/61358/62a8b6344a192.jpg"
              sx={{ width: '24px', height: '24px' }}
            />
          </>
        ) : (
          <Button
            variant="contained"
            sx={{
              borderRadius: '999px',
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none'
              }
            }}
            onClick={handleLogin}
          >
            Đăng nhập
          </Button>
        )}
      </Stack>
    </Stack>
  );
}
