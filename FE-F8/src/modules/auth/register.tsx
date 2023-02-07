import { RegisterDto } from '@/src/models/Auth/AuthModel';
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, IconButton, InputAdornment, Stack, styled, Typography } from '@mui/material';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'src/app/hooks';
import InputField from 'src/form/InputField';
import { useDebounce } from 'src/hooks';
import { findEmailUser, registerUser, sendCodeToEmail } from 'src/service/Auth/AuthService';
import * as yup from 'yup';
import { setIsLoggedIn } from './auth-slice';
import { toast } from 'react-toastify';

export interface IRegisterProps {}

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

const schema = yup
  .object()
  .shape({
    name: yup.string().required('This field cannot be empty'),
    email: yup.string().email('Invalid email format').required('This field cannot be empty'),
    password: yup
      .string()
      .trim()
      .min(6, 'Password must be longer than 6 characters')
      .required('This field cannot be empty'),
    codeVerify: yup.number().min(100000).max(999999).required('This field cannot be empty')
  })
  .required();

export default function Register(props: IRegisterProps) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
    setError,
    clearErrors
  } = useForm<RegisterDto>({ resolver: yupResolver(schema) });

  const [showPassword, setShowPassword] = React.useState(false);
  const [isSendCode, setIsSendCode] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const email = useDebounce(watch().email, 500);

  React.useEffect(() => {
    clearErrors('email');
    const checkEmail = async () => {
      const res = await findEmailUser(email);
      if (res.success) {
        setError('email', { message: 'This email already exists' });
      } else {
        setIsSendCode(true);
      }
    };

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailFormat.test(email)) {
      checkEmail();
    } else if (isSendCode) {
      setIsSendCode(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, setError]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSendCode = async () => {
    await sendCodeToEmail(email);
  };

  const handleRegisterUser = async (data: RegisterDto) => {
    const res = await registerUser(data);
    if (res.success) {
      dispatch(setIsLoggedIn(true));
      window.localStorage.setItem('accessToken', res.data?.token || '');
      toast.success('Đăng ký tài khoản thành công');
    }
  };

  return (
    <Stack maxWidth="100%" width="380px" component="form" onSubmit={handleSubmit(handleRegisterUser)}>
      <Box>
        <Stack>
          <Typography component="label" fontWeight="600" fontSize="14px" margin="10px 0 10px 8px">
            Tên của bạn?
          </Typography>
        </Stack>

        <CustomInput control={control} name="name" placeholder="Họ và tên của bạn" />
      </Box>

      <Box mt="10px">
        <Stack>
          <Typography component="label" fontWeight="600" fontSize="14px" margin="10px 0 10px 8px">
            Email
          </Typography>
        </Stack>

        <CustomInput control={control} name="email" placeholder="Địa chỉ email" />
      </Box>

      <Box mt="10px">
        <CustomInput
          control={control}
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Mật khẩu"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Box mt="10px">
        <CustomInput
          control={control}
          name="codeVerify"
          placeholder="Nhập mã xác nhận"
          disabled={!isSendCode}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  sx={{
                    borderRadius: '44px',
                    minWidth: '140px',
                    mr: '-14px',
                    height: '42px',
                    boxShadow: 'none',
                    border: 'none',
                    '&:hover': {
                      opacity: '0.9',
                      cursor: 'pointer',
                      boxShadow: 'none'
                    }
                  }}
                  variant="contained"
                  disabled={!isSendCode}
                  onClick={handleSendCode}
                >
                  <Typography fontSize="14px" fontWeight="600">
                    Gửi mã
                  </Typography>
                </Button>
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Box mt="20px">
        <Button
          variant="contained"
          type="submit"
          disabled={!isValid}
          sx={{
            width: '100%',
            borderRadius: '44px',
            height: '44px'
          }}
        >
          Đặng ký
        </Button>
      </Box>
    </Stack>
  );
}
