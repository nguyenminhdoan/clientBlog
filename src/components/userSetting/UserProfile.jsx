import React from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { updateProfile } from "../../pages/userSetting/userSettingAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { importImg } from "../../pages/posts/postAction";

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};

const UserProfile = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    file: null,
  };

  const PF = "http://localhost:3000/images/";
  const { userId } = useParams();
  const dispatch = useDispatch();

  const [formUpdateUser, setFormUpdateUser] = useState(initialState);

  const onFinish = (values) => {
    const { username, email, password } = values;

    let newFormUpdateUser;

    setFormUpdateUser({ ...formUpdateUser, username, email, password });

    console.log(formUpdateUser);

    if (formUpdateUser.file) {
      const formData = new FormData();
      formData.append("name", formUpdateUser.file.file.name);
      formData.append("file", formUpdateUser.file.file);
      newFormUpdateUser = {
        ...formUpdateUser,
        photo: formUpdateUser.file.file.name,
      };

      // dispatch(updateProfile(userId, newFormUpdateUser));
      dispatch(importImg(formData));
      console.log(newFormUpdateUser);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleUploadImg = (e) => {
    const { files } = e.target;

    if (files && files.length > 0) {
      const url = URL.createObjectURL(e.target.files[0]);

      setFormUpdateUser({
        ...formUpdateUser,
        file: { ...files[0], file: files[0], url },
      });
      console.log(formUpdateUser);
    }
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormUpdateUser({ ...formUpdateUser, [name]: value });
    // console.log(formPost);
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
        {formUpdateUser.file && formUpdateUser.file.url && (
          <img className="writeImg" src={formUpdateUser.file.url} alt="" />
        )}

        <label htmlFor="fileInput">
          <i className=" far fa-user-circle"></i>{" "}
        </label>
        <input
          id="fileInput"
          type="file"
          style={{ display: "none" }}
          className="settingsPPInput"
          onChange={handleUploadImg}
        />
      </StyleSetting>
      <Form.Item
        {...formItemLayout}
        label="Username"
        onChange={handleOnchange}
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
        onChange={handleOnchange}
        name="email"
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
        onChange={handleOnchange}
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
