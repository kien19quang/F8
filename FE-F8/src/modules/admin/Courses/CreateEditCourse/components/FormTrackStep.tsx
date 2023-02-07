import { Box, Button, InputLabel, MenuItem, Stack } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ReactHookFormSelect from 'src/form/ReactHookFormSelect';
import { useForm } from 'react-hook-form';
import InputField from 'src/form/InputField';
import { TrackDto, TrackStepDto } from '@/src/models/Learning/Learning';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getAllCourse } from 'src/service/HomePage/HomePageService';
import { CoursesDto } from '@/src/models/HomePage/Course';
import { getAllTrack } from 'src/service/Learning/LearningService';

export interface FormTrackStepProps {}
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
    track_id: yup.string().required('This field cannot be empty'),
    title: yup.string().required('This field cannot be empty'),
    position: yup.number().required('This field cannot be empty'),
    is_published: yup.boolean().required('This field cannot be empty')
  })
  .required();

export default function FormTrackStep(props: FormTrackStepProps) {
  const { control, handleSubmit, watch } = useForm<TrackStepDto>({
    defaultValues: {
      position: undefined,
      image_url: '',
      title: '',
      video_url: '',
      type: undefined,
      track_id: '',
      course_id: ''
    },
    resolver: yupResolver(schema)
  });

  const [listCourse, setListCourse] = React.useState<CoursesDto[]>([]);
  const [listTrack, setListTrack] = React.useState<TrackDto[]>([]);

  const course_id = watch().course_id;

  React.useEffect(() => {
    const getListCourse = async () => {
      const res = await getAllCourse();
      setListCourse(res);
    };

    getListCourse();
  }, []);

  React.useEffect(() => {
    if (course_id) {
      const getListTrack = async () => {
        const res = await getAllTrack(course_id);
        setListTrack(res.tracks);
      };

      getListTrack();
    }
  }, [course_id]);

  const OnSubmit = (value: TrackStepDto) => {
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
          <MyLabel required>Track</MyLabel>
        </WrapperLabel>

        <Box width="30%">
          <ReactHookFormSelect
            size="small"
            name="track_id"
            label="Choose track of course..."
            disabled={listTrack.length === 0}
            control={control}
          >
            {listTrack.map((item) => (
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
          <MyLabel>Image Url</MyLabel>
        </WrapperLabel>

        <Box width="50%">
          <InputField name="image_url" size="small" control={control} label="Please enter image url..." />
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel>Video url</MyLabel>
        </WrapperLabel>

        <Box width="50%">
          <InputField name="video_url" size="small" control={control} label="Please enter video url..." />
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Position</MyLabel>
        </WrapperLabel>

        <Box width="30%">
          <InputField name="position" size="small" control={control} type="number" label="Please enter postion..." />
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Type</MyLabel>
        </WrapperLabel>

        <Box width="30%">
          <ReactHookFormSelect size="small" name="type" label="Choose between paid or free..." control={control}>
            <MenuItem value={1}>Video</MenuItem>
          </ReactHookFormSelect>
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Published</MyLabel>
        </WrapperLabel>

        <Box width="30%">
          <ReactHookFormSelect size="small" name="is_published" label="Choose publish or close..." control={control}>
            <MenuItem value={1}>Publish</MenuItem>
          </ReactHookFormSelect>
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
