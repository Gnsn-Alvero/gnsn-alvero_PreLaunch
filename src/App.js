import "./App.css";
import Home from "./components/Home/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginHome from "./components/Login/LoginHome";
import UseTypeScreen from "./components/SurveyQuestions/UseTypeScreen";
import ServiceTypeScreen from "./components/SurveyQuestions/ServiceTypeScreen";
import SignUp from "./components/Login/SignUp";
import AuthProvider from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>

        <Router>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/signup" Component={SignUp} />
                <Route path="/login" Component={LoginHome}></Route>
                <Route path="/login/loggedin" Component={UseTypeScreen} />
                <Route path="/servicetype" Component={ServiceTypeScreen} />
                <Route path="*" Component={Err} />
            </Routes>
        </Router>
        
        </AuthProvider>
    );
}

const Err = () => {
    return (
        <div>
            <center style={{ margin: "28em auto" }}>
                <h1>Error 404: Page Not Found</h1>
            </center>
        </div>
    );
};

export default App;
