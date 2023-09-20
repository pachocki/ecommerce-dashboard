"use client"
import { useEffect, useState } from "react";
const useOrigin = () => {
  const [mounted, setMountend] = useState(false);
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  useEffect(()=>{
    setMountend(true)
  },[])
  return origin;
};

export default useOrigin;
