import InputField from 'src/form/InputField';
import { Stack, Box, Typography, styled, Button } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginDto } from '@/src/models/Auth/AuthModel';
import { loginUser } from 'src/service/Auth/AuthService';
import { useAppDispatch } from 'src/app/hooks';
import { setIsLoggedIn } from './auth-slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export interface ILoginProps {}

const CustomInput = styled(InputField)(({ theme }) => ({
  '& fieldset': {
    borderRadius: '44px'
  },
  input: {
    fontSize: '14px',
    height: '10px',
    caretColor: `${theme.palette.primary.main}`
  }
}));

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('This field cannot be empty'),
  password: yup
    .string()
    .trim()
    .min(6, 'Password must be longer than 6 characters')
    .required('This field cannot be empty')
});

export default function Login(props: ILoginProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm<LoginDto>({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (data: LoginDto) => {
    const res = await loginUser(data);
    if (res.success) {
      window.localStorage.setItem('accessToken', res.data?.token || '');
      dispatch(setIsLoggedIn(true));
      navigate('/');
      toast.success('Đăng nhập thành công');
    }
  };

  return (
    <Stack maxWidth="100%" width="380px" component="form" onSubmit={handleSubmit(handleLogin)}>
      <Box>
        <Stack>
          <Typography component="label" fontWeight="600" fontSize="14px" margin="10px 0 10px 8px">
            Email
          </Typography>
        </Stack>

        <CustomInput control={control} name="email" placeholder="Địa chỉ email" />
      </Box>
      <Box mt="10px">
        <CustomInput control={control} name="password" type="password" placeholder="Mật khẩu" />
      </Box>
      <Box mt="20px">
        <Button
          variant="contained"
          type="submit"
          sx={{ width: '100%', borderRadius: '44px', height: '44px' }}
          disabled={!isValid}
        >
          Đặng nhập
        </Button>
      </Box>
    </Stack>
  );
}
