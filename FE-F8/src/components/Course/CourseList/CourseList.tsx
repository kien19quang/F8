import * as React from 'react';
import { Stack, Grid, Typography } from '@mui/material';
import CourseItem, { ETypeCourse } from '../CourseItem/CourseItem';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CoursesDto } from '@/src/models/HomePage/Course';

export interface CourseListProps {
  label: string;
  data: CoursesDto[];
  type: ETypeCourse;
}

export default function CourseList({ label, data, type }: CourseListProps) {
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="body1"
          component="h2"
          m="16px 0 20px"
          fontSize="24px"
          fontWeight="700"
          sx={{ cursor: 'pointer' }}
        >
          {label}
        </Typography>

        <Stack direction="row" alignItems="center">
          <Typography variant="body1">Xem lộ trình</Typography>
          <KeyboardArrowRightIcon />
        </Stack>
      </Stack>

      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item xs={3} key={JSON.stringify(item)}>
              <CourseItem dataItem={item} type={type} />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
