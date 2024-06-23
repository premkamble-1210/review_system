import "./features.css";
export default function Footer_section(){
    return (
        <div className="Footer_section">
            <div className="footer_warning">
                <div className="warning_icon">
                <i class="fa-solid fa-triangle-exclamation"></i>

                </div>
                <div className="warning_title">
                    <p> Our AI aims to provide accurate feedback but may make mistakes. Review suggestions carefully before making changes.</p>
                </div>

            </div>
            <div className="main_footer">
                <div className="writes">
                    <p><a href="https://www.linkedin.com/in/prem-kamble-0b559827b/">© 2024 AI Resume Review. All rights reserved</a></p>

                </div>
                <div className="privacy">
                    <span><a href="#">Privacy Policy</a></span>
                    <span><a href="#">Terms of Service</a></span>
                    <span><a href="https://portfolio-seven-theta-45.vercel.app/#contact">Contact</a></span>
                    

                </div>

            </div>
        
        </div>
    );
}