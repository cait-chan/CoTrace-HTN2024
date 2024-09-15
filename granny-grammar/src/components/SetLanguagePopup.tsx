import * as React from "react";
import { useState } from "react";


export function SetLanguagePopup() {
    const [isVisible, setIsVisible] = useState(true); // Popup is initially visible

    const handleClosePopup = () => {
      setIsVisible(false); // Set the visibility to false to close the popup
    };
  
    if (!isVisible) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative">
        <img
          src="/public/setlanguagepopup.png"
          alt="Set Language Popup"
          className="w-auto h-auto max-w-full max-h-full"
        />
      </div>
      <button onClick={handleClosePopup} className="absolute top-[340px] left-[400px] text-black text-[25px] font-semibold font-inter leading-normal">Inuktitut</button>
      <button className="absolute top-[395px] left-[400px] text-black font-sans text-[25px] font-normal leading-normal">Ojibwe</button>
      <button className="absolute top-[450px] left-[400px] text-black font-sans text-[25px] font-normal leading-normal" >Javanese</button>
      <button className="absolute top-[340px] left-[610px] text-black font-sans text-[25px] font-normal leading-normal" >Mongolian</button>
    </div>
  );
}