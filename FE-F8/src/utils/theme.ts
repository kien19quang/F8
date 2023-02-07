import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif'
  },
  palette: {
    primary: {
      main: '#f05123'
    },
    secondary: {
      light: '#EDF7FA',
      main: '#2e95ea'
    },
    error: {
      main: red.A400
    },
    text: {
      primary: '#000'
    }
  },

  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg'
      },
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',

          '@media (min-width: 600px)': {
            maxWidth: '680px'
          }
        },

        maxWidthMd: {
          maxWidth: '860px',

          '@media (min-width: 900px)': {
            maxWidth: '860px'
          }
        },

        maxWidthLg: {
          maxWidth: '1200px',

          '@media (min-width: 1200px)': {
            maxWidth: '1200px'
          }
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: '#161823',

          '&:hover': {
            textDecoration: 'underline'
          }
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Montserrat, sans-serif'
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            color: 'white',
            textTransform: 'none',
            boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',

            '&:hover': {
              background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)),#f05123'
            }
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: 'rgba(0, 0, 0, 0.87)',
            textTransform: 'none',
            boxShadow: '0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)',
            backgroundColor: 'white',
            borderRadius: '5px',
            fontSize: '14px',

            '&:hover': {
              background: 'white'
            }
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            minWidth: '106px'
          }
        },
        {
          props: { variant: 'text' },
          style: {
            '&:hover': {
              background: 'rgba(22, 24, 35, 0.03)'
            }
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            border: '1px solid rgb(22, 24, 35, 0.12)',
            backgroundColor: '#fff',
            borderRadius: '999px',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 0 10px rgb(0 0 0 / 20%)',
            textTransform: 'none',
            height: '35px',

            '&:hover': {
              borderColor: 'rgb(208, 209, 211)',
              backgroundColor: 'rgb(248, 248, 248)',
              boxShadow: '0 0 10px rgb(0 0 0 / 20%)'
            }
          }
        }
      ]
    },
    MuiChip: {
      styleOverrides: {
        root: {
          paddingInline: 2
        }
      },

      variants: [
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: '#2e95ea',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '12px'
          }
        },
        {
          props: { color: 'warning' },
          style: {
            backgroundColor: '#f89c26'
          }
        },
        {
          props: { color: 'success' },
          style: {
            backgroundColor: '#4caf50'
          }
        },
        {
          props: { color: 'success' },
          style: {
            backgroundColor: '#4caf50'
          }
        },
        {
          props: { size: 'medium' },
          style: {
            fontSize: '12px',
            display: 'flex',
            height: '24px',
            color: 'white',
            fontWeight: 'bold'
          }
        }
      ]
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
