/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from 'react';

const Category = () => {

    const [activeTab, setActiveTab] = useState("fire")
    const [toys, setToys] = useState([])
    
    useEffect(() =>{
        fetch(`http://localhost:5000/allToys/${activeTab}`)
        .then((res) => res.json())
        .then((result) =>{
            console.log(result)
            setToys(result)
        })
    },[activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

    return (
    <> 
     <div className="">
        <div className=" bg-blue-100">
          <div className="flex text-center gap-4">
            <div
              onClick={() => handleTabClick("fire")}
              className={` ${
                activeTab == "fire" ? " bg-red-500 text-black" : "" }`}>
              <h1>Mini Fire Truck</h1>
            </div>
            <div
              onClick={() => handleTabClick("sports")}
              className={` border p-2 text-right ${
                activeTab == "sports" ? " bg-red-500 text-black" : ""}`}>
              <h1>Sports Car</h1>
            </div>
            <div
              onClick={() => handleTabClick("police")}
              className={` ${
                activeTab == "police" ? " bg-red-500 text-black" : ""}`}>
              <h1>police Car</h1>
            </div>
          </div>
          <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 '>
        {toys?.map((toy) =>(
           <><div >
            <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
       <img src={toy.picture} alt="Shoes" className="rounded-xl h-56" />
       </figure>
       <div className="card-body items-center text-center">
       <h2 className="card-title">{toy.title}</h2>
      <div className='flex'>
        <p className='mr-36'>{toy.price}</p>
        <p>{toy.rating}</p>
        </div>
      <div className="card-actions">
      <button className="btn btn-primary px-12">Buy Now</button>
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