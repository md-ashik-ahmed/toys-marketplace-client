
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Category = () => {

   
    const [activeTab, setActiveTab] = useState()
    // const [toys, setToys] = useState()
    const [tabIndex, setTabIndex] = useState(0);
    // const [data, setData] = useState()

    useEffect(() =>{
        fetch("http://localhost:5000/allToys")
        .then((res) => res.json())
        .then((result) =>{
            console.log(result)
            // setToys(result)
        })
    },[])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
      };

      
        
    
    return (
<>
           
           <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        
        <TabList>
   
           <Tab><p className={`${activeTab == 'fire' }`} 
           onClick={() => handleTabClick("fire")}></p> Mini Fire Truck</Tab>
           
           <Tab><p className={`${activeTab == 'sports' }`} 
           onClick={() => handleTabClick("sports")}></p> Sports Car</Tab>
           
           <Tab><p className={`${activeTab == 'police' }`} 
           onClick={() => handleTabClick("police")}></p> Mini Police Car</Tab>
        
         </TabList>
        

         <TabPanel>gagsdgsdagsdgsa</TabPanel>
         <TabPanel>gagsdgsdagsdgsa</TabPanel>
       </Tabs>
               
           </>
         
    
    );
};

export default Category;