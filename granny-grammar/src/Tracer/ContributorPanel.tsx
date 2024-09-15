"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popup } from "@/Tracer/Popup";
import "./ContributorPanel.css";

export function ContributorPanel() {

    const [seen, setSeen] = useState(false);

    function togglePop () {
        console.log("Popup toggled"); // Check if this logs to console
        setSeen(!seen);
    };

    return (
        <div className="panel relative border rounded px-3">
            <p className="title absolute flex top-2 left-10">Interested in contributing written material?</p>
            <Button className="submitHere absolute border flex rounded bottom-4 w-58 h-8 px-3"
                onClick={togglePop}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 36 36"
                    stroke="#000000"
                    className="w-5 h-5 mr-2"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M30 19.5V8.6235C30.0001 8.5051 29.9768 8.38784 29.9315 8.27845C29.8862 8.16905 29.8198 8.06967 29.736 7.986L25.014 3.264C24.8454 3.09517 24.6166 3.00021 24.378 3H6.9C6.66131 3 6.43239 3.09482 6.2636 3.2636C6.09482 3.43239 6 3.66131 6 3.9V32.1C6 32.3387 6.09482 32.5676 6.2636 32.7364C6.43239 32.9052 6.66131 33 6.9 33H21" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M24 3V8.1C24 8.33869 24.0948 8.56761 24.2636 8.7364C24.4324 8.90518 24.6613 9 24.9 9H30M24 28.5H33M33 28.5L28.5 24M33 28.5L28.5 33" />
                </svg>
                Submit here
            </Button>
            {seen ? <Popup toggle={togglePop} /> : null}
        </div>
    );
}