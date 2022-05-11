import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AuthedRoute from "./AuthedRoute";
import App from "../App";
import Login from "../containers/Login";
import Registration from "../containers/Registration";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AuthedRoute>
                            <App />
                        </AuthedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
