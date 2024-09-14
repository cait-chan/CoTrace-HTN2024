import React, { useState } from "react";
import { DropdownMenuButton } from "./ui/dropdown-menu-button";
import MainPage from "./MainPage";

export default function LandingPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  // Function to update the selected language
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  // Conditionally render MainPage or LandingPage based on the selected language
  if (selectedLanguage) {
    return <MainPage selectedLanguage={selectedLanguage} />;
  }

  return (
    <>
      <div
        className={`h-screen w-screen bg-center bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url('/landingpage.png')` }}
      >
      </div>
      <DropdownMenuButton onLanguageChange={handleLanguageChange} />
    </>
  );
}

