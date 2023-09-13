const getAge = (givendob) => {

    const dob = new Date(givendob);
    const month_diff = Date.now() - dob.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();

    const age = Math.abs(year - 1970);

    return age;
}

const ValidateData = (FormData) => {

    let errors = {
        fname: '',
        mname: '',
        lname: '',
        phone: '',
        email: '',
        dob: '',
        username: '',
        password: '',
        cpassword: ''
    };

    if (!FormData.fname) {
        errors.fname = 'First name is required'
    }
    if (!FormData.lname) {
        errors.lname = 'last name is required'
    }
    if (!FormData.mname) {
        errors.mname = 'Middle name is required'
    }
    
    if (!FormData.phone) {
        errors.phone = 'Phone no. is required'
    }
    else if(FormData.phone.length !== 10){
        errors.phone = 'Invalid phone number'
    }

    if (!FormData.email) {
        errors.email = 'Email is required'
    }
    else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
        errors.email = "Email is invalid.";
    }

    if (!FormData.dob) {
        errors.dob = 'Please select Date of Birth'
    }
    else if(getAge(FormData.dob) < 18) {
        errors.dob = 'Age is wrong'
    }

    if (!FormData.username) {
        errors.username = 'Username is required'
    }

    if (!FormData.password) {
        errors.password = 'Password is required'
    }
    else if (FormData.password.length < 8) {
        errors.password = 'Password must be greater then 8 charactors'
    }

    if (!FormData.cpassword) {
        errors.cpassword = 'Confirm password is required'
    }
    else if (!FormData.password !== !FormData.cpassword) {
        errors.cpassword = 'Password does not match'
    }

    return errors;
}

export default ValidateData