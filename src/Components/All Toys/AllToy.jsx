import { Link } from "react-router-dom";


const AllToy = ({toys}) => {

    const {_id, seller, index, category, price, quantity, name, picture} = toys

    return (
    <>
      <tr>
        <th>{index + 1}</th> 
        <td>
         <div className="flex items-center space-x-3">
          <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
         <img src={picture} alt="Avatar Tailwind CSS Component" />
         </div>
        </div>
       </div>
       </td>   
       <td>{name}</td> 
       <td>{category}</td>
      <td>{seller}</td> 
      <td>$ {price}</td> 
     <td>{quantity}</td> 
     <Link to={`/details/${_id}`}><td>Details</td></Link>
      </tr>

    </>
    );
};

export default AllToy;