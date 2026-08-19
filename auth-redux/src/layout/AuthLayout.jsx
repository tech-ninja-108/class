import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const user = useSelector((state) => state.users.users);

  if (user) {
    return <Navigate to="/main/home" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
