
const MyToy = ({toy, handleDelete}) => {
 
  const {_id, seller, category, price, quantity, name, picture} = toy

  return (
    <>
      <tr>
        <th>Edit</th> 
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

