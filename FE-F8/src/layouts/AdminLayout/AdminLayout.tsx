import * as React from 'react';
import { Box, Stack } from '@mui/material';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Card from 'src/components/Common/Card/Card';
import { Outlet } from 'react-router-dom';

export interface AdminLayoutProps {}

export default function AdminLayout(props: AdminLayoutProps) {
  return (
    <Stack>
      <Header />
      <Stack flexGrow={1} direction="row" mt="70px">
        <SideBar />
        <Box ml="300px" width="100%" height="calc(100vh - 70px)" p="30px">
          <Card>
            <Outlet />
          </Card>
        </Box>
      </Stack>
    </Stack>
  );
}
