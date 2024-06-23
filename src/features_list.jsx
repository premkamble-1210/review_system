import "./features.css";
import Sub_featues from "./sub_features";
export default function Features_list(){
    return (
        <div className="Features_list">
            <Sub_featues title={"Faster Turnaround"} description={"Receive your resume review quickly, avoiding the long wait times of traditional services."}/>
            <Sub_featues title={"Personalized Feedback"} description={"Our AI analyzes your resume and offers tailored suggestions to boost your chances of getting noticed."}/>
            <Sub_featues title={"Improved Success Rates"} description={"Experience up to a 30% increase in job application success rates with our AI resume review service."}/>
            
        
        </div>
    );
}