import { Dialog, DialogContent, DialogProps, DialogTitle, Typography } from '@mui/material';

import { Stack } from '@mui/system';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export interface DialogComponentProps extends DialogProps {
  title: string;
  children?: React.ReactNode;
  open: boolean;
  close: () => void;
}

export default function DialogComponent({ open, title, close, children, ...props }: DialogComponentProps) {
  return (
    <Dialog open={open} {...props}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body1" component="h2" fontSize="20px" fontWeight="500">
          {title}
        </Typography>

        <Stack justifyContent="center" onClick={close} sx={{ cursor: 'pointer' }}>
          <CloseIcon />
        </Stack>
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
