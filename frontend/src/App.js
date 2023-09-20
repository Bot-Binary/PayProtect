import './App.css';
import Signupparent from './component/parent/Signup/signupparent';
import Home from './Home'
import ParentLogin from './component/parent/Login/Login';
import OtpVerification from './component/otp/Otp';
import Dashboard from './component/parent/Dashboard/Dashboard';
import Mpin from './component/mpin/Mpin'
import MerchantDashboard from './component/Merchant/Dashboard/Dashboard'
import MerchantLogin from './component/Merchant/Login/MerchantLogin';
import MerchantSignup from './component/Merchant/Signup/MerchantSignup'
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/otp" element={<OtpVerification />} />
                <Route path="/mpin" element={<Mpin />} />
                <Route path="/parent">
                    <Route index element={<Signupparent />} />
                    <Route path="signup" element={<Signupparent />} />
                    <Route path="login" element={<ParentLogin />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/merchant">
                    <Route index element={<MerchantSignup />} />
                    <Route path="signup" element={<MerchantSignup />} />
                    <Route path="login" element={<MerchantLogin />} />
                    <Route path="dashboard" element={<MerchantDashboard />} />
                </Route>
            </Routes>
        </>

        // <div className="App">
        //     <Signupparent />
        // </div>
    );
}

export default App;
