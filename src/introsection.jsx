import "./introsection.css";
import Main_title from "./title_sescription";
import Image_section from "./image";
export default function Mainintro(){
    let info={
        title:"Unlock Your Dream Job with AI-Powered Resume Review",
        description:"Get personalized feedback and insights to improve your resume and increase your chances of landing your dream job.",
        
    }
    return (
        <>
        <div className="main_intro">
            <Main_title info={info}/>
            <Image_section/>
            
        </div>
        </>
    );
}