import { Box, Button, InputLabel, MenuItem, Stack } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ReactHookFormSelect from 'src/form/ReactHookFormSelect';
import { useForm } from 'react-hook-form';
import InputField from 'src/form/InputField';
import { CreateTrackDto } from '@/src/models/Learning/Learning';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CoursesDto } from '@/src/models/HomePage/Course';
import { getAllCourse } from 'src/service/HomePage/HomePageService';

export interface FormTrackProps {}
const MyLabel = styled(InputLabel)(() => ({
  color: 'rgba(0, 0, 0, 0.87)',
  padding: '0 15px',
  fontWeight: '600',
  width: '100%'
}));

const WrapperLabel = styled(Stack)(() => ({
  width: '16.6667%',
  justifyContent: 'center',
  height: '40px'
}));

const WrapperFormControl = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '30px'
}));

const schema = yup
  .object()
  .shape({
    course_id: yup.string().required('This field cannot be empty'),
    title: yup.string().required('This field cannot be empty'),
    position: yup.number().required('This field cannot be empty')
  })
  .required();

export default function FormTrack(props: FormTrackProps) {
  const { control, handleSubmit } = useForm<CreateTrackDto>({
    defaultValues: {
      course_id: '',
      duration: 0,
      position: undefined,
      title: ''
    },
    resolver: yupResolver(schema)
  });

  const [listCourse, setListCoruse] = React.useState<CoursesDto[]>([]);

  React.useEffect(() => {
    const getListCourse = async () => {
      const res = await getAllCourse();
      setListCoruse(res);
    };

    getListCourse();
  }, []);

  const OnSubmit = (value: CreateTrackDto) => {
    console.log(value);
  };

  return (
    <Stack gap="32px" component="form" onSubmit={handleSubmit(OnSubmit)}>
      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Course</MyLabel>
        </WrapperLabel>

        <Box width="30%">
          <ReactHookFormSelect size="small" name="course_id" label="Choose course..." control={control}>
            {listCourse.map((item) => (
              <MenuItem value={item._id} key={JSON.stringify(item)}>
                {item.title}
              </MenuItem>
            ))}
          </ReactHookFormSelect>
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Title</MyLabel>
        </WrapperLabel>

        <Box width="50%">
          <InputField name="title" size="small" control={control} label="Please enter title..." />
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Position</MyLabel>
        </WrapperLabel>

        <Box width="50%">
          <InputField name="position" type="number" size="small" control={control} label="Please enter position..." />
        </Box>
      </WrapperFormControl>

      <Stack direction="row" justifyContent="flex-end" mt="20px">
        <Button variant="contained" sx={{ width: '74px' }} type="submit">
          Save
        </Button>
      </Stack>
    </Stack>
  );
}
