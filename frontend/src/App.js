import './App.css';
import Signupparent from './component/parent/Signup/signupparent';
import Home from './Home'
import Login from './component/parent/Login/Login';
import OtpVerification from './component/parent/Signup/Otp';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/otp" element={<OtpVerification />} />
                <Route path="/parent">
                    <Route index element={<Signupparent />} />
                    <Route path="signup" element={<Signupparent />} />
                    <Route path="login" element={<Login />} />
                </Route> 
            </Routes>
        </>

        // <div className="App">
        //     <Signupparent />
        // </div>
    );
}

export default App;
