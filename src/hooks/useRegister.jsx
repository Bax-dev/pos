import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_ROUTES } from "../services/apiService";
import { toast } from "react-toastify";

export const useRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_ROUTES.REGISTER, formData);

      if (response?.data) {
        toast.success("Registration successful! Redirecting to login...");

        setFormData({ username: "", email: "", password: "" });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.error("User already exists.");
      } else if (error.response?.status === 400) {
        toast.error("Invalid registration details.");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  return { handleRegister, formData, setFormData, errorMessage };
};
