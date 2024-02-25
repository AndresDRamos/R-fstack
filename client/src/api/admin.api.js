import axios from "./axios.api";

export const adminUsersRequest = async (params) =>
  axios.get("/admin/users", params);
