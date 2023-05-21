import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToy from "./MyToy";
import useTitle from "../hooks/useTitle";
import Swal from 'sweetalert2';



const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([])
  
    useTitle("MyToys")

    useEffect(() =>{
     fetch(`https://toy-marketplace-server-md-ashik-ahmed.vercel.app/myToys/${user?.email}`)
     .then((res) => res.json())
     .then((data) =>{
        console.log(data)
        setToys(data)

     })
    },[user])


    

    const handleDelete = id =>{
      console.log(confirm)
       confirm &&
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if(result.isConfirmed){
          fetch(`https://toy-marketplace-server-md-ashik-ahmed.vercel.app/myToys/${id}`, {
            method : 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
  
            if(data.deletedCount > 0){
             alert && Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success')
                  
              const remaining = toys.filter(toy => toy._id !==id)
              setToys(remaining)
            }
          })
        }
      })
       
    }


    return (
        
   <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>Edit</th> 
        <th>Image</th> 
        <th>Seller Name</th> 
        <th>Category</th> 
        <th>Toy Name</th> 
        <th>Price</th> 
        <th>Quantity</th> 
        <th>Delete</th>
      </tr>
    </thead> 
    <tbody>
      {toys?.map((toy, index)=>
      <MyToy 
      key={index} 
      toy={toy}
      handleDelete={handleDelete}
      ></MyToy>
      
      )}
     
    </tbody> 
   
  </table>

</div>
  

)
  
};

export default MyToys;


    