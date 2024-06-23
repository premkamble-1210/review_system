import "./main_nav.css";
import Nav_logo from "./nav_logo";
import Nav_manu from "./nav_manu";
import LogIn from "./nav_button";
export default function Mainnav(){
    return (
<div className="main_nav">
    <Nav_logo/>
    <Nav_manu/>
    <LogIn/>

</div>
    );
}