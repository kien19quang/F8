import * as React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Box, Avatar, Grid } from '@mui/material';

export enum EnumProgress {
  Label = 'label',
  Image = 'image'
}

export interface CircularProgressCustomProps extends CircularProgressProps {
  value: number;
  type: EnumProgress;
  src?: string;
}

export function CircularProgressCustom({ value, type, src, ...props }: CircularProgressCustomProps) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={value}
        {...props}
        sx={{
          zIndex: '10'
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `2px solid ${type === EnumProgress.Label ? '#4d4f50' : '#d4d4d4'}`,
          borderRadius: '50%'
        }}
      >
        {type === EnumProgress.Label ? (
          <Typography variant="caption" component="div">{`${Math.round(value)}%`}</Typography>
        ) : (
          <Avatar
            sx={{
              filter: `${value !== 0 ? '' : 'grayscale(100%)'}`,
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            src={src}
          />
        )}
      </Box>
    </Box>
  );
}
