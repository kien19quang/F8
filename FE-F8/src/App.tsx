import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import MainModule from './modules/MainModule';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback={<div>Loading...</div>}>
        <MainModule />
      </React.Suspense>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  );
};

export default App;
