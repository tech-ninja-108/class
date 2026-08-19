import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUsers } from "../features/usersSlice";

export const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userRegister, setuserRegister] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || [],
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerSubmit = (data) => {
    const findData = userRegister.find((val) => {
      return data.email.toLowerCase() == val.email.toLowerCase();
    });
    if (findData) {
      alert("Allready exist");
      return;
    }
    const user = [...userRegister, data];
    setuserRegister(user);
    localStorage.setItem("registerUsers", JSON.stringify(user));
    alert("User register successfully");
    reset();
    navigate("/main");
  };

  const loginSubmit = (data) => {
    const findData = userRegister.find((val) => {
      return val.email.toLowerCase() == data.email.toLowerCase();
    });
    if (!findData) {
      alert("Something wrong..");
      return;
    }
    dispatch(addUsers(findData));
    localStorage.setItem("loginedUser", JSON.stringify(findData));
    reset();
    alert("User logined");
  };

  return {
    register,
    handleSubmit,
    errors,
    navigate,
    registerSubmit,
    loginSubmit,
  };
};
