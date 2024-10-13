//  callAPI
export const requestLogin = async (data) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_API}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
// lưu vào token đang ở dạng obj lưu về chuỗi
export const SaveToken = (token) => {
  localStorage.setItem("authToken", JSON.stringify(token));
};
export const getToken = () => {
  try {
    return JSON.parse(localStorage.getItem("authToken"));
  } catch {
    return false;
  }
};
export const removeToken = () => {
  localStorage.removeItem("authToken");
};
