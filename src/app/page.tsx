"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Auth = () => {
  const [authorize, setAuthorize] = useState(false);
  const [token, setToken] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token") || "";
    setToken(storedToken);
    setAuthorize(!!token);

    if (!authorize) {
      router.push("/login");
    } else {
      router.push("/");
    }
  }, [token, authorize, router]);

  return (
    <div>
      {!authorize && <h2>Verifying....</h2>}
      {authorize && <h2>Welcome...</h2>}
    </div>
  );
};

export default Auth;
