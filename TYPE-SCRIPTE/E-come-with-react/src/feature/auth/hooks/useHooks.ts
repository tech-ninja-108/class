import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import type { Login, Register } from "../Types/AuthTypes";
import { authAction, authMe } from "../state/authAction";
import { useAppDispatch } from "./reduxHooks";

export const useHooks = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, reset, handleSubmit } = useForm<Login & Register>();
  const loginSumbit: SubmitHandler<Login> = async (data) => {
    const res = await dispatch(authAction(data)).unwrap();
    const token = res.accessToken;
    localStorage.setItem("access_token", token);
    dispatch(authMe()).unwrap();
    reset();
  };

  const registerSumbit: SubmitHandler<Register> = () => {};
  return {
    navigate,
    register,
    handleSubmit,
    loginSumbit,
    registerSumbit,
  };
};
