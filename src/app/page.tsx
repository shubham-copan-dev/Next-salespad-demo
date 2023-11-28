"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopNavigation from "./components/navbar";
import Footer from "./components/footer";
import Sidenav from "./components/sidenav";

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
      {authorize && (
        <main>
          <div className="page-wrapper">
            <TopNavigation />
            <div className="page-content-wrapper">
              <Sidenav />
              <p className="page-content">
                <div>
                  <h2>This is a default Home page content for user</h2>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem natus, odit commodi quas ab corporis enim. Eos alias
                    itaque officia vitae corporis! Ducimus cupiditate distinctio
                    eveniet quibusdam illo. In, voluptatum.
                  </h6>
                </div>
              </p>
            </div>
            <Footer />
          </div>
        </main>
      )}
    </div>
  );
};

export default Auth;
