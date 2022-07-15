import { Organization } from "@constants/types";
import API from "./api";
const getAllUserOrganizations = async (
  userId: number
): Promise<Organization[]> => {
  const ret = await API.get(`/user/${userId}`);
  return ret.positions.map((pos: any) => pos.organization);
};

export default {
  getAllUserOrganizations,
};
