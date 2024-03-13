import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignup: (state, action: PayloadAction<{ user: any }>) => {
      state.user = action.payload.user;
    },
    setLogin: (state, action: PayloadAction<{ user: any }>) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
    },
  },
});

export const { setSignup, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
