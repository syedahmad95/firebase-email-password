import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";


const Register = () => {
    const handleRegister = e =>{
        e.preventDefault();
        // console.log('form submited')
        const email = e.target.email.value
        const password = e.target.password.value;
        console.log(email, password);
        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
               const  user = res.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="bg-gray-100">
            <div className="mx-auto md:w-1/2">
             <h2 className="text-3xl mb-8">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 px-2 bg-slate-200 rounded-md py-2 w-3/4" type="email" name="email" id="" placeholder="Email" />
                    <br />
                    <input className="mb-4 bg-slate-200 rounded-md px-2 py-2 outline-1 w-3/4"  type="password" name="password" id=""  placeholder="Password" />
                    <br />
                    <input className="mb-4 btn btn-secondary w-3/4"  type="submit" value="Register" />
                </form>
            </div>

        </div>
    );
};

export default Register;