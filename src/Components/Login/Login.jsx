
import { ToastContainer, toast,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate,} from 'react-router-dom';
import { useContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../hooks/useTitle';



const Login = () => {

  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';
  useTitle("login")
  const auth = getAuth(app)
  console.log(app)


  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider )
    .then(result =>{
      const user = result.user;
      console.log(user)
      navigate(from, {replace : true});
    })
    .catch(error =>{
      console.log('error', error.message)
    })
  }


  const {signIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          setError('')
          form.reset()
          
          navigate(from, {replace : true});
        })
        .catch(error =>{
          console.log(error.code);

        if(error.message.includes("wrong-password")){
          setError && toast.error('Wrong Password !')
        }
        else if(error.message.includes("user-not-found")){
          setError && toast.error('Wrong Email !')
        }
        // else if(error.message.includes("email-already-in-use")){
        //   setError && toast.error('Email already used !')
        //   alert('email-already')
        // }
        });
        
    }

    return (
    <>
    <div className="min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
         
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
         
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
      <label className="label cursor-pointer">
       <span className="label-text">Remember me</span> 
      <input type="checkbox" className="checkbox" />
     </label>
       </div>
       <p className='text-red-600'></p>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      <div className='flex'> <p>Dont have an account?</p> 
      <p>{error}</p>
      <Link to='/register'> <p className='text-blue-600'>Please Register</p> 
      </Link></div>
      <div><button onClick={handleGoogleSignIn} className='btn btn-outline'>SignIn with Google</button></div>
      </form>
    </div>
  </div>
  <ToastContainer/>
 </div>
 </>
    );
};

export default Login;