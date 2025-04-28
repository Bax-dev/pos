// useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Corrected the import to match the function name
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
    setErrorMessage("");

    try {

      const response = await axios.post(API_ROUTES.LOGIN, formData);

      console.log("Full login response:", response);

      if (response.status === 200) {
        const { token } = response.data; 

        if (!token) {
          console.error("No token found in response!");
        } else {
          console.log("Received token:", token);

          // Decode the JWT token
          const decodedToken = jwtDecode(token);  // Use the correct function name

          const username = decodedToken.username;

          localStorage.setItem("token", token);
          localStorage.setItem("username", username);

          toast.success("Logged in successfully!");

          setFormData({ username: "", password: "" });
          setTimeout(() => {
            navigate("/dashboard");
          }, 1500);
        }
      } else {
        console.error("Unexpected response status:", response.status);
        toast.error("Unexpected response status. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error);
        toast.error(error.response.data.error);
      } else {
        setErrorMessage("Login failed. Please try again.");
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return { handleLogin, formData, setFormData, errorMessage };
};
