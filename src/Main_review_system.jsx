import "./Main_review_system.css";
import Review_title from "./Review_title";
import File_upload_section from "./file_upload_section";
export default function Main_system(){
    return (
        <>
        <div className="Main_system" id="Main_system">
            <Review_title/>
            <File_upload_section/>

        </div>
        </>
    );
    
}