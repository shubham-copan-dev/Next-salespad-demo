"use client";

import React, { useRef } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import authenticate from "@/axios/auth/auth";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const router = useRouter();
  const getEmail = useRef<HTMLInputElement | null>(null);
  const getPasskey = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailInp = getEmail?.current?.value;
    const passInp = getPasskey?.current?.value;
    const data = {
      email: emailInp,
      password: passInp,
      returnSecureToken: true,
    };
    try {
      const response = await authenticate({
        method: "POST",
        data: data,
      });
      console.log("response:", response);
      if (response.registered && response.idToken) {
        window.localStorage.setItem("token", response.idToken);
        confirm("Authentication sucessfull, kindly confirm to redirection");
        // const URL = `displayName=${response.displayName}&localId=${response.localId}`;
        router.push("/");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    ref={getEmail}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    ref={getPasskey}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
