import React, { useState } from 'react';
import './Popup.css';
import backgroundImage from '@/components/popup.png';

export function Popup({ toggle }) {
    const [language, setLanguage] = useState('');
    const [pronunciation, setPronunciation] = useState('');
    const [englishTranslation, setEnglishTranslation] = useState('');

    const style = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Ensure the image covers the component
        backgroundPosition: 'center', // Center the image
        height: '50vh', // Example height, adjust as needed
        width: '50%', // Example width, adjust as needed
    };

    const title = {
        fontFamily: ['Inter', 'sans-serif'],
        fontSize: 25,
    };

    function handleSubmission(e) {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', { language, pronunciation, englishTranslation });
        toggle(); // Close the popup
    }

    return (
        <div className="popup" style={style}>
                <h1 className="title text-lg md:text-2xl" style={title}>Upload written material</h1>
                <h3 className="subtitle">Contribute to CoTrace by uploading your own writings in one of the languages
                 we support. The uploaded file should be one word or phrase written clearly. </h3>
                <form onSubmit={handleSubmission}>
                    <label className="language rounded">
                        <input
                            className="rounded"
                            type="text"
                            value={language}
                            placeholder="Enter Language..."
                            onChange={e => setLanguage(e.target.value)}
                        />
                    </label>
                    <label className="pronunciation">
                        <input
                            className="rounded"
                            type="text"
                            value={pronunciation}
                            placeholder="Enter Pronunciation..."
                            onChange={e => setPronunciation(e.target.value)}
                        />
                    </label>
                    <label className="translation">
                        <input
                            className="rounded"
                            type="text"
                            value={englishTranslation}
                            placeholder="Enter Translation..."
                            onChange={e => setEnglishTranslation(e.target.value)}
                        />
                    </label>
                    <button className="submitButton border flex items-center rounded p-2 w-50 h-8 mr-2" type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 30 22"
                            stroke="none"
                            className="w-5 h-5 mr-2"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.4908 22L0 11.5717L2.6227 8.96466L10.4908 16.7859L27.3773 0L30 2.60707L10.4908 22Z" />
                        </svg>
                        Confirm Submission
                    </button>
                    <button className="upload border flex items-center rounded p-2 w-58 h-8 mr-3" variant="link" type="submit">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#74545F"
                            viewBox="0 0 27 27"
                            stroke="none"
                            className="w-5 h-5 mr-2"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.566 19.961V6.40417L7.27008 10.7291L4.95687 8.3171L13.2183 0L21.4798 8.3171L19.1666 10.7291L14.8706 6.40417V19.961H11.566ZM3.30458 26.6147C2.39582 26.6147 1.61814 26.2892 0.971546 25.6383C0.32495 24.9873 0.00110153 24.2039 0 23.2879V18.2976H3.30458V23.2879H23.1321V18.2976H26.4366V23.2879C26.4366 24.2028 26.1133 24.9862 25.4667 25.6383C24.8202 26.2904 24.0419 26.6158 23.1321 26.6147H3.30458Z" />
                        </svg>
                        Upload File
                    </button>
                </form>
            </div>
    );
}


//     const [language, setLanguage] = useState('');
//     const [pronunciation, setPronunciation] = useState('');
//     const [englishTranslation, setEnglishTranslation] = useState('');
//
//     function handleSubmission(e: React.FormEvent) {
//         e.preventDefault();
//         //code to handle submission goes here
//         console.log({ language, pronunciation, englishTranslation });
//         toggle();
//     }
//
//     return (
//         <div className="popup">
//             <div className="popup-inner">
//                 <h2>Upload written material</h2>
//                     <h3>
//                         We welcome you to contribute to the CoTrace database by uploading your own writing
//                         in one of the languages we support. Please ensure the uploaded file is one word or
//                         phrase written clearly.
//                     </h3>
//                 <form onSubmit={handleLogin}>
//                     <label>
//                         Language:
//                         <input type="text" value={language} onChange={e => setLanguage(e.target.value)} />
//                     </label>
//                     <label>
//                         Pronunciation:
//                         <input type="text" value={pronunciation} onChange={e => setPronunciation(e.target.value)} />
//                     </label>
//                     <label>
//                         English Translation:
//                         <input type="text" value={englishTranslation} onChange={e => setEnglishTranslation(e.target.value)} />
//                     </label>
//                     <button type="submit">Submit</button>
//                 </form>
//                 <button onClick={toggle}>Close</button>
//             </div>
//         </div>
//     );
//}
