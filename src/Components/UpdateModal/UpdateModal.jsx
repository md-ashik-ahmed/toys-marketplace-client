
const UpdateModal = ({toy, handleupdate}) => {
  
  const {title} = toy
  return (
    <>
      <form onSubmit={handleupdate}>
        <>
        <h1>{title}</h1>
        </>
      </form>
    </>
  );
};
 
export default UpdateModal