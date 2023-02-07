import DialogComponent from 'src/components/Common/Dialog/Dialog';
import { Box, Button, InputLabel, MenuItem, Slide, Stack } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import ReactHookFormSelect from 'src/form/ReactHookFormSelect';
import InputField from 'src/form/InputField';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { CreateRoadmapDto } from '@/src/models/RoadMap/RoadMapModels';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export interface CreateEditRoadmapProps {
  isOpen: boolean;
  close: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
    courses: yup.array().of(yup.string()).min(1, 'This field cannot be empty'),
    title: yup.string().required('This field cannot be empty'),
    description: yup.string().required('This field cannot be empty'),
    slug: yup.string().required('This field cannot be empty'),
    image_url: yup.string().required('This field cannot be empty')
  })
  .required();

export default function CreateEditRoadmap({ isOpen, close }: CreateEditRoadmapProps) {
  const { control, handleSubmit } = useForm<CreateRoadmapDto>({
    defaultValues: {
      courses: [],
      title: '',
      description: '',
      slug: '',
      image_url: ''
    },
    resolver: yupResolver(schema)
  });

  const OnSubmit = (value: CreateRoadmapDto) => {
    console.log(value);
  };

  return (
    <DialogComponent
      open={isOpen}
      close={close}
      title="Create Road Map"
      TransitionComponent={Transition}
      keepMounted
      maxWidth="md"
      fullWidth
    >
      <Stack gap="32px" component="form" onSubmit={handleSubmit(OnSubmit)}>
        <WrapperFormControl>
          <WrapperLabel>
            <MyLabel required>Courses</MyLabel>
          </WrapperLabel>

          <Box width="50%">
            <ReactHookFormSelect size="small" name="courses" label="Choose course..." control={control}>
              <MenuItem value={1}>JavaScript</MenuItem>
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
            <MyLabel required>Description</MyLabel>
          </WrapperLabel>

          <Box width="50%">
            <InputField name="description" size="small" control={control} label="Please enter description..." />
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
            <MyLabel required>Image Url</MyLabel>
          </WrapperLabel>

          <Box width="50%">
            <InputField name="image_url" size="small" control={control} label="Please enter image url..." />
          </Box>
        </WrapperFormControl>

        <Stack direction="row" justifyContent="flex-end" mt="20px">
          <Button variant="contained" sx={{ width: '74px' }} type="submit">
            Save
          </Button>
        </Stack>
      </Stack>
    </DialogComponent>
  );
}
