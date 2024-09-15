import React, { useState } from "react";
import { LanguageButton } from "./ui/LanguageButton";
import { SetLanguagePopup } from "./SetLanguagePopup";
import { VocabList } from "@/Tracer/VocabList";
import { ContributorPanel } from "@/Tracer/ContributorPanel";


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
        <div className="absolute top-40 right-4 h-600 w-700">
            <VocabList className="vocabList absolute border w-300"> </VocabList>
        </div>
        <div className="absolute bottom-4 right-4 h-600 w-700">
            <ContributorPanel className="contributorPanel absolute bottom-4"> </ContributorPanel>
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
