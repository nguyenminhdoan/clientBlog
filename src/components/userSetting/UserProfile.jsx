import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styled from "styled-components";

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};

const UserProfile = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <StyleSetting>
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <label htmlFor="fileInput">
          <i className=" far fa-user-circle"></i>{" "}
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          className="settingsPPInput"
        />
      </StyleSetting>
      <Form.Item
        {...formItemLayout}
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="type your username" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Email"
        name="Email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input placeholder="type your email" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="type your password" />
      </Form.Item>

      <Form.Item>
        <Button
          style={
            ({ display: "flex" },
            { alignItems: "center" },
            { justifyContent: "center" })
          }
          shape="round"
          size="large"
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

const StyleSetting = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 30px;

  img {
    height: 70px;
    width: 70px;
    border-radius: 20px;
    object-fit: cover;
  }
  i {
    width: 25px;
    height: 25px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    margin-left: 10px;
    color: white;
    background-color: lightcoral;
    cursor: pointer;
  }
`;
export default UserProfile;
