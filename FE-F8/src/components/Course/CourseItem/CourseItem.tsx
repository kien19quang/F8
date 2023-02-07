import * as React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GroupsIcon from '@mui/icons-material/Groups';
import { CoursesDto } from '@/src/models/HomePage/Course';
import { useNavigate } from 'react-router-dom';

export enum ETypeCourse {
  USER = 'user',
  ADMIN = 'admin'
}

export interface CourseItemProps {
  dataItem: CoursesDto;
  type: ETypeCourse;
}

const BoxImage = styled(Box)(() => ({
  backgroundColor: 'rgba(0, 0, 0, .1)',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '16px',
  objectFit: 'cover',
  overflow: 'hidden',
  paddingTop: '56.25%',
  width: '100%',
  cursor: 'pointer'
}));

export default function CourseItem({ dataItem, type }: CourseItemProps) {
  const navigate = useNavigate();

  const [isHoverCourse, setIsHoverCourse] = React.useState<boolean>(false);

  const handleNavigateCourse = (): void => {
    navigate(`learning/${dataItem.slug}/${dataItem._id}`);
  };

  const handleHoverCourse = () => {
    setIsHoverCourse(true);
  };

  const handleHoverOutCourse = () => {
    setIsHoverCourse(false);
  };

  return (
    <Stack
      gap="12px"
      sx={{
        userSelect: 'none'
      }}
      component="section"
    >
      <Box
        position="relative"
        onMouseOver={handleHoverCourse}
        onClick={handleNavigateCourse}
        onMouseOut={handleHoverOutCourse}
        sx={{ cursor: 'pointer' }}
      >
        <BoxImage
          sx={{
            backgroundImage: `url(${dataItem.thumbnailUrl})`
          }}
        />
        {isHoverCourse && (
          <Box
            sx={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              right: '0',
              left: '0',
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '16px'
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                height: '36px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                color: '#000',
                background: '#fff',
                borderColor: '#fff',
                transform: 'translate(-50%,-50%)',
                transition: 'all .3s ease 0s',
                borderRadius: '999px',
                pointerEvents: 'none',
                animation: 'slide-top-course  0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
              }}
            >
              <Typography variant="body1" fontSize="16px" fontWeight="500">
                Tiếp tục học
              </Typography>
            </Button>
          </Box>
        )}
      </Box>
      <Typography
        variant="body1"
        sx={{
          wordWrap: 'break-word',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '1',
          color: '#292929',
          fontWeight: '600',
          cursor: 'pointer'
        }}
        onClick={handleNavigateCourse}
      >
        {dataItem.title}
      </Typography>
      <Stack direction="row" alignItems="center" color="#666" fontSize="14px">
        <GroupsIcon />
        <Typography variant="body1" ml="12px">
          {dataItem.students_count || 100000}
        </Typography>
      </Stack>
    </Stack>
  );
}
