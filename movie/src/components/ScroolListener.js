import React from 'react'
import { useEffect } from 'react'
function ScroolListener({ onScrollChange}) {
    useEffect(() => {
        // Add your scroll event listener here
        const handleScroll = (event) => {
            // Your scroll event handling logic goes here
            const scrollY = window.scrollY;
            onScrollChange(scrollY); 
        };

        // Attach the scroll event listener to the window object
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [onScrollChange]);
    return (
        <div> </div>
    );
}

export default ScroolListener