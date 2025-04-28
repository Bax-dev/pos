// useUser.js
import { useState, useEffect } from "react";

const useUser = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); 
    }
  }, []); 

  return username;
};

export default useUser;
