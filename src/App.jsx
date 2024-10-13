import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Auth/login";
import { getToken } from "./utils/auth";
import Dashboard from "./components/Dashboard/Dashboard";

export default function App() {
  const [isAuthenticate, setIsAuthentication] = useState(false);
  const checkAuth = () => {
    const token = getToken();
    if (token) {
      setIsAuthentication(true);
    }
  };
  // đăng nhập đổi giao diện luôn lại set về true
  const handleLoginSuccess = () => {
    setIsAuthentication(true);
  };
  // dang xuat
  const handleLogoutSuccess = () => {
    setIsAuthentication(false);
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      {isAuthenticate ? (
        <Dashboard onSuccess={handleLogoutSuccess}></Dashboard>
      ) : (
        <Login onSuccess={handleLoginSuccess}></Login>
      )}
    </>
  );
}
