import { BlogDto } from '@/src/models/Blog/BlogModel';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, InputLabel, Slide, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import { Box } from '@mui/system';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import DialogComponent from 'src/components/Common/Dialog/Dialog';
import InputField from 'src/form/InputField';
import * as yup from 'yup';

export interface CreateEditBlogProps {
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
    title: yup.string().required('This field cannot be empty'),
    description: yup.string().required('This field cannot be empty'),
    slug: yup.string().required('This field cannot be empty'),
    thumbnail_url: yup.string().required('This field cannot be empty')
  })
  .required();

export default function CreateEditBlog({ isOpen, close }: CreateEditBlogProps) {
  const { control, handleSubmit } = useForm<BlogDto>({
    defaultValues: {
      title: '',
      description: '',
      slug: '',
      thumbnail_url: ''
    },
    resolver: yupResolver(schema)
  });

  const OnSubmit = (value: BlogDto) => {
    console.log(value);
  };

  return (
    <DialogComponent
      open={isOpen}
      close={close}
      title="Create Blog"
      TransitionComponent={Transition}
      keepMounted
      maxWidth="md"
      fullWidth
    >
      <Stack gap="32px" component="form" onSubmit={handleSubmit(OnSubmit)}>
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
            <MyLabel required>Thumnail Url</MyLabel>
          </WrapperLabel>

          <Box width="50%">
            <InputField name="thumbnail_url" size="small" control={control} label="Please enter thumnail url..." />
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
