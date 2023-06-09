import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../hooks/useTitle";
import { ToastContainer, toast,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddToys = () => {

    const {user} = useContext(AuthContext)

    useTitle("AddToys")
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, event) => {
      fetch("https://toy-marketplace-server-md-ashik-ahmed.vercel.app/postToys", {
      method : "POST",
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((result) =>{
      console.log(result)
      toast.success('Toy Added Successfully !')
      event.target.reset()

    })
    console.log(data)
    };


    return (
        <div className="hero min-h-1/2 bg-sky-100 py-10 container rounded mb-12" data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <div className="bg-sky-100">
            <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
           <input
              className="form-control p-2"
              {...register("seller")}
              placeholder="Seller Name"
            
            />
           </div>
           <div>
           <input
              className="form-control p-2"
              {...register("name")}
              placeholder="Toy Name"
              type = 'text'
            />
           </div>

            <div>
            <input
              className="form-control p-2"
              {...register("quantity", { required: true })}
              placeholder="Quantity"
              
            />
            </div>

           <div>
           <input
              className="form-control p-2"
              {...register("rating", { required: true })}
              placeholder="Rating"
              type="number"
            />
           </div>
            <div>
            <select className="form-control p-2" {...register("category")}>
              <option value="Sports Car">Sports Car</option>
              <option value="Mini Fire Truck">Mini Fire Truck</option>
              <option value="Mini Police Truck">Mini Police Truck</option>
            </select>
            </div>
           
            <div>
            <input
              className="form-control p-2"
              {...register("picture")}
              placeholder="Image link"
              type="url"
              
            />
            </div>
            <input
              className="form-control p-2"
              {...register("price")}
              placeholder="Price"
              type="number"
            />
            <div>
            <input
              className="form-control p-2"
              value={user?.email}
              {...register("email")}
              placeholder="Your email"
              type="email"
            />
            </div>
            <div>
            <input
              className=" p-2"
              {...register("description")}
              placeholder="Description"
              type = 'text'
            />
            </div>
           </div>
            <div className="text-center mt-6">
            <input className="btn px-12 py-2 btn-outline" value="Add Toys" type="submit" />
            </div>
          </form>
        </div>
        <ToastContainer/>
        </div>
    );
};

export default AddToys;