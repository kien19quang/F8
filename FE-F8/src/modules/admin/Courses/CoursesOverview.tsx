import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getAllCourse } from 'src/service/HomePage/HomePageService';
import { CoursesDto } from 'src/models/HomePage/Course';
import CourseList from 'src/components/Course/CourseList/CourseList';
import CreateEditCourse from './CreateEditCourse/CreateEditCourse';
import { EStatus } from 'src/models/BaseEnum';
import { useDebounce } from 'src/hooks';
import { ETypeCourse } from 'src/components/Course/CourseItem/CourseItem';

export interface CourseOverviewProps {}

export interface Status {
  title: string;
  value: EStatus;
}

const listOption: Status[] = [
  { title: 'All', value: EStatus.ALL },
  { title: 'Publish', value: EStatus.PUBLISH },
  { title: 'Close', value: EStatus.CLOSE }
];

export default function CourseOverview(props: CourseOverviewProps) {
  const [listCourses, setListCourses] = React.useState<CoursesDto[]>([]);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<EStatus>(EStatus.ALL);
  const [searchCourse, setSearchCourse] = React.useState<string>('');

  const debounced = useDebounce(searchCourse, 500);

  React.useEffect(() => {
    const getListCourses = async () => {
      let res;
      if (status === EStatus.ALL) {
        res = await getAllCourse(debounced);
      } else {
        res = await getAllCourse(debounced, status);
      }
      setListCourses(res);
    };

    getListCourses();
  }, [status, debounced]);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleChangeStatus = (e: SelectChangeEvent<EStatus>) => {
    setStatus(e.target.value as EStatus);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCourse(e.target.value);
  };

  return (
    <>
      <Stack
        justifyContent="space-between"
        direction="row"
        p="15px"
        color="#555"
        borderBottom="1px solid rgba(204, 204, 204, 0.35)"
        alignItems="center"
      >
        <Typography variant="body1" color="#111" fontSize="18px">
          Manage Courses
        </Typography>
        <MoreVertIcon />
      </Stack>

      <Box p="20px">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb="40px">
          <Box>
            <Button variant="contained" color="primary" sx={{ width: '140px' }} onClick={handleOpenDialog}>
              New Course
            </Button>
          </Box>

          <Stack width="75%" gap="30px" direction="row" alignItems="center">
            <Box width="30%">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Course</InputLabel>
                <Select label="Project" onChange={handleChangeStatus} defaultValue={status}>
                  {listOption.map((item) => {
                    return (
                      <MenuItem value={item.value} key={JSON.stringify(item)}>
                        {item.title}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <Box width="70%">
              <TextField
                size="small"
                label="Search by name course"
                variant="outlined"
                fullWidth
                value={searchCourse}
                onChange={handleChangeSearch}
              />
            </Box>
          </Stack>
        </Stack>

        <Stack>
          <CourseList label="Khóa học miễn phí" data={listCourses} type={ETypeCourse.ADMIN} />
        </Stack>
      </Box>

      <CreateEditCourse close={handleCloseDialog} isOpen={isOpen} />
    </>
  );
}
