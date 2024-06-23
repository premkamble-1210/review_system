import "./introsection.css";
import Button from '@mui/material/Button';
export default function Main_title({info}){
    const scrollToSection = () => {
        const section = document.getElementById("Main_system");
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
        <div className="main_title">
            <div className="empty_section">

            </div>
            <div className="title"><p>{info.title}</p>
            </div>
            <div className="description"><p>{info.description}</p></div>
            <div className="try_now">
                <div className="trybtn"><Button variant="contained" size="large" onClick={scrollToSection}>Try It Now</Button></div>
            
            </div>

            
        </div>
        </>
    );
}