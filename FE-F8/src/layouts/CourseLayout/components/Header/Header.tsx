import { Button, Stack, Typography } from '@mui/material';
import * as React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DescriptionIcon from '@mui/icons-material/Description';
import HelpIcon from '@mui/icons-material/Help';
import { CircularProgressCustom, EnumProgress } from 'src/components/Common/ProgressCustom/ProgressCustom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'src/app/hooks';

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  const navigate = useNavigate();

  const trackStepCount = useAppSelector<number>((state) => state.course.trackStepCount);
  const cntTrackStepCompleted = useAppSelector<number>((state) => state.course.cntTrackStepCompleted);

  const handleBackPage = (): void => {
    navigate('/');
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      height="50px"
      bgcolor="#29303b"
      position="fixed"
      top="0"
      zIndex="10"
      left="0"
      right="0"
    >
      <Stack direction="row" alignItems="center">
        <Stack
          alignItems="center"
          height="50px"
          justifyContent="center"
          width="60px"
          color="#fff"
          sx={{ cursor: 'pointer' }}
          onClick={handleBackPage}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </Stack>
        <Typography fontWeight="bold" ml="16px" color="#fff">
          Kiến thức nhập môn IT
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" gap="20px">
        <Stack direction="row" alignItems="center" gap="4px" color="#fff">
          <CircularProgressCustom
            thickness={2}
            value={trackStepCount ? Number((cntTrackStepCompleted / trackStepCount).toFixed(2)) * 100 : 0}
            type={EnumProgress.Label}
            sx={{
              width: '34px',
              height: '34px'
            }}
          />
          <Typography fontSize="14px" pl="4px">
            {cntTrackStepCompleted}/{trackStepCount} bài học
          </Typography>
        </Stack>

        <Button
          sx={{
            color: 'white',
            opacity: 0.8,
            textTransform: 'none',
            '&:hover': {
              opacity: '1'
            }
          }}
        >
          <DescriptionIcon fontSize="small" />
          <Typography variant="body1" fontSize="14px" pl="4px">
            Ghi chú
          </Typography>
        </Button>
        <Button
          sx={{
            color: 'white',
            opacity: 0.8,
            textTransform: 'none',
            '&:hover': {
              opacity: '1'
            }
          }}
        >
          <HelpIcon fontSize="small" />
          <Typography variant="body1" fontSize="14px" pl="4px">
            Hướng dẫn
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
