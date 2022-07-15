import { createSlice } from "@reduxjs/toolkit";
import { User } from "@types";

type UserState = {
  refreshToken: string | null;
  user: User | null;
};

const initialState: UserState = {
  refreshToken: null,
  user: null,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
