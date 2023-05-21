import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
 
    const data = useLoaderData()

    const {picture,description, title, price, name, rating} = data

    return (
        <div className="container">
            <div className="card card-side bg-base-100 shadow-xl p-12">
     <div className="w-1/3"><figure><img className="w-96" src={picture} alt="Movie"/></figure></div>
     <div className="card-body w-1/2">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p>Price : {price}</p>
    <p>Name : {name}</p>
    <p>Rating : {rating}</p>
    
  </div>
</div>
        </div>
    );
};

export default ViewDetails;