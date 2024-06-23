import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Gemini = () => {
  const [responseText, setResponseText] = useState('');
  const [imageData, setImageData] = useState(null);
  let [promttype,setpromttpe]=useState("");
  let handlechange=(event)=>{
    setpromttpe(event.target.value);

};

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result.split(',')[1]); // Get base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const funcall = async () => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyCyQ6dmJIK_IGYoCWxd9-yo4_WAoGQUNvA");
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });
      
      const prompt =promttype;
      const image = {
        inlineData: {
          data: imageData,
          mimeType: 'image/png',
        },
      };
      
      const result = await model.generateContent([prompt, image]);
      setResponseText(result.response.text());
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <input type="text" onChange={handlechange} value={promttype}/>
      <button onClick={funcall} disabled={!imageData}>Click</button>
      <p>{responseText}</p>
    </>
  );
};

export default Gemini;

