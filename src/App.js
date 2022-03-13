import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { userAccessTokenValidate } from "./utils/fetchUser";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = userAccessTokenValidate();
    if (!refreshToken) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
