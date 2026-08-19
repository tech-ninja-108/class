import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
// import { authLogin } from "../api/Authapi";
import { useDispatch } from "react-redux";
// import { addUser } from "../state/authSlice";
import { loginAction } from "../state/thunkAction";

export const Authhooks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const LoginSumbit = async (data) => {
    dispatch(loginAction(data));
    reset();
  };
  return {
    navigate,
    register,
    LoginSumbit,
    handleSubmit,
  };
};
