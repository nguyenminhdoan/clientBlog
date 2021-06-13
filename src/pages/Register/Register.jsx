import { Button, Col, Form, Input, Alert, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { registerNewUser } from "./registerAction";
import { resetMessage } from "./registerSlice";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, status, message } = useSelector(
    (state) => state.userRegister
  );

  const onFinish = (values) => {
    const { username, email, password } = values;

    dispatch(registerNewUser({ username, email, password }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  status === "success" && window.location.replace("/login");

  useEffect(() => {
    return () => {
      message && dispatch(resetMessage());
    };
  }, [dispatch, message]);

  return (
    <StyleRegister>
      <StyleRegisterTitle className="loginTitle">Register</StyleRegisterTitle>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Username " style={{ borderRadius: "5px" }} />
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Email " style={{ borderRadius: "5px" }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            style={{ borderRadius: "5px" }}
          />
        </Form.Item>
        <Col>
          {message && (
            <Alert
              message={message}
              type={status === "success" ? "success" : "error"}
            ></Alert>
          )}
        </Col>
        <Col>
          <span>Already register?</span>
          <Link to="/Login"> Login</Link>
          {isLoading && <Spin tip="loading" />}
        </Col>

        <Form.Item {...tailLayout}>
          <Button
            style={{ marginTop: "18px" }}
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </StyleRegister>
  );
};

const StyleRegister = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-size: cover;
  a {
    font-size: 16px;
    padding: 20px;
    :hover {
      color: #276dbd;
    }
  }
`;
const StyleRegisterTitle = styled.span`
  font-size: 50px;
  background: -webkit-linear-gradient(#38b4ae, #623ca0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 20px;
`;

export default Register;
