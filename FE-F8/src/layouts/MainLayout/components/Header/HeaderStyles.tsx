import { styled, TextField } from '@mui/material';

const MyTextField = styled(TextField)(() => ({
  [`& fieldset`]: {
    borderRadius: 20
  }
}));

export { MyTextField };
