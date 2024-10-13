import React from "react";
import { removeToken } from "../../utils/auth";

export default function Dashboard({ onSuccess }) {
  const handleLogout = () => {
    removeToken();
    onSuccess(true);
  };
  return (
    <div className="container py-3">
      <h2 className="text-center">chao mung ban quay tro lai</h2>
      <button className="btn btn-danger" onClick={handleLogout}>
        Đăng xuất
      </button>
    </div>
  );
}
