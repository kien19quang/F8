import * as React from 'react';
import { Box } from '@mui/material';

export interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps): JSX.Element => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        boxShadow: '0 2px 10px rgb(0 0 0 / 20%)',
        overflow: 'auto'
      }}
    >
      {children}
    </Box>
  );
};

export default Card;
