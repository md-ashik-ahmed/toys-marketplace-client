
import {  useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Provider/AuthProvider';
import useTitle from '../hooks/useTitle';


const Register = () => {

    const {createUser , updateUserProfile} = useContext(AuthContext)

    useTitle("Register")
    
  // const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  const handleRegister = event =>{
    event.preventDefault();
    
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
   
    console.log(name, photoURL, email, password, );

    
    if(password.length < 6 ){
      toast.error('Password must be 6 character')
      return
    }
    else if(!/(?=(.*[A-Z]){2,})/.test(password)){
      toast.error("At least Two Uper Case!")
      return
    } 

    
    createUser(email, photoURL, password)
    
    .then(result =>{
      const loggedUser = result.user;
      
      console.log(loggedUser)
      toast.success("User Created Successfully!")
      navigate('/')
      form.reset();
      handleUpdateUserProfile(name, photoURL)
    })
    .catch(error =>{
      console.log(error.code);
    })
    
  }


  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
        displayName: name,
        photoURL: photoURL
    }

    updateUserProfile(profile)
        .then(() => { })
        .catch(error => console.error(error));
}

    return (
        <div>
             <div className="min-h-screen">
   <div className="hero-content flex-col ">
    <div className="text-center ">
    </div>
   <div className='grid lg:grid-cols-2 container bg-orange-200'> 
   
    <div data-aos="zoom-in-down"> <img src="https://i.ibb.co/j8TkHJb/app.png" alt="" /> </div>
  
   <div className="card flex-shrink-0 w-full max-w-sm bg-sky-200" data-aos="zoom-in-up">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="url" name='photoURL' placeholder="Photo URl" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required/>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary btn-outline">Register</button>
        </div>
        <div className='text-center gap-4'>
        <small>Already have an account?<Link to='/login'> <span className='text-blue-600'>Login</span> </Link></small>
        </div>
      </form>
    </div>
   </div>
  </div>
 </div>
  <ToastContainer/>
        </div>
    );
};

export default Register;