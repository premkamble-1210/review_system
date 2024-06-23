import  { useState,useEffect} from "react";
import "./Main_review_system.css";
import UPload from "./upload";
import Show_data from "./showdata";

export default function File_upload_section(){
    let [dat,setdat]=useState(0);
    const [obj,setobj]=useState({});
    const handlerecord=()=>{
        setdat(dat+1);
        
      }
  
  const handleonjinfile = async(evt) => {
    // Assuming evt has properties you want to set to obj
    console.log("........",evt);
    
    setobj(prevObj => ({
      ...prevObj,
      ...evt
      
     
    }));

    await handlerecord();
    
    
    
};
// console.log(obj);
useEffect(() => {
    console.log("Updated obj:", obj);
}, [obj]);

// const handleonjinfile = (evt) => {
//     // Assuming evt has properties you want to set to obj
//     handlerecord();
//     setObj(prevObj => ({
//         ...prevObj,
//         ...evt
//     }));
// };

// useEffect(() => {
//     console.log(obj);
// }, [obj]);
    
    
return (
    <>
    <div className="File_upload_section">
        <UPload handleonjinfile={handleonjinfile}/> 

        
        {/* <div className="display_section"><p>::{reviewdata.Experience}</p></div> */}
        {dat>2 ? <Show_data info={obj} />: ""};
     
    </div>
    </>
);
}