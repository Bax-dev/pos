// import { useState } from "react";
// import axios  from "axios"; 
// import { API_ROUTES } from "../services/apiService";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const useLogin = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(API_ROUTES.LOGIN, formData);

//       if (response.status === 200) {
//         toast.success("Login successful!");
//         setFormData({ email: "", password: "" }); 
//       }
//     } catch (error) {
//       setErrorMessage("Login failed. Please try again.");
//       toast.error("Login failed. Please try again.");
//     }
//   };

//   return { handleLogin, formData, setFormData, errorMessage };
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { API_ROUTES } from "../services/apiService";

export const useLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
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
        setFormData({ email: "", password: "" });

        // Redirect after a short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      }
    } catch (error) {
      setErrorMessage("Login failed. Please try again.");
      toast.error("Login failed. Please try again.");
    }
  };

  return { handleLogin, formData, setFormData, errorMessage };
};
