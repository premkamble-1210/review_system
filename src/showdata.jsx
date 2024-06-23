import React from 'react';
import "./Main_review_system.css";
import "./up.css";
const Show_data = ({info}) => {
  
  let points=info[""];
  let percent= parseInt(points, 10);// The second argument (10) specifies the base (decimal)

// Now pointsInt is an integer  ;
// console.log(pointsInt); 
const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

 
  return (
    <div style={{color:"rgb(0, 128, 255)"}} className='show_data'>
    
      <p><h3>Experience:</h3><span id='demo'> {info["Experience:"]}</span></p>
      <br />
      <p><h3>Achievements:</h3> {info["Achievements:"]}</p>
      <br />
      <p><h3>Formatting:</h3> {info["Formatting:"]}</p>
      <br />
      <p><h3>Recommendations:</h3> {info["Recommendations:"]}</p>
      <br />
      <p><h3>Relevance:</h3> {info["Relevance:"]}</p>
      <br />
      <p><h3>Skills:</h3> {info["Skills:"]}</p>
      <br />
      <p style={{color:"#fff"}}><h3>Points: {info[""]}</h3></p>
      {/*  */}
      {percent>0?<div className="progress-circle">
            <svg width="100" height="100">
                <circle
                    className="background"
                    cx="50"
                    cy="50"
                    r={radius}
                ></circle>
                <circle
                    className="progress"
                    cx="50"
                    cy="50"
                    r={radius}
                    style={{
                        strokeDasharray: `${circumference} ${circumference}`,
                        strokeDashoffset: offset,
                    }}
                ></circle>
            </svg>
            {percent>50?<div className="text" >{`${percent}%`}</div>:<div className="text" style={{color:"red"}} >{`${percent}%`}</div>}
        </div>:""}
      
    </div>
  );
};

export default Show_data;
