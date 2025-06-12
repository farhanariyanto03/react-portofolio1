import React, { useRef, useEffect } from 'react';

const CustomCursor = () => {
    // ref for the cursor element
    const cursorRef = useRef(null);
    const cursorBorderRef = useRef(null);

    // hide cursor for mobile
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
        return null;
    }

    useEffect(() => {
        // function to move the cursor
        const moveCursor = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // calculate the position of the cursor
            const cursorX = mouseX - 10;
            const cursorY = mouseY - 10;

            // set the position of the cursor
            cursorRef.current.style.top = `${cursorY}px`;
            cursorRef.current.style.left = `${cursorX}px`;

            // set the position of the border cursor
            cursorBorderRef.current.style.top = `${cursorY - 10}px`;
            cursorBorderRef.current.style.left = `${cursorX - 10}px`;
        };

        // add event listener to the window
        window.addEventListener("mousemove", moveCursor);

        // clean up the event listener
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            {/* main cursor dot */}
            <div ref={cursorRef} className="fixed top-0 left-0 w-[20px] h-[20px] bg-yellow-400 rounded-full pointer-events-none z-[999] mix-blend-difference" />

            <div ref={cursorBorderRef} className="fixed top-0 left-0 w-[40px] h-[40px] border-2 rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-60" />
        </>
    );
};

export default CustomCursor;
