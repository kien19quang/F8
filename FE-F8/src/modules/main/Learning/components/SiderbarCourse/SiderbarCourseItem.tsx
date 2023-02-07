import * as React from 'react';
import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TrackDto, TrackStepDto } from '@/src/models/Learning/Learning';
import { FormatSecondToTime } from 'src/utils/Format';
import LockIcon from '@mui/icons-material/Lock';
import { useAppSelector } from 'src/app/hooks';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AlbumIcon from '@mui/icons-material/Album';

export interface SiderBarCourseItemProps {
  dataTrack: TrackDto;
  changeLink: (data: TrackDto, trackStep: TrackStepDto) => void;
  linkVideo: string;
  defaultExpanded: boolean;
}

export default function SiderBarCourseItem({
  dataTrack,
  changeLink,
  linkVideo,
  defaultExpanded
}: SiderBarCourseItemProps) {
  const cntTrackStepCompleted = useAppSelector<number>((state) => state.course.cntTrackStepCompleted);
  const handleChangeVideoUrl = (item: TrackStepDto) => {
    if (item.position <= cntTrackStepCompleted + 1) {
      changeLink(dataTrack, item);
    }
  };

  const handleBackGround = (item: TrackStepDto) => {
    if (item.video_url === linkVideo) {
      return {
        backgroundColor: 'rgba(240,81,35,.2)',
        cursor: 'pointer'
      };
    }
    if (!item.is_completed && item.position > cntTrackStepCompleted + 1) {
      return {
        backgroundColor: '#e7e7e7',
        opacity: '0.6',
        cursor: 'default'
      };
    }
    return {
      '&:hover': {
        backgroundColor: '#f1f1f1',
        cursor: 'pointer'
      }
    };
  };

  return (
    <Accordion
      sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #dedfe0',
        '&.Mui-expanded': {
          margin: '0'
        }
      }}
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          background: '#f7f8fa',
          justifyContent: 'space-between',
          padding: '0 20px',
          userSelect: 'none',
          height: '54px',

          '&:hover': {
            backgroundColor: '#edeff1'
          },

          '&.Mui-expanded': {
            minHeight: '54px'
          }
        }}
      >
        <Stack>
          <Typography variant="body1" component="h3" color="#000" fontWeight="600">
            {`${dataTrack.position}. ${dataTrack.title}`}
          </Typography>
          <Typography variant="body1" color="#29303b" fontSize="13px" mt="4px">
            {`${dataTrack.countCompleted}/${dataTrack.track_steps.length} | ${FormatSecondToTime(dataTrack.duration)}`}
          </Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails sx={{ padding: '0', borderTop: '1px solid #dedfe0' }}>
        <Stack>
          {dataTrack.track_steps.map((item) => {
            return (
              <Stack
                key={JSON.stringify(item)}
                flexDirection="row"
                padding="10px 0 10px 2px"
                sx={handleBackGround(item)}
                onClick={() => handleChangeVideoUrl(item)}
              >
                <Box sx={{ flex: '1 1', ml: '28px' }}>
                  <Typography variant="body1" component="h3" color="#000" fontSize="14px">
                    {`${item.position}. ${item.title}`}
                  </Typography>
                  <Stack mt="8px" direction="row" alignItems="center" gap="4px">
                    {item.video_url !== linkVideo ? (
                      <PlayCircleIcon sx={{ fontSize: '14px', color: '#888', mt: '-1px' }} />
                    ) : (
                      <AlbumIcon sx={{ fontSize: '14px', color: 'rgba(240,81,35,.8)', mt: '-1px' }} />
                    )}
                    <Typography fontSize="12px" variant="body1">
                      {FormatSecondToTime(item.duration)}
                    </Typography>
                  </Stack>
                </Box>
                <Stack alignItems="center" mr="12px" width="36px" justifyContent="center">
                  {item.is_completed && <CheckCircleIcon sx={{ color: '#5db85c', fontSize: '1.1rem' }} />}
                  {!item.is_completed && item.position > cntTrackStepCompleted + 1 && (
                    <LockIcon sx={{ fontSize: '1.1rem', color: 'rgba(0,0,0,.6)' }} />
                  )}
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
