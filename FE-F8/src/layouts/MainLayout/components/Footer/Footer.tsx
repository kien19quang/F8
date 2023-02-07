import { Box, Stack } from '@mui/material';
import * as React from 'react';

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <Stack alignItems="center" bgcolor="#181821" color="#a9b3bb" padding="68px 0 40px">
      <Box>© 2018 - 2022 F8. Nền tảng học lập trình hàng đầu Việt Nam</Box>
    </Stack>
  );
}
