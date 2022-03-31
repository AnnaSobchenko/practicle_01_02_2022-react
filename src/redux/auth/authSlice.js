import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    idToken: null,
    user: {
      email: null,
      name: "",
    },
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [registerUser.pending]: (state, { payload }) => {
      return { ...state, isLoading: true, error: null };
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        idToken: payload.idToken,
        localId: payload.localId,
        email: payload.email,
        refereshToken: payload.refreshToken,
        isLoading: false,
      };
    },
    [registerUser.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
  },
});

export default authSlice.reducer;
