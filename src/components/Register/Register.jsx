import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
// import { FaEye, FaEyeSlash} from 'react-icons/fa';


const Register = () => {
    const [registerError , setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e =>{
        e.preventDefault();
        // console.log('form submited')
        const email = e.target.email.value
        const password = e.target.password.value;
        console.log(email, password);

        setRegisterError('')
        setSuccess('')

        if(password.length < 6){
            setRegisterError('Password should be 6 character');
            return
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your Password should be at least one character Uppercase')
            return
        }
        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
               const  user = res.user;
                console.log(user);
                setSuccess('User Created Successfully')
            })
            .catch(error => {
                console.log(error.message);
                setRegisterError(error.message)
            })
    }
    return (
        <div className="bg-gray-100">
            <div className="mx-auto md:w-1/2">
             <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input required className="mb-4 px-2 bg-slate-200 rounded-md py-2 w-3/4" type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input required className="mb-4 bg-slate-200 rounded-md px-2 py-2 outline-1 w-3/4"  
                        type={showPassword? "text" : "password"}
                        name="password" id=""
                        placeholder="Password" />
                        <span onClick={()=> setShowPassword(!showPassword)}>Show</span>
                    <br />
                    <input className="mb-4 btn btn-secondary w-3/4"  type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-500">{registerError}</p>
                }
                {
                    success && <p className="text-green-500"> {success} </p>
                }
            </div>

        </div>
    );
};

export default Register;