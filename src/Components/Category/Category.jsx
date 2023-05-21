/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Category = () => {

    const [active, setActive] = useState("fire")
    const [toys, setToys] = useState([])
    
    useEffect(() =>{
        fetch(`https://toy-marketplace-server-md-ashik-ahmed.vercel.app/allToys/${active}`)
        .then((res) => res.json())
        .then((result) =>{
            console.log(result)
            setToys(result)
        })
    },[active])

    const handleTabClick = (tabName) => {
        setActive(tabName);
      };

    return (
    <> 
     <div className="">
        <div className="mx-auto">
         <div className='text-center py-8'> <h1 className='text-3xl'>Shop by category</h1></div>
         <div className='text-center'>
          <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8  flex lg:ml-96">
          <p
              onClick={() => handleTabClick("sports")}
              className={` border py-2 px-6 ${
                active == "sports" ? " bg-sky-100 text-black" : ""}`}>
              <h1 className='font-semibold'>Sports Car</h1>
            </p>
            
            <p
              onClick={() => handleTabClick("fire")}
              className={` border py-2 px-6${
                active == "fire" ? " bg-sky-100 text-black" : "" }`}>
              <h1 className='font-semibold'>Mini Fire Truck</h1>
            </p>
            
            <p
              onClick={() => handleTabClick("police")}
              className={`border px-6 py-2 ${
                active == "police" ? " bg-sky-100 text-black" : ""}`}>
              <h1 className='font-semibold'>Police Car</h1>
            </p>
          </div>
         </div>
          <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 '>
        {toys?.map((toy) =>(
           <><div >
            <div>
            <div className="card w-96 h-full bg-amber-100 shadow" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
        <figure className="px-10 pt-10">
       <img src={toy.picture} alt="image" className="rounded h-56" />
       </figure>
       <div className="card-body items-center text-center">
       <h2 className="card-title">{toy.title}</h2>
      <div className='flex'>
        <p className='mr-36'>Price : {toy.price}</p>
        <p>Rating : {toy.rating}</p>
        </div>
      <div className="card-actions">
     <Link to={`/details/${toy._id}`}><button className="btn btn-worning px-12">View Details</button></Link>
      </div>
      </div>
     </div>
    </div>
       </div></>
        ))}       
           
    </div>
        </div>
      </div>
</>
    );
};

export default Category;