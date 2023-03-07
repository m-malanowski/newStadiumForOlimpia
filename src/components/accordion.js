import React, { useEffect, useRef, useState } from "react";

function Accordion(props) {
    const [active, setActive] = useState(false);
    const content = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        console.log("Height for ", props.title, ": ", height);
    }, [height]);

    function toggleAccordion() {
        setActive(!active);
        setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
    }

    return (
        <div className="accordion__section">
            <div
                className={`accordion ${active ? "active" : ""}`}
                onClick={toggleAccordion}
            >
                <h5 className="accordion__title">{props.title}</h5>

                <svg className={active ? "rotate" : ""} xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none">
                    <path fill="var(--color-contrast-lower)"
                          d="m12.657 11.657-1.998.018v-7.92L2.05 12.364.636 10.95l8.61-8.61h-7.92L1.342.344h11.314v11.314Z"/>
                </svg>

                {/*<span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>*/}
            </div>
            <div
                ref={content}
                style={{ maxHeight: `${height}` }}
                className="accordion__content"
            >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />
            </div>
        </div>
    );
}

export default Accordion;
