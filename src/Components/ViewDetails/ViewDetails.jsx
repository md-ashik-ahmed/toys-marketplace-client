import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {
 
    const data = useLoaderData()

    const {picture, title, price, name, rating} = data

    return (
        <div className="container">
            <div className="card card-side bg-base-100 shadow-xl">
     <figure><img src={picture} alt="Movie"/></figure>
     <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <p>{name}</p>
    <p>{rating}</p>
    
  </div>
</div>
        </div>
    );
};

export default ViewDetails;