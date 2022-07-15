import { createSlice } from "@reduxjs/toolkit";

type SessionState = {
  authenticated: boolean;
  accessToken: string | null;
};

const initialState: SessionState = {
  authenticated: false,
  accessToken: null,
};

const sessionSlice = createSlice({
  name: "Session",
  initialState,
  reducers: {},
});

export const {} = sessionSlice.actions;

export default sessionSlice.reducer;
