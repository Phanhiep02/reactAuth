import { useState } from "react";
import { requestLogin, SaveToken } from "../../utils/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login({ onSuccess }) {
  const [form, setForm] = useState({});
  const [status, setStatus] = useState("idle");
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { email, password } = form;
    if (!email || !password) {
      return alert("vui long nhap day du thong tin");
    }
    setStatus("pending");
    const response = await requestLogin(form);
    setStatus("idle");
    if (!response) {
      return toast.error("sai email hoac password");
    }
    // lưu token lên trình duyệt
    SaveToken(response);
    onSuccess(response);
  };
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="w-50 mx-auto py-3">
        <h2 className="text-center">Login</h2>
        <form action="" onSubmit={handleSubmitForm}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email..."
              name="email"
              onChange={handleChangeValue}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password..."
              name="password"
              onChange={handleChangeValue}
            />
          </div>
          <div className="d-gird">
            <button className="btn btn-primary" disabled={status === "pending"}>
              {status === "pending" ? (
                <strong role="status">Loading...</strong>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}
