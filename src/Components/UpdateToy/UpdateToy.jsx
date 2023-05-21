// import { useContext} from "react";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../Provider/AuthProvider";


// import React from 'react';

// const UpdateToy = () => {


//   const [showModal, setShowModal] = React.useState(false);


//   return (
//     <div>
//       <>
      
//       {showModal ? (
//         <>
//           <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//           >
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">
//                     Modal Title
//                   </h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="my-4 text-slate-500 text-lg leading-relaxed">
//                     I always felt like I could do anything. That’s the main
//                     thing people are controlled by! Thoughts- their perception
//                     of themselves! Thee slowed down by their perception of
//                     themselves. If ye taught you can’t do anything, you
//                     won’t do anything. I was taught I could do everything.
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//     </div>
//   );
// };

// export default UpdateToy;
  
    
  // console.log(toy)
  // const {user} = useContext(AuthContext)
  
  // const { register, handleSubmit, formState: { errors } } = useForm();

  // const handleUpdate = (data) => {
  //   console.log(data);
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
  

  
    // <div>
    //   <form onSubmit={handleSubmit(handleUpdate)}>
    //         {errors.exampleRequired && <span>This field is required</span>}
    //        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container">
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
           </div> */

          //  <div>
          //  <input
          //   className="text-input"
          //   {...register("_id")}
          //   value={toy?._id}
          // />
        

            // <div>
            // <input
            //   className="form-control p-2"
            //   {...register("quantity", { required: true })}
            //   placeholder="Quantity"
              
            // />
            // </div>

           /* <div>
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
           

