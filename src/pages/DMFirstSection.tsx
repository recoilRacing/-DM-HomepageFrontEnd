import { useEffect, useRef, useState } from "react";
import img from "../assets/GittingerVorTeamstand.jpg";
import SocialMediaLink from "../components/SocialMediaLink";
import "../style/DMFirstSection.css";

interface FirstSectionProps {
    onIntersectingChange?: (isIntersecting: boolean) => void;
}

const FirstSection:React.FC<FirstSectionProps> = (Props:FirstSectionProps):JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    
    return <div ref={ref}>
            <div className="DMimageContainer">
                {/* <img className="FlexCenter DMFullSize" src={img} alt="Teamstand" /> */}
            </div>

            <div className="DMFirstSectionContent">
                <div className="DMContentTop"></div>
                <div className="DMContentBottom FlexCenter">
                    <h1 className="Header DMMainPageTitle">
                        Wir sind deutscher Meister!
                    </h1>
                </div>
            </div>
    </div>
}

export default FirstSection;