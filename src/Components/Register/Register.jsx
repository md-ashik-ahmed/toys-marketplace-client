import {  useContext, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../hooks/useTitle';


const Register = () => {

    const {createUser} = useContext(AuthContext)

    useTitle("Register")
    
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
 
  const navigate = useNavigate();
  
  const handleRegister = event =>{
    event.preventDefault();
    setError('');
    

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // const image = form.image.value;
    const password = form.password.value;
   
    console.log(name, email, password, );

    
    if(password.length < 6 ){
      setError && toast.error('Password must be 6 character')
      return
    }
    else if(!/(?=(.*[A-Z]){2,})/.test(password)){
      setError && toast.error("At least Two Uper Case!")
      return
    } 

    
    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      navigate('/')
      form.reset();
    })
    .catch(error =>{
      console.log(error.code);
    })
    
  }

const handleAccepted = event =>{
  setAccepted(event.target.checked)
}

    return (
        <div>
             <div className="min-h-screen bg-base-200">
   <div className="hero-content flex-col ">
    <div className="text-center ">
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="Photo" name='image' placeholder="Photo URl" className="input input-bordered" required />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
        </div>
        
        <div className="form-control">
      <label className="label cursor-pointer">
      <input onClick={handleAccepted} type="checkbox"  className="checkbox" />
       <span className="label-text">I accept <span className='text-blue-700'>Terms and Conditions</span> </span> 
      
     </label>
       </div>
        <div className="form-control mt-6">
          <button disabled={!accepted} className="btn btn-primary btn-outline">Create New account</button>
        </div>
        <div className='text-center gap-4'>
        <small>Already have an account?<Link to='/login'> <span className='text-blue-600'>Login</span> </Link></small>
        </div>
        <p className='text-red-600'>{error}</p>
      </form>
    </div>
  </div>
 </div>
  <ToastContainer/>
        </div>
    );
};

export default Register;