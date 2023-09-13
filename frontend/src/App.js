import './App.css';
import Signupparent from './component/parent/Signup/signupparent';
import Home from './Home'
import ParentLogin from './component/parent/Login/Login';
import OtpVerification from './component/parent/Signup/Otp';
import Dashboard from './component/parent/Dashboard/Dashboard';
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
                    <Route path="login" element={<ParentLogin />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="mpin" element={<Mpin />} />
                </Route> 
                <Route path="/merchant">
                    <Route index element={<MerchantSignup />} />
                    <Route path="signup" element={<MerchantSignup />} />
                    <Route path="login" element={<MerchantLogin />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="mpin" element={<Mpin />} />
                </Route> 
            </Routes>
        </>

        // <div className="App">
        //     <Signupparent />
        // </div>
    );
}

export default App;
