// src/pages/SignUp.jsx
import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";  // Link import کریں

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", formData);
    alert("Sign Up Successful!");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>نام</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="اپنا نام درج کریں"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

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

              <Button variant="primary" type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>

            {/* Login page کا link */}
            <p className="text-center mt-3">
              پہلے سے اکاؤنٹ ہے؟ <Link to="/login">Login</Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
