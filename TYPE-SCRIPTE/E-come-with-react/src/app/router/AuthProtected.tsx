import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../feature/auth/hooks/reduxHooks";

const AuthProtected = () => {
  const { isLoading, user } = useAppSelector((state) => state.auth);
  if (isLoading) return <h1>Loading...</h1>;
  if (user) return <Navigate to={"/home"} replace />;

  return <Outlet />;
};

export default AuthProtected;
