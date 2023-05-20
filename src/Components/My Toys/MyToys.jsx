import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToy from "./MyToy";
import useTitle from "../hooks/useTitle";




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
      const checked = confirm('Are you sure you want to delete')
      if(checked){
        fetch(`http://localhost:5000/myToys/${id}`, {
          method : 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)

          if(data.deletedCount > 0){
            alert('deleted successfull')

            const remaining = toys.filter(toy => toy._id !==id)
            setToys(remaining)
          }
        })
      }
    }


    return (
        
   <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th>No</th> 
        <th>Image</th> 
        <th>Seller Name</th> 
        <th>Category</th> 
        <th>Toy Name</th> 
        <th>Price</th> 
        <th>Quantity</th> 
        <th></th>
        <th></th>
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


    