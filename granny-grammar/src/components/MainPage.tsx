import React, { useState } from "react";
import { LanguageButton } from "./ui/LanguageButton";
import { SetLanguagePopup } from "./SetLanguagePopup";


interface MainPageProps {
  selectedLanguage: string;
}

export default function MainPage({ selectedLanguage }: MainPageProps) {
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle the popup
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };




  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/mainpage.png')` }}
      >
        <div className="absolute top-28 left-4 text-black text-xl">
          Currently CoTracing: {selectedLanguage}
        </div>
        <div className="absolute bottom-4 left-4">
            <button onClick={togglePopup}>
                <LanguageButton />
            </button>
        </div>
                {showPopup && <SetLanguagePopup />}
      </div>
    </>
  );
}
