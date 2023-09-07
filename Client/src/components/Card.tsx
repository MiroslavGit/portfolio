import React, { useEffect, useRef, useState } from 'react';

import "./Card.scss";

type CardProps = {
    dataImage: string;
    header: string;
    content: string;
};

function Card(props: CardProps) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [mouseLeaveDelay, setMouseLeaveDelay] = useState(null);

    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            setWidth(card.offsetWidth);
            setHeight(card.offsetHeight);
        }

        const handleResize = () => {
            if (card) {
                setWidth(card.offsetWidth);
                setHeight(card.offsetHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMouseMove = (e: any) => {
        const card = cardRef.current;
        if (card) {
            const newMouseX = e.pageX - card.offsetLeft - width * 2;
            const newMouseY = e.pageY - card.offsetTop - height / 2;
            setMouseX(newMouseX);
            setMouseY(newMouseY);
        }
    };

    const handleMouseEnter = () => {
        clearTimeout(mouseLeaveDelay);
    };

    const handleMouseLeave = () => {
        const newMouseLeaveDelay = setTimeout(() => {
            setMouseX(0);
            setMouseY(0);
        }, 1000);
        setMouseLeaveDelay(newMouseLeaveDelay);
    };

    const mousePX = mouseX / width;
    const mousePY = mouseY / height;

    const cardStyle = {
        transform: `rotateY(${mousePX * 20}deg) rotateX(${mousePY * -20}deg)`,
    };

    const cardBgTransform = {
        transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
    };

    const cardBgImage = {
        backgroundImage: `url(${props.dataImage})`,
    };

    return (
        <div
            className="card-wrap"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
            <div className="card" style={cardStyle}>
                <div className="card-bg" style={{ ...cardBgTransform, ...cardBgImage }}></div>
                <div className="card-info">
                    <h1>{props.header}</h1>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
