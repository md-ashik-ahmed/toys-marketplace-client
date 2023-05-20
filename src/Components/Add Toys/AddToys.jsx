import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
import useTitle from "../hooks/useTitle";

const AddToys = () => {

    const {user} = useContext(AuthContext)
    useTitle("AddToys")
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
      fetch("http://localhost:5000/postToys", {
      method : "POST",
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((result) =>{
      console.log(result)
    })
    console.log(data)
    };


    return (
        <div className="hero min-h-1/2 bg-sky-100 py-10 container rounded mb-12">
            <div className="bg-sky-100">
            <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
           <input
              className="form-control p-2"
              {...register("seller")}
              placeholder="Seller Name"
              defaultValue="Ashik Mahmud"
            />
           </div>
           <div>
           <input
              className="form-control p-2"
              {...register("name")}
              placeholder="Toy Name"
              defaultValue=""
            />
           </div>

            <div>
            <input
              className="form-control p-2"
              {...register("quantity", { required: true })}
              placeholder="Quantity"
              defaultValue="30"
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
              placeholder="image link"
              type="url"
              defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            </div>
            <input
              className="form-control p-2"
              {...register("price")}
              placeholder="price"
              type="number"
            />
            <div>
            <input
              className="form-control p-2"
              value={user?.email}
              {...register("email")}
              placeholder="your email"
              type="email"
            />
            </div>
            <div>
            <input
              className=" w-full p-2"
              {...register("description")}
              placeholder="description"
            />
            </div>
           </div>
            <div className="text-center mt-6">
            <input className="btn px-12 py-2 btn-outline" value="Post Job" type="submit" />
            </div>
          </form>
        </div>
        </div>
    );
};

export default AddToys;