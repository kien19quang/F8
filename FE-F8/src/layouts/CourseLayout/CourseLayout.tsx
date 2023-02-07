import { Box } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

export default function CourseLayout() {
  return (
    <Box>
      <Header />

      <Box marginTop="50px">
        <Outlet />
      </Box>
    </Box>
  );
}
