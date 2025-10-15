import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types';

const savedToken: string | null = localStorage.getItem("token");
const savedUser: string | null = localStorage.getItem("user");

const initialState: AuthState = {
  isAuthenticated: !!savedToken,
  user: savedUser ? JSON.parse(savedUser) : null,
  token: savedToken,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<AuthState>): void  => {
      const { payload } = action;

      state.isAuthenticated = true;
      state.user = payload.user || null;
      state.token = payload.token;

      if (payload.user && payload.token) {
        localStorage.setItem("user", JSON.stringify(payload.user));
        localStorage.setItem("token", payload.token);
      };
    },
    logout: (state: AuthState): void => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;
