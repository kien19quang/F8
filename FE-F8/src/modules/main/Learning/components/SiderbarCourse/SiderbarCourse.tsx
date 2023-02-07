import { TrackDto, TrackStepDto } from '@/src/models/Learning/Learning';
import { Stack, Typography } from '@mui/material';
import * as React from 'react';
import SiderBarCourseItem from './SiderbarCourseItem';

export interface SideBarCourseProps {
  listTrack: TrackDto[];
  changeLink: (data: TrackDto, trackStep: TrackStepDto) => void;
  linkVideo: string;
  trackActive: TrackDto;
}

export default function SideBarCourse({ listTrack, changeLink, linkVideo, trackActive }: SideBarCourseProps) {
  return (
    <Stack overflow="auto">
      <Stack justifyContent="center" component="header" padding="12px 16px" sx={{ userSelect: 'none' }}>
        <Typography variant="body1" fontWeight="600">
          Nội dung khóa học
        </Typography>
      </Stack>
      <Stack sx={{ overscrollBehavior: 'contain', overflow: 'overlay', flex: '1 1' }}>
        {listTrack.map((item) => {
          return (
            <SiderBarCourseItem
              key={JSON.stringify(item)}
              dataTrack={item}
              changeLink={changeLink}
              linkVideo={linkVideo}
              defaultExpanded={item._id === trackActive._id}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}
