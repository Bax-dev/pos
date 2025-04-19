
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ROUTES } from "../services/apiService";

export const useLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_ROUTES.LOGIN, formData);

      if (response.status === 200) {
        toast.success("Logged in successfully");
        setFormData({ username: "", password: "" });
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return { handleLogin, formData, setFormData, errorMessage };
};
