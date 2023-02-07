import { Box, Button, InputLabel, MenuItem, Stack } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import ReactHookFormSelect from 'src/form/ReactHookFormSelect';
import { useForm } from 'react-hook-form';
import InputField from 'src/form/InputField';
import { CoursesDto } from '@/src/models/HomePage/Course';
import { Status } from '../../CoursesOverview';
import { EStatus } from 'src/models/BaseEnum';
import { createCourse } from 'src/service/Course/Course';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface FormCourseProps {}
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

const listOptionStatus: Status[] = [
  { title: 'Publish', value: EStatus.PUBLISH },
  { title: 'Close', value: EStatus.CLOSE }
];

const listOptionPro: Status[] = [
  { title: 'Pro', value: EStatus.PUBLISH },
  { title: 'Free', value: EStatus.CLOSE }
];

const schema = yup
  .object()
  .shape({
    title: yup.string().required('This field cannot be empty'),
    slug: yup.string().required('This field cannot be empty'),
    thumbnailUrl: yup.string().required('This field cannot be empty'),
    icon_url: yup.string().required('This field cannot be empty'),
    is_published: yup.boolean().required('This field cannot be empty'),
    is_pro: yup.boolean().required('This field cannot be empty')
  })
  .required();

export default function FormCourse(props: FormCourseProps) {
  const { control, handleSubmit } = useForm<CoursesDto>({
    defaultValues: {
      title: '',
      slug: '',
      thumbnailUrl: '',
      icon_url: ''
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (value: CoursesDto) => {
    console.log(value);
    //const response = await createCourse(value as CoursesDto);
    //console.log(response);
  };

  return (
    <Stack gap="32px" component="form" onSubmit={handleSubmit(onSubmit)}>
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
          <MyLabel required>Slug</MyLabel>
        </WrapperLabel>

        <Box width="50%">
          <InputField name="slug" size="small" control={control} label="Please enter slug..." />
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Thumnail Url</MyLabel>
        </WrapperLabel>

        <Box width="50%">
          <InputField name="thumbnailUrl" size="small" control={control} label="Please enter thumnail url..." />
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Icon url</MyLabel>
        </WrapperLabel>

        <Box width="50%">
          <InputField name="icon_url" size="small" control={control} label="Please enter icon url..." />
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Published</MyLabel>
        </WrapperLabel>

        <Box width="30%">
          <ReactHookFormSelect
            size="small"
            name="is_published"
            label="Choose publish or close..."
            control={control}
            defaultValue={1}
          >
            {listOptionStatus.map((item) => {
              return (
                <MenuItem value={item.value} key={JSON.stringify(item)}>
                  {item.title}
                </MenuItem>
              );
            })}
          </ReactHookFormSelect>
        </Box>
      </WrapperFormControl>

      <WrapperFormControl>
        <WrapperLabel>
          <MyLabel required>Pro</MyLabel>
        </WrapperLabel>

        <Box width="30%">
          <ReactHookFormSelect
            size="small"
            name="is_pro"
            label="Choose between paid or free..."
            defaultValue={0}
            control={control}
          >
            {listOptionPro.map((item) => {
              return (
                <MenuItem value={item.value} key={JSON.stringify(item)}>
                  {item.title}
                </MenuItem>
              );
            })}
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
