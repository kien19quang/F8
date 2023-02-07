import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const SideBarItem = styled(Box)(() => ({
  width: '72px',
  height: '72px',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  marginTop: '4px',
  background: '#fff',
  color: '#404040',
  flexDirection: 'column',

  '&:hover, &.active': {
    background: '#e8ebed',
    color: '#1a1a1a'
  }
}));

const IconAdd = styled(Box)(() => ({
  display: 'flex',
  backgroundColor: '#1473e6',
  borderColor: '#1473e6',
  borderRadius: '50%',
  color: '#fff',
  cursor: 'pointer',
  height: '44px',
  width: '44px',
  userSelect: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '8px 0 2px'
}));

export { SideBarItem, IconAdd };
