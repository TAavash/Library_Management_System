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
  role_idS,

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
      // profile_pic,
    });
    return response;
  } catch (error) {
    console.error("Registration failed:", error.response);
    throw error;
  }
};


export const uploadProfilePic = async (userId, file) => {
  const formData = new FormData();
  formData.append('profile_pic', file);

  try {
    const response = await axiosInstance.post(`/member/${userId}/profile_pic`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to upload profile picture", error);
    throw error;
  }
};

export const sendcontact = async (
  subject,
  message,
  member_idS,
) => {
  try {
    const response = await axiosInstance.post("/contact", {
      subject,
      message,
      member_idS,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const publicationRegister = async (

  published_year,
  publication_name,
  name_of_publisher,
  place_of_publication,
) => {
  try {
    const response = await axiosInstance.post("/publications", {
      published_year: published_year,
      publication_name: publication_name,
      name_of_publisher: name_of_publisher,
      place_of_publication: place_of_publication,
    });
    return response;
  } catch (error) {
    console.error("Publication Registration failed", error.response);
    throw error;
  }
};
export const bookRegister = async (
  class_number,
  book_number,
  title,
  sub_title,
  edition_statement,
  num_of_page,
  language,
  element_select,
  electronic_location_and_access,
  description,
  name,
  publications_idS

) => {
  try {
    const response = await axiosInstance.post("/book", {
      class_number: class_number,
      book_number: book_number,
      title: title,
      sub_title: sub_title,
      edition_statement: edition_statement,
      description: description,
      element_select: element_select,
      electronic_location_and_access: electronic_location_and_access,
      num_of_page: num_of_page,
      language: language,
      name: name,
      publications_idS: publications_idS
    });
    return response;
  } catch (error) {
    console.error("Book Registration failed", error.response);
    throw error;
  }
};
export const barcodeRegister = async (
  identifier_type,
  identifier_value,
  isbn_number,
  status,
  books_idS
) => {
  try {
    const response = await axiosInstance.post("/BarcodeRFID", {
      identifier_type: identifier_type,
      identifier_value: identifier_value,
      isbn_number: isbn_number,
      status: status,
      books_idS: books_idS
    });
    return response;
  } catch (error) {
    console.error("Barcode Registration failed", error.response);
    throw error;
  }
};

export const imageRegister = async (
  cover_pic,
) => {
  try {
    const response = await axiosInstance.post("", {
      cover_pic: cover_pic,
    });
    return response;
  } catch (error) {
    console.error("Book Cover Registration failed", error.response);
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
  try {
    const response = await axiosInstance.get("/member/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    throw error;
  }
};

export const getAllStudents = async () => {
  try {
    const response = await axiosInstance.get("/member/students");
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    throw error;
  }
};

export const getAllFacultyMembers = async () => {
  try {
    const response = await axiosInstance.get("/member/faculty_members");
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    throw error;
  }
};

export const getAllProgramCoordinators = async () => {
  try {
    const response = await axiosInstance.get("/member/program_coordinators");
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    throw error;
  }
};

export const getLibraryAssistants = async () => {
  try {
    const response = await axiosInstance.get("/member/library_assistants");
    return response.data;
  } catch (error) {
    console.error("Error fetching member data:", error);
    throw error;
  }
};

export const getMemberById = async (user_id) => {
  try {
    const response = await axiosInstance.get(`/member/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
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

export const getAllContact = async () => {
  try {
    const response = await axiosInstance.get("/contact/all");
    return response.data;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    throw error;
  }
};