
import { } from "react-router-dom";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";


const MyToy = ({toy, handleDelete, handleUpdate}) => {
  console.log(toy)

 const {user} = useContext(AuthContext)
  const {_id, seller, category, price, quantity, name, picture, description} = toy || []
  const [showModal, setShowModal] = React.useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  
  return (
    <>
      <tr>
        <td>
        <button onClick={() => setShowModal(true)}>
       Edit
     </button>
     <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-sky-100 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                 <div className="text-center"> <h3 className="text-3xl font-semibold pl-20">
                    Update My Toys
                  </h3></div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>

                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                
            <form onSubmit={handleSubmit(handleUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div>
            <h1>Seller Name</h1>
           <input
              className="form-control p-2"
              {...register("seller")}
              placeholder="Seller Name"
              defaultValue={seller}/>
              
           </div>

            
           <div>
           <h1>Toy Name</h1>
           <input
              className="form-control p-2"
              {...register("name")}
              placeholder="Toy Name"
              type = 'text'
              defaultValue={name}/>
           </div>

            <div>
            <h1>Quantity</h1>
            <input
              className="form-control p-2"
              {...register("quantity", { required: true })}
              placeholder="Quantity"
              defaultValue={quantity}/>
            </div>

            <div>
            <h1>Image link</h1>
            <input
              className="form-control p-2"
              {...register("picture")}
              placeholder="Image link"
              type="url"
              defaultValue={picture}/>
              
            </div>

            <div>
            <h1>Price</h1>
            <input
              className="form-control p-2"
              {...register("price")}
              placeholder="Price"
              type="number"
              defaultValue={price}/>
            </div>

           
            <div>
            <h1>Description</h1>
            <input
              className=" p-2"
              {...register("description")}
              placeholder="Description"
              type = 'text'
              defaultValue={description}/>
            </div>

            <div>
            <input
              className="form-control p-2 hidden"
              value={user?.email}
              {...register("email")}
              placeholder="Your email"
              type="email"/>
            </div>

            <div>
            <input
            className="text-input hidden"
            {...register("_id")}
            value={_id}/>
            </div>


           </div>
            <div className="text-center mt-6">
            <input className="btn px-12 py-2 btn-outline" value="Update Toy" type="submit" />
            </div>
          </form>
          </div>

           {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
               className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
                onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
        </td>
        <td>
         <div className="flex items-center space-x-3">
        <div className="avatar">
         <div className="mask mask-squircle w-12 h-12">
          <img src={picture} alt="Avatar Tailwind CSS Component" />
        </div>
       </div>
      </div>
      </td>
        <td>{seller}</td> 
        <td>{category}</td>
        <td>{name}</td>  
        <td>$ {price}</td> 
        <td>{quantity}</td> 
        <td><button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button></td>
      </tr>
    </>
  );
};

export default MyToy;

