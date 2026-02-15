// src/pages/Login.jsx
import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Link import کریں

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    alert("Login Successful!");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>ای میل</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ای میل درج کریں"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>پاسورڈ</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="پاسورڈ درج کریں"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Login
              </Button>
            </Form>

            {/* Sign Up page کا link */}
            <p className="text-center mt-3">
              نیا اکاؤنٹ بنانا ہے؟ <Link to="/signup">Sign Up</Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
