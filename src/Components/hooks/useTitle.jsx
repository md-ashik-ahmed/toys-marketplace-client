import { useEffect } from "react";


const useTitle = (title) => {
   
    useEffect(() =>{
        document.title = `Toy Store | ${title}`;
    },[title])
};
export default useTitle;