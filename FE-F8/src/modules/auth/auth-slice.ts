import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthSlice {
  isLoggedIn: boolean;
}

const initialState: IAuthSlice = {
  isLoggedIn: false
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state: IAuthSlice, action: PayloadAction<boolean>) => {
      return { ...state, isLoggedIn: action.payload };
    },
    setToken: (state: IAuthSlice, action: PayloadAction<string>) => {
      return { ...state, token: action.payload };
    }
  }
});

export const { setIsLoggedIn, setToken } = AuthSlice.actions;

export default AuthSlice.reducer;
