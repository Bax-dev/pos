import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title || "Default Title";  
  }, [title]);  

  return;
};

export default useTitle;
