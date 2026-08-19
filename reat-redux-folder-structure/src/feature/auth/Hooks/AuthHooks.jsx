import { useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import instance from "../../../config/axiosInstance";
import { useDispatch } from "react-redux";
import { addUser } from "../State/authSlice";

export const AuthHooks = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const dishpatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const LoginSumbit = async (data) => {
    try {
      const response = await instance.post("/auth/login", data);
      localStorage.setItem("accessToken", response.data.accessToken);
      dishpatch(addUser(response.data));
      navigate("/main");
      reset();
      console.log(response);
    } catch (error) {
      //   console.log("Register ", error);
      console.log(error.response?.data?.message || "Login failed");
    }
    console.log(data);
  };

  return {
    showConfirmPassword,
    setShowConfirmPassword,
    showPassword,
    setShowPassword,
    navigate,
    register,
    handleSubmit,
    errors,
    LoginSumbit,
  };
};
