import React, { useEffect, useRef, useState } from "react";
import axios from "axios"

const App = () => {
  const [isCopy, setIsCopy] = useState(false);
  const [url,setUrl] = useState("")
  const [id,setId] = useState("")

  const clipRef = useRef();
  const handleCopyClipBoard = async()=>{
    await navigator.clipboard.writeText(clipRef.current.innerText);
    setIsCopy(true);
  };

  const generateShortUrl = async()=>{
    const response = await axios.post("http://localhost:8000/api/urls",{
      url
    })
    setId(response.data.url.id)
  }
  return (
    <section className="h-screen w-full bg-slate-50 flex justify-center items-center">
      <div className="w-[400px] bg-gradient-to-r from-purple-600/80 to-purple-700/90 rounded-sm shadow-sm px-2 py-4">
      <h2 className="text-2xl font-medium text-[#f3f3f3] text-center uppercase">URL Shortener</h2>
         <div className="w-full overflow-hidden bg-white mt-4 rounded-sm shadow-sm h-10 flex justify-between items-center pr-2">
          <input type="text" 
          className="w-full h-full px-2 outline-none border-none"
           placeholder="Paste your url"
           onChange={(e)=>setUrl(e.target.value)}
          />
            <button
            className="h-8 bg-gradient-to-r from-purple-600/80 to-purple-700/90 px-2 text-sm text-[#f3f3f3] font-medium rounded-sm shadow-sm"
           onClick={generateShortUrl}
          >
          Generate
          </button>
         </div>
         
        <div className="w-full px-2 bg-white mt-4 rounded-sm shadow-sm h-10 flex justify-between items-center">
          <span
            className='text-slate-600 '
            ref={clipRef}
          >
          http://localhost:5173/{id}
          </span>
          {
            isCopy ? <span className="text-md text-purple-600 font-medium">Copied</span> :   <button
            className="h-8 bg-gradient-to-r from-purple-600/80 to-purple-700/90 px-2 text-sm text-[#f3f3f3] font-medium rounded-sm shadow-sm"
            onClick={handleCopyClipBoard}
          >
            Copy
          </button>
          }
        
        </div>
        
      </div>
    </section>
  );
};

export default App;
