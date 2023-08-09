import { useEffect } from "react";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import { useAuthContext } from "./contexts/AuthContexts";

const App = () => {
  const { checkAuth } = useAuthContext();
  useEffect(() => {
    checkAuth();
  }, []);
  return <MainRoutes />;
};

export default App;
