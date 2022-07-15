import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Organization } from "@types";
import { RootState } from "./store";

const initialState: Organization[] = [];

const groupsSlice = createSlice({
  name: "Organizations",
  initialState,
  reducers: {
    setOrganizations(state, action: PayloadAction<Organization[]>) {
      return action.payload;
    },
    addOrganization(state, action: PayloadAction<Organization>) {
      state.push(action.payload);
    },
  },
});

export const { setOrganizations, addOrganization } = groupsSlice.actions;
export const getOrgById = (id: number) => (state: RootState) =>
  state.organizations.find((org) => org.id === id);

export const getAllOrganizations = (state: RootState) => state.organizations;

export default groupsSlice.reducer;
