import {
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';

function App({ children }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <>
            {  
                isLoggedIn === false ? <Navigate to="/login "/> : children 
            }
        </>
    );
}

export default App;
