import React from "react";

interface MainPageProps {
  selectedLanguage: string;
}

export default function MainPage({ selectedLanguage }: MainPageProps) {
  return (
    <>
      <div
        className="h-screen w-screen bg-cover bg-no-repeat"
        style={{ backgroundImage: `url('/mainpage.png')` }}
      >
        {/* Display the selected language in the top left corner */}
        <div className="absolute top-28 left-4 text-black text-xl">
          Currently CoTracing: {selectedLanguage}
        </div>
      </div>
    </>
  );
}
