
import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const HorizontalText = () => {

    const textRef = useRef(null);
    const textRefLeft = useRef(null);

    const { transform } = useSpring({
        transform: `translateX(${textRef.current ? -textRef.current.getBoundingClientRect().left : 0}px)`,
        from: { transform: "translateX(0)" }
    });

    const { transformLeft } = useSpring({
        transform: `translateX(${textRefLeft.current ? -textRefLeft.current.getBoundingClientRect().left : 0}px)`,
        from: { transform: "translateX(0)" }
    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let foo = window.scrollY
            textRef.current.style.transform = `translateX(${foo * 0.05 }px)`;
            textRefLeft.current.style.transform = `translateX(${-(foo * 0.15 )}px)`;
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <div className="section horizontal-text">
            <animated.h2 style={{ transform }} ref={textRef}>Wyraź Swoje poparcie &#183; Wyraź Swoje poparcie &#183; Wyraź Swoje poparcie &#183;</animated.h2>
            <animated.h2 style={{ transformLeft }} ref={textRefLeft}> Wyraź Swoje poparcie &#183; Wyraź Swoje poparcie &#183; Wyraź Swoje poparcie &#183;</animated.h2>
        </div>
    )
}

export default HorizontalText
