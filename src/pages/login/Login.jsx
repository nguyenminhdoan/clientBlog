import { Form, Input, Button, Checkbox, Col, Alert } from "antd";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "./loginAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { resetMessage } from "../login/loginSlice";
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

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuth, error } = useSelector((state) => state.userLogin);

  // check here
  // console.log(isAuth);

  useEffect(() => {
    sessionStorage.getItem("accessJWT") && history.push("/");
  }, [history, isAuth]);

  const onFinish = (values) => {
    const { username, password } = values;

    dispatch(userLogin({ username, password }));
    isAuth && history.push("/");
    // window.location.replace("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    return () => {
      error && dispatch(resetMessage());
    };
  }, [dispatch, error]);

  return (
    <StyleLogin>
      <StyleLoginTitle className="loginTitle">Login</StyleLoginTitle>
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
          <Input />
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
          <Input.Password />
        </Form.Item>
        <Col>{error && <Alert message={error} type="error" showIcon />}</Col>
        <Col>
          Don't have account yet? {}
          <Link to="/register">Sign up for free!</Link>
        </Col>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </StyleLogin>
  );
};

const StyleLogin = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
`;
const StyleLoginTitle = styled.span`
  font-size: 50px;
  background: -webkit-linear-gradient(#38b4ae, #623ca0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 20px;
`;

export default Login;
