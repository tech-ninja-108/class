import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const Layout = () => {
  const user = useSelector((state) => state.users.users);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
