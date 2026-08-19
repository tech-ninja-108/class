import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../../feature/auth/hooks/reduxHooks";

const Protected = () => {
  const { user, isLoading } = useAppSelector((state) => state.auth);
  if (isLoading) return <h1>Loading...</h1>;
  if (!user) return <Navigate to={"/login"} replace />;
  return <Outlet />;
};

export default Protected;
