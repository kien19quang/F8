import { Box, Stack } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SiderBar from './components/Siderbar/SideBar';

export default function MainLayout() {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Header />
      <Stack pt="12px" flexDirection="row" mt="66px" overflow="hidden overlay" flexGrow={1}>
        <SiderBar />
        <Box maxWidth="calc(100vw - 96px)" padding="0 40px 0 20px" flex="1" ml="96px">
          <Outlet />
        </Box>
      </Stack>
      <Footer />
    </Stack>
  );
}
