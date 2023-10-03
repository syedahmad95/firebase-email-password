import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash} from 'react-icons/fa';


const Register = () => {
    const [registerError , setRegisterError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e =>{
        e.preventDefault();
        // console.log('form submited')
        const email = e.target.email.value
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

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
        else if(!accepted){
            setRegisterError('Please Accept Our Terms and Condition')
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
                    <input required className="mb-4 px-2 bg-slate-200 rounded-md py-2 w-full" type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <div className="mb-4 relative">
                        <input required className=" bg-slate-200 rounded-md px-2 py-2 outline-1 w-full"  
                        type={showPassword? "text" : "password"}
                        name="password" id=""
                        placeholder="Password" />
                        <span className="absolute top-3 right-5 text-xl" onClick={()=> setShowPassword(!showPassword)}>

                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }    
                        
                        </span>
                    </div>
                    <div className="mb-2">

                        <input className="mr-2" type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept Our Terms and conditions</label>
                    </div>
                    
                    <input className="mb-4 btn btn-secondary w-full"  type="submit" value="Register" />
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