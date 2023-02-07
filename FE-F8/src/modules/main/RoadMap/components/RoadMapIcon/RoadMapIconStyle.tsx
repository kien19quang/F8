import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const IconItem = styled(Box)(() => ({
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginLeft: '8px',
  background: '#fff',

  '&:hover': {
    background: '#d4d4d4'
  }
}));

export { IconItem };
