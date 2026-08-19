import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Mycontext } from "../context/Mycontex";

export const sumbitData = () => {
  const { setIsLogined, RegisterUser, setRegisterUser } = useContext(Mycontext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    const findUser = RegisterUser.find((user) => {
      return user.email.toLowerCase() == data.email.toLowerCase();
    });
    if (!findUser) {
      alert("User not found");
    }
    const passMatch = RegisterUser.find((user) => {
      return user.password == data.password;
    });
    if (!passMatch) {
      alert("Enter vailed password");
      return;
    }
    setIsLogined(findUser);
    reset();
    navigate("/main");
  };

  const registerForm = (data) => {
    const findUser = RegisterUser.find((user) => {
      return user.email == data.email;
    });
    if (findUser) {
      alert("User all ready exits");
      navigate("/login");
      return;
    }
    const newUser = {
      ...data,
      id: Date.now(),
    };
    alert("user register");
    setRegisterUser([...RegisterUser, newUser]);
    setIsLogined(newUser);
    navigate("/main");
    reset();
  };

  return {
    submitForm,
    register,
    handleSubmit,
    registerForm,
    navigate,
  };
};
