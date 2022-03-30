import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: {},
});

export default authSlice.reducer;
