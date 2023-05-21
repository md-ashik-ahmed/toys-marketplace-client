import { useContext} from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";


const UpdateToy = ({toy}) => {
  console.log(toy)
  const {user} = useContext(AuthContext)
  // const [control, setControl] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleUpdate = (data) => {
    console.log(data);
    // fetch(`http://localhost:5000/updateToy/${data._id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result.modifiedCount > 0) {
    //       setControl(!control);
    //     }
    //     console.log(result);
    //   });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container">
           {/* <div>
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
           </div> */}

           <div>
           <input
            className="text-input"
            {...register("_id")}
            value={toy?._id}
          />
           </div>

            <div>
            <input
              className="form-control p-2"
              {...register("quantity", { required: true })}
              placeholder="Quantity"
              
            />
            </div>

           {/* <div>
           <input
              className="form-control p-2"
              {...register("rating", { required: true })}
              placeholder="Rating"
              type="number"
              defaultValue={toy?.rating}
            />
           </div>
            <div>
            <select className="form-control p-2" {...register("category")}>
              <option value="Sports Car">Sports Car</option>
              <option value="Mini Fire Truck">Mini Fire Truck</option>
              <option value="Mini Police Truck">Mini Police Truck</option>
            </select>
            </div> */}
           
            {/* <div>
            <input
              className="form-control p-2"
              {...register("picture")}
              placeholder="Image link"
              type="url"
              
            />
            </div> */}
            <div><input
              className="form-control p-2"
              {...register("price")}
              placeholder="Price"
              type="number"
              defaultValue={toy?.price}
            /></div>
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
              defaultValue={toy?.description}
            />
            </div>
           </div>
            <div className="text-center mt-6">
            <input className="btn px-12 py-2 btn-outline" value="Add Toys" type="submit" />
            </div>
          </form>
    </div>
  );
};

export default UpdateToy;