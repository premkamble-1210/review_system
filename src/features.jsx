import Features_title from "./featurs_title";
import Features_list from "./features_list";
import Features_image from "./features_image";
import "./features.css";
export default function Features(){
    return (
        <div className="featues_section" id="featues_section">
        <Features_title/>
        <div className="featues_sub_section">
            <Features_list/>
            <Features_image/>

        </div>

        
        </div>
    );
}