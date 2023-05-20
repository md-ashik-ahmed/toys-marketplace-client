import { useEffect, useState } from "react";
import AllToy from "./AllToy";
import useTitle from "../hooks/useTitle";


const AllToys = () => {

  const [allToys, setAllToys] = useState()
  const [search, setSerch] = useState("")

  useTitle("AllToys")
  
useEffect(() =>{
  fetch("https://toy-marketplace-server-md-ashik-ahmed.vercel.app/alltoys")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    setAllToys(data)
  })
},[])


const handleSearch = () => {
  fetch(`https://toy-marketplace-server-md-ashik-ahmed.vercel.app/toySearch/${search}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setAllToys(data);
    });
};


    return (
<div className="items-center">
<div className="mx-auto bg-red-300" >
<div className="form-control items-center container">
  <div className="flex">
    <input onChange={(e) => setSerch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
</div>






{/* 
<div className="hero min-h-screen" style={{ backgroundImage: `` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> */}




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
        <th>button</th>
      </tr>
    </thead> 
    <tbody>
      {allToys?.map((toys, index)=>
      <AllToy key={index} toys={toys}></AllToy>
      )}
     
    </tbody> 
   
  </table>
</div>


        </div>
    );
};

export default AllToys;