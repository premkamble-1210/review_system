import React, { useState ,useEffect} from "react";
import "./up.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { GoogleGenerativeAI } from '@google/generative-ai';
import "./Main_review_system.css";

export default function UPload({handleonjinfile}) {
  const [responseText, setResponseText] = useState('');
  const [imageData, setImageData] = useState(null);
  const [selectedName, setSelectedName] = useState('');
  const [promttype, setPromttype] = useState('');
  // let [dat,setdat]=useState(0);
  const [obj,setobj]=useState({});
  let filetype='image/png';
  
  useEffect(() => {
    console.log("Updated obj11111:", obj);
    handleonjinfile(obj); // Log updated obj state
}, [obj]);
  const handleonj = async(evt) => {
    // Assuming evt has properties you want to set to obj
    setobj(prevObj => ({
      ...prevObj,
      ...evt
      // Add properties from evt you want to merge
      // Example: newProperty: evt.newProperty
    }));
    
    console.log(obj);
    await handleonjinfile(obj);
    
  };
  
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result.split(',')[1]); // Get base64 string
        setSelectedName(file.name); // Set the name of the selected file
        console.log("File type:", file.type);
        filetype=file.type;
      };
      reader.readAsDataURL(file);
    }
  };
  // 
  function parseResumeAnalysis(apiResponse) {
    // Split the response into lines
    const lines = apiResponse.split('\n').map(line => line.trim()).filter(line => line);
  
    // Initialize an empty object to hold the parsed data
    const resumeAnalysis = {
      "Analysis": {},
      "Data in key-value pairs": {}
    };
  
    let currentSection = '';
    lines.forEach(line => {
      if (line.startsWith('**')) {
        // Extract the key and value
        const [key, ...valueParts] = line.split('**').filter(part => part.trim() !== '');
        const keyCleaned = key.replace('**', '').trim().split(' ').slice(1).join(' ');
        const value = valueParts.join('').trim();
  
        if (keyCleaned === 'Recommendations') {
          resumeAnalysis["Analysis"][keyCleaned] = [];
          currentSection = 'Recommendations';
        } else {
          resumeAnalysis["Analysis"][keyCleaned] = value;
          currentSection = '';
        }
      } else if (line.startsWith('-')) {
        // Parse key-value pairs
        const [key, value] = line.replace('-', '').split(':').map(item => item.trim());
        resumeAnalysis["Data in key-value pairs"][key] = parseInt(value);
      } else if (currentSection === 'Recommendations') {
        resumeAnalysis["Analysis"][currentSection].push(line.replace('-', '').trim());
      }
    });
  
    return resumeAnalysis;
  }
  // 

  const handleChange = (event) => {
    setPromttype(event.target.value);
  };

  const funcall = async () => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyCyQ6dmJIK_IGYoCWxd9-yo4_WAoGQUNvA"); // Replace with your API key
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
      const promtgen=`Job Title: ${promttype} Output:Provide a brief analysis of the resume based on the job title. Limit each section to 50 words.1. Relevance: Evaluate how well the resume aligns with the requirements and expectations of the specified job title. 2. Skills: Assess the candidate's skills and competencies relevant to the job role. 3. Experience: Review the candidate's work experience in relation to the job requirements, noting strengths and areas for improvement. 4. AchievementsHighlight significant accomplishments that demonstrate the candidate's capabilities and achievements. 5. Formatting: Evaluate the organization and clarity of the resume layout and content presentation. 6. Recommendations: Provide actionable suggestions to enhance the resume's effectiveness and alignment with the specified job title.Rating: Provide an overall rating for the resume out of 100 points, considering its alignment with the job title, skillset relevance, experience match, achievements, and presentation quality give data in key value pair according with given points`;
      const prompt = promtgen;
      const image = {
        inlineData: {
          data: imageData,
          mimeType: filetype,
        },
      };
      // filetype
      const result = await model.generateContent([prompt, image]);
      const result1 = parseResumeAnalysis(result.response.text());
console.log(result1.Analysis);
handleonj(result1.Analysis);




      // setResponseText(result1);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  return (
    <div className="app">
      <div className="parent">
        <div className="file-upload">
          <i className="fa-solid fa-cloud-arrow-up"></i>
          <h3>{selectedName || "Click box to upload"}</h3>
          <p>File must be PNG/JPG</p>
          <input type="file" accept=".png, .jpg, .jpeg" onChange={handleFileChange} />
        </div>

        
        
        <div className="job_title_submit">
          <div className="job_title">
            <input list="title" placeholder="Job title" onChange={handleChange} value={promttype} />
            <datalist id="title">
              <option value="Software Engineer"></option>
              <option value="Mechanical Engineer"></option>
              <option value="Civil Engineer"></option>
              <option value="AI/Machine Learning Engineer"></option>
              <option value="Project Manager"></option>
            </datalist>
          </div>
          
          <div className="submit_button">
            {imageData ? <Button variant="contained" endIcon={<SendIcon />} onClick={funcall} disabled={!imageData}>
              Send
            </Button>: <Button variant="contained" endIcon={<SendIcon />} onClick={funcall} disabled={!imageData}>
            <CircularProgress />
            </Button>}
          </div>
        </div>
        
      </div>

      
    </div>
  );
}
