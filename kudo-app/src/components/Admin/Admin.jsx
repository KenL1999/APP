import React, { useEffect } from "react";
import Storage from "../Storage/Storage";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

function Admin() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated == false) {
      navigate("/");
    }
  }, []);

  return <>{isAuthenticated ? <Storage /> : ""}</>;
}
export default Admin;