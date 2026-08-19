import { useDispatch } from "react-redux";
import { loginEmployee } from "../state/auth/actionRedux";
import { useForm } from "react-hook-form";

export const authHandal = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const loginSumbit = async (data) => {
    try {
      dispatch(loginEmployee(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    handleSubmit,
    loginSumbit,
  };
};
