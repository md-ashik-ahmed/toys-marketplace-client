

const AllToy = ({toys}) => {


    const {seller, index, category, price, quantity, name, picture} = toys

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
        <td>{seller}</td> 
        <td>{category}</td>
        <td>{name}</td>  
        <td>$ {price}</td> 
        <td>{quantity}</td> 
        <td>Red</td>
      </tr>
    
    </>
    );
};

export default AllToy;