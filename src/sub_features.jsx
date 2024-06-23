import "./features.css";
export default function Sub_featues({title,description}){
    return (
        <div className="Sub_featues">
            <div className="Sub_featue_title">
                <p>{title}</p>

            </div>
            <div className="Sub_featue_description">
                <p>{description}</p>

            </div>
        
        </div>
    );
}