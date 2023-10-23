import { commonrequest } from "./ApiCall";
import {BACKEND_URL} from "./helper";


export const merchantRegister = async(data)=>{
    console.log(data)
    return await commonrequest("POST",`${BACKEND_URL}/merchant/signup`, data)
}

export const merchantLogin = async(data)=>{
    console.log(data)
    return await commonrequest("POST",`${BACKEND_URL}/login`, data)
}

export const sentOtpFunction = async(data)=>{
    console.log(data)
    return await commonrequest("POST",`${BACKEND_URL}/otp_verification`, data)
}

export const RegisterMpin = async(data)=>{
    
    console.log(data)
    return await commonrequest("POST",`${BACKEND_URL}/register_mpin`, data)
}

export const userVerify = async(data)=>{
    return await commonrequest("POST",`${BACKEND_URL}/user/login`,data)
}