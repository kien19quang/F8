import { styled, Stack, Box, Typography } from '@mui/material';
import * as React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from 'src/assets/images/logo.png';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

export interface IAuthLayoutProps {}

const BoxImage = styled(Stack)(() => ({
  backgroundImage:
    'linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)),url(https://accounts.fullstack.edu.vn/static/media/f8_bg_auth_1920.b517075e98f3051de678.png)',
  filter: 'blur(0)',
  backgroundSize: 'cover',
  height: '100vh'
}));

const ItemAuth = styled(Box)(() => ({
  backgroundColor: 'white',
  height: '44px',
  border: '2px solid #dce0e3',
  borderRadius: '44px',
  lineHeight: '44px',
  position: 'relative',
  paddingLeft: '16px',
  width: '320px',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    backgroundColor: '#dce0e3',
    cursor: 'pointer'
  }
}));

export default function AuthLayout(props: IAuthLayoutProps) {
  const [isLogin, setIsLogin] = React.useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isLoginUrl = location.pathname === '/login';

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleNavigateAuth = () => {
    if (isLoginUrl) {
      navigate('register');
    } else {
      navigate('login');
    }
    setIsLogin(false);
  };

  return (
    <BoxImage justifyContent="center" alignItems="center">
      <Stack
        width="640px"
        bgcolor="white"
        borderRadius="8px"
        maxWidth="calc(100vw - 32px)"
        minHeight="600px"
        padding="48px 16px"
        position="relative"
        overflow="auto"
      >
        {isLogin && (
          <Box
            sx={{
              color: '#404040',
              fontSize: '20px',
              left: '0',
              padding: '32px',
              position: 'absolute',
              top: 0,
              cursor: 'pointer'
            }}
            onClick={() => setIsLogin(false)}
          >
            <ArrowBackIosNewSharpIcon />
          </Box>
        )}

        <Stack alignItems="center">
          <Box>
            <img src={Logo} alt="Logo" className="auth-logo" />
          </Box>

          <Typography variant="body1" component="h1" fontSize="28px" fontWeight="bold" color="#292929" my="20px">
            {isLoginUrl ? 'Đăng nhập tài khoản F8' : 'Đăng ký tài khoản F8'}
          </Typography>
        </Stack>

        <Stack alignItems="center" mt="8px" flex="1">
          <Stack mt="24px" flex="1">
            {!isLogin ? (
              <ItemAuth onClick={handleLogin}>
                <PersonOutlineOutlinedIcon
                  sx={{
                    color: '#34514c',
                    position: 'absolute',
                    left: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                />
                <Typography variant="body1" color="#35414c" fontWeight="600" fontSize="14px">
                  {isLoginUrl ? 'Đăng nhập với email' : 'Đăng ký với email'}
                </Typography>
              </ItemAuth>
            ) : (
              <Outlet />
            )}
          </Stack>

          <Box padding="24px 16px 0" mb="0" mt="14px" fontSize="14px">
            {isLoginUrl ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
            <Typography
              component="span"
              ml="4px"
              sx={{ cursor: 'pointer' }}
              fontSize="14px"
              color="primary.main"
              fontWeight="600"
              onClick={handleNavigateAuth}
            >
              {isLoginUrl ? 'Đăng ký' : 'Đăng nhập'}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </BoxImage>
  );
}
