
import { ToastContainer, toast,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate,} from 'react-router-dom';
import { useContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {

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
          form.reset()
          navigate(from, {replace : true});
        })
        .catch(error =>{
          console.log(error.code);

        if(error.message.includes("wrong-password")){
          toast.error('Wrong Password !')
        }
        else if(error.message.includes("user-not-found")){
          toast.error('Wrong Email !')
        }
        // else if(error.message.includes("email-already-in-use")){
        //   setError && toast.error('Email already used !')
        //   alert('email-already')
        // }
        });
        
    }

    return (
    <>
    <div className="min-h-screen">
    <div className="hero-content">
    <div className="text-center ">
    </div>
    <div className='grid lg:grid-cols-2 container bg-red-200'> 
      <div data-aos="flip-left"> <img src="https://i.ibb.co/j8TkHJb/app.png" alt="" /> </div>
      <div className="card flex-shrink-0 w-full max-w-sm bg-sky-200">
        
      <form onSubmit={handleLogin} className="card-body" data-aos="flip-rigt">
            <div className='text-center'> <h1 className='text-4xl font-semibold py-2'>Login !</h1></div>

        <div className="form-control mb-6">
         
          <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
        </div> 
        <div className="form-control"> 
         
          <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
       <p className='text-red-600'></p>
        <div className="form-control mt-6">
          <button className="btn ">Login</button>
        </div>
      <div className='flex'> <p>Dont have an account?</p> 

      <Link to='/register'> <p className='text-blue-600 text-xl'>Register</p> 
      </Link></div>

      <div className='text-center'><button onClick={handleGoogleSignIn} className='btn btn-outline'>SignIn with Google</button></div>
      </form>
    </div>
    </div>
  </div>
  <ToastContainer/>
 </div>
 </>
    );
};

export default Login;