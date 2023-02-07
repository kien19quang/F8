import * as React from 'react';
import { Box, Button, Link, Stack, Typography } from '@mui/material';

import Carousel from 'src/components/Carousel/Carousel';
import CourseList from 'src/components/Course/CourseList/CourseList';
import { CoursesDto } from 'src/models/HomePage/Course';
import { getAllCourse } from 'src/service/HomePage/HomePageService';
import { ETypeCourse } from 'src/components/Course/CourseItem/CourseItem';

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const [listCourses, setListCourses] = React.useState<CoursesDto[]>([]);

  React.useEffect(() => {
    const getListCourses = async () => {
      const res = await getAllCourse();
      setListCourses(res);
    };

    getListCourses();
  }, []);

  return (
    <Box>
      <Stack>
        <Carousel>
          <Box
            display="flex !important"
            borderRadius="16px"
            height="270px"
            sx={{ background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))' }}
            width="100%"
          >
            <Stack
              color="#fff"
              justifyContent="center"
              lineHeight="1.6"
              width="50%"
              padding="0 36px 36px"
              height="100%"
            >
              <Typography
                variant="body1"
                component="h2"
                margin="20px 0 8px"
                fontWeight="600"
                fontSize="32px"
                textTransform="capitalize"
              >
                Học ReactJS Miễn Phí
              </Typography>
              <Typography variant="body1" mb="24px">
                Khóa học React từ cơ bản đến nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án
                thường gặp với ReactJS
              </Typography>

              <Button
                variant="outlined"
                size="small"
                sx={{
                  width: '130px',
                  borderRadius: '16px',
                  border: '2px solid #fff',
                  height: '35px',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: '14px',

                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#2877FA',
                    border: '2px solid #fff'
                  }
                }}
              >
                Tìm hiểu ngay
              </Button>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" width="50%">
              <Link
                underline="none"
                target="_blank"
                href="https://fullstack.edu.vn/learning/reactjs?id=3b009c02-e4bf-4374-a253-e6727bb22561"
              >
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png"
                  alt="Khóa học react online"
                />
              </Link>
            </Stack>
          </Box>
          <Box
            display="flex !important"
            borderRadius="16px"
            height="270px"
            sx={{ background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))' }}
            width="100%"
          >
            <Stack
              color="#fff"
              justifyContent="center"
              lineHeight="1.6"
              width="50%"
              padding="0 36px 36px"
              height="100%"
            >
              <Typography
                variant="body1"
                component="h2"
                margin="20px 0 8px"
                fontWeight="600"
                fontSize="32px"
                textTransform="capitalize"
              >
                Học ReactJS Miễn Phí
              </Typography>
              <Typography variant="body1" mb="24px">
                Khóa học React từ cơ bản đến nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án
                thường gặp với ReactJS
              </Typography>

              <Button
                variant="outlined"
                size="small"
                sx={{
                  width: '130px',
                  borderRadius: '16px',
                  border: '2px solid #fff',
                  height: '35px',
                  fontWeight: '700',
                  color: '#fff',
                  fontSize: '14px',

                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#2877FA',
                    border: '2px solid #fff'
                  }
                }}
              >
                Tìm hiểu ngay
              </Button>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" width="50%">
              <Link
                underline="none"
                target="_blank"
                href="https://fullstack.edu.vn/learning/reactjs?id=3b009c02-e4bf-4374-a253-e6727bb22561"
              >
                <img
                  src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png"
                  alt="Khóa học react online"
                />
              </Link>
            </Stack>
          </Box>
        </Carousel>
        <Box mt="100px" padding="0 44px 74px">
          <CourseList label="Khóa học miễn phí" data={listCourses} type={ETypeCourse.USER} />
        </Box>
      </Stack>
    </Box>
  );
}
