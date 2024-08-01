import axiosInstance from "./axois";

export const userregister = async (
  username,
  password,
  first_name,
  last_name,
  dob,
  gender,
  address,
  email,
  mobile
) => {
  try {
    const response = await axiosInstance.post("/user", {
      username,
      password,
      first_name,
      last_name,
      dob,
      gender,
      address,
      email,
      mobile,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export const memberRegister = async (
  username,
  password,
  first_name,
  last_name,
  dob,
  gender,
  address,
  email,
  mobile,
  role_idS
) => {
  try {
    const response = await axiosInstance.post("/member", {
      username,
      password,
      first_name,
      last_name,
      dob,
      gender,
      address,
      email,
      mobile,
      role_idS,
    });
    return response;
  } catch (error) {
    console.error("Registration failed:", error.response);
    throw error;
  }
};

export const login = async (username, password) => {
  const response = await axiosInstance.post("/login", {
    username,
    password,
  });
  localStorage.setItem("access_token", response.data.token);
  localStorage.setItem("user_id", response.data.user_id);

  return response;
};

export const logout = () => {
  localStorage.removeItem("access_token");
};

export const userList = async () => {
  const response = await axiosInstance.get("/user/all");
  return response.data.users;
};

export const getAllMember = async () => {
  const response = await axiosInstance.get("/user/all");
  return response.data.users;
};

export const getUserById = async (user_idS) => {
  try {
    const response = await axiosInstance.get(`/users/${user_idS}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const updateStatus = async (user_idS) => {
  try {
    const response = await axiosInstance.put(`/user/${user_idS}/status`);
    return response.data;
  } catch (error) {
    console.error("Error updating user status :", error);
    throw error;
  }
};
