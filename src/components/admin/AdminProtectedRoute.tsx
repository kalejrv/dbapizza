import { useSelector } from "react-redux";
import { RootState } from "../../state";
import { Navigate, Outlet } from "react-router-dom";
import { AuthState } from "../../types";

export const AdminProtectedRoute = (): JSX.Element => {
  const { isAuthenticated, user } = useSelector((state: RootState): AuthState => state.auth);
  
  return (
    <>
      {
        (!isAuthenticated || (user?.role !== "admin"))
          ? <Navigate to="/signin" replace/>
          : <Outlet />
      }
    </>
  );
};
