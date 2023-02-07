import { Box, Button, Stack, Typography } from '@mui/material';
import * as React from 'react';
import SideBarCourse from './components/SiderbarCourse/SiderbarCourse';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams } from 'react-router-dom';
import { TrackDto, TrackStepDto } from '@/src/models/Learning/Learning';
import { getAllTrack } from 'src/service/Learning/LearningService';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { setCntTrackStepCompleted, setTrackStepCount } from './LearningSlice';
import ForumIcon from '@mui/icons-material/Forum';
import moment from 'moment';

export interface LearningProps {}

export default function Learning(props: LearningProps) {
  const [trackCourse, setTrackCourse] = React.useState<TrackDto[]>([]);
  const [trackActive, setTrackActive] = React.useState<TrackDto>();
  const [trackStepActive, setTrackStepActive] = React.useState<TrackStepDto>();
  const [isShowSidebar, setIsShowSidebar] = React.useState<boolean>(true);

  const dispatch = useAppDispatch();
  const cntTrackStepCompleted = useAppSelector<number>((state) => state.course.cntTrackStepCompleted);

  const param = useParams();
  const course_id = param._id ?? '';

  React.useEffect(() => {
    const getTrackCourse = async () => {
      const res = await getAllTrack(course_id);
      let ok = false;
      let trackStepActive = {} as TrackStepDto;
      let cntTrackStepCompleted = 0;
      let trackActiveTmp = {} as TrackDto;
      for (let i = 0; i < res.tracks.length; i++) {
        const track = res.tracks[i];
        let cnt = 0;
        for (let j = 0; j < track.track_steps.length; j++) {
          const trackStep = track.track_steps[j];
          if (trackStep.is_completed) {
            cnt++;
            if (j === track.track_steps.length - 1 && !ok) {
              trackStepActive = trackStep;
              trackActiveTmp = track;
            }
          } else if (!trackStep.is_completed && !ok) {
            trackStepActive = trackStep;
            trackActiveTmp = track;
            ok = true;
          }
        }
        res.tracks[i].countCompleted = cnt;
        cntTrackStepCompleted += cnt;
        cnt = 0;
      }
      dispatch(setTrackStepCount(res.track_step_count));
      dispatch(setCntTrackStepCompleted(cntTrackStepCompleted));
      setTrackStepActive(trackStepActive);
      setTrackActive(trackActiveTmp);
      setTrackCourse(res.tracks);
    };

    getTrackCourse();
  }, [course_id, dispatch]);

  const setVideoUrl = (data: TrackDto, trackStep: TrackStepDto) => {
    if (trackStep.video_url !== trackStepActive?.video_url) {
      setTrackStepActive(trackStep);
      setTrackActive(data);
    }
  };

  const handleUpdatedAt = () => {
    if (trackStepActive?.updatedAt) {
      const month = moment(trackStepActive?.updatedAt).month();
      const year = moment(trackStepActive?.updatedAt).year();
      return `Cập nhật tháng ${month + 1} năm ${year}`;
    }
    return '';
  };

  const handleShowSidebar = () => {
    setIsShowSidebar(!isShowSidebar);
  };

  const handleSetTrackStepActive = (positionTrackStep: number) => {
    let trackStepActiveTmp = {} as TrackStepDto;
    let trackActiveTmp = {} as TrackDto;
    for (let i = 0; i < trackCourse.length; i++) {
      const track = trackCourse[i];
      for (let j = 0; j < track.track_steps.length; j++) {
        const trackStep = track.track_steps[j];
        if (trackStep.position === positionTrackStep) {
          trackStepActiveTmp = trackStep;
          trackActiveTmp = track;
          break;
        }
      }
    }
    if (trackActiveTmp._id !== trackActive?._id) {
      setTrackActive(trackActiveTmp);
    }
    setTrackStepActive(trackStepActiveTmp);
  };

  return (
    <Box>
      <Stack flexDirection="row">
        <Stack width={isShowSidebar ? '77%' : '100%'} overflow="auto">
          <Box>
            <Box bgcolor="#000" padding={isShowSidebar ? '0 8.5%' : '0 16%'} sx={{ userSelect: 'none' }}>
              <Box>
                <Box height="100%" width="100%" paddingTop="56.25%" position="relative">
                  <Box position="absolute" sx={{ inset: '0', overflow: 'hidden', height: '100%', width: '100%' }}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={trackStepActive?.video_url}
                      title="Phương pháp HỌC LẬP TRÌNH của Sơn Đặng! | Lộ trình học lập trình | Phương pháp học lập trình"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    ></iframe>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Stack padding={isShowSidebar ? '0 8.5%' : '0 16%'} minHeight="300px">
            <Typography component="h1" fontSize="28px" fontWeight="600" margin="40px 0 8px">
              {trackStepActive?.title}
            </Typography>
            <Typography fontSize="13px">{handleUpdatedAt()}</Typography>
          </Stack>
        </Stack>
        {isShowSidebar && (
          <Stack
            width="23%"
            borderLeft="1px solid #e7e7e7"
            position="fixed"
            top="0"
            right="0"
            bottom="50px"
            marginTop="50px"
            zIndex="2"
          >
            <SideBarCourse
              listTrack={trackCourse}
              changeLink={setVideoUrl}
              linkVideo={trackStepActive?.video_url || ''}
              trackActive={trackActive as TrackDto}
            />
          </Stack>
        )}
      </Stack>

      <Stack
        flexDirection="row"
        position="fixed"
        alignItems="center"
        bgcolor="#f0f0f0"
        bottom="0"
        boxShadow="0 -2px 3px rgb(0 0 0 / 10%)"
        height="50px"
        justifyContent="center"
        left="0"
        right="0"
        zIndex="2"
        gap="16px"
      >
        <Button
          sx={{ color: '#404040', textTransform: 'none' }}
          startIcon={<KeyboardArrowLeftIcon sx={{ fontSize: '28px !important' }} />}
          size="small"
          disabled={trackStepActive?.position === 1}
          onClick={() => handleSetTrackStepActive((trackStepActive?.position as number) - 1)}
        >
          <Typography fontSize="18px" ml="-6px">
            Bài trước
          </Typography>
        </Button>

        <Button
          variant="outlined"
          size="small"
          sx={{
            border: '2px solid #f05123',
            borderRadius: '6px',
            '&:hover': {
              border: '2px solid #f05123'
            },
            '&:disabled': {
              color: 'primary.main',
              borderColor: 'primary.main',
              opacity: '0.5'
            }
          }}
          endIcon={<KeyboardArrowRightIcon sx={{ fontSize: '28px !important' }} />}
          disabled={cntTrackStepCompleted + 1 === trackStepActive?.position}
          onClick={() => handleSetTrackStepActive((trackStepActive?.position as number) + 1)}
        >
          <Typography fontSize="18px" mr="-6px">
            Bài tiếp theo
          </Typography>
        </Button>

        <Stack
          flexDirection="row"
          alignItems="center"
          bottom="0"
          justifyContent="flex-end"
          position="absolute"
          right="0"
          top="0"
          width="30%"
          sx={{ cursor: 'pointer' }}
        >
          <Typography
            variant="body1"
            component="h3"
            sx={{ wordWrap: 'break-word', WebkitBoxOrient: 'vertical', WebkitLineClamp: '1', fontWeight: '600' }}
          >
            {trackActive?.position}. {trackActive?.title}
          </Typography>

          <Button
            sx={{
              backgroundColor: '#fff',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              fontSize: '16px',
              minWidth: '38px',
              margin: '0 12px'
            }}
            onClick={handleShowSidebar}
          >
            {isShowSidebar ? <ArrowForwardIcon sx={{ color: '#000' }} /> : <MenuIcon sx={{ color: '#000' }} />}
          </Button>
        </Stack>
      </Stack>

      <Box position="fixed" bottom="70px" right="calc(23% + 20px)">
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ForumIcon sx={{ fontSize: '20px !important' }} />}
          sx={{ color: 'primary.main' }}
        >
          Hỏi đáp
        </Button>
      </Box>
    </Box>
  );
}
