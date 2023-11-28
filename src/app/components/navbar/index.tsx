import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import logo from "../../../../public/assets/images/demo-logo.png";
import { Form } from "react-bootstrap";
import Button from "../common/button/Button";
import { useRouter } from "next/navigation";

function TopNavigation() {
  const router = useRouter();
  function handleClick() {
    window.localStorage.clear();
    router.push("/login");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Image
              src={logo}
              alt="Description of the image"
              width={100}
              height={50}
            />
          </Link>
        </Navbar.Brand>
        <div className="search-container">
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Search"
          />
        </div>
        <div className="login-logout-btn-container">
          <Button classes="primary" value="Logout" handleClick={handleClick} />
        </div>
      </Container>
    </Navbar>
  );
}

export default TopNavigation;
