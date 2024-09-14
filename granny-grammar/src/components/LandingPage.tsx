import React, { useState } from "react";
import { DropdownMenuButton } from "./ui/dropdown-menu-button";

export default function LandingPage() {
  const [backgroundImage, setBackgroundImage] = useState<string>('/landingpage.png');
  const [showDropdownMenuButton, setShowDropdownMenuButton] = useState<boolean>(true);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  // Determine whether to apply bg-center based on the background image
  const hasDefaultBackground = backgroundImage === '/landingpage.png';

  // Function to update the background image
  const changeBackgroundImage = (newImage: string) => {
    setBackgroundImage(newImage);
    setShowDropdownMenuButton(false); // Hide the button when background changes
  };

  // Function to update the selected language
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <div
        className={`h-screen w-screen ${hasDefaultBackground ? 'bg-center' : ''} bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        {/* Conditionally render the selected language in the top left corner */}
        {selectedLanguage && (
          <div className="absolute top-28 left-4 text-black text-xl font-bold">
            {selectedLanguage}
          </div>
        )}
      </div>
      {/* Conditionally render the DropdownMenuButton based on showDropdownMenuButton state */}
      {showDropdownMenuButton && (
        <DropdownMenuButton 
          onChangeBackground={changeBackgroundImage} 
          onLanguageChange={handleLanguageChange} 
        />
      )}
    </>
  );
}



// import { DropdownMenuButton } from "./ui/dropdown-menu-button";
 
// export default function LandingPage() {
//   return (
//     <>
//         <div className="h-screen w-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('/landingpage.png')` }}>
//         </div>
//         <DropdownMenuButton />
//     </>
//   );
// }