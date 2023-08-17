import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import "../style/CarSection.css"
import WhiteBackground from  "../components/WhiteBackground";
import SectionHeader from "../components/SectionHeader";
import SectionSUBHeader from "../components/SectionSUBHeader";

interface CarSectionProps {
    NavBar?: boolean;
    onIntersectingChange?: (isIntersecting: boolean) => void;
}

const CarSection:React.FC<CarSectionProps> = (Props:CarSectionProps):JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    return <div ref={ref} id="CarSection" className="FlexCenter vertical">

        {Props.NavBar && <NavBar position="inherit" active={{name: "Auto"}}></NavBar>}

        <SectionHeader header="The Racing Reptile"></SectionHeader>

        <WhiteBackground className="FlexCenter vertical">
            <SectionSUBHeader header={`The fastest "f1inschools" car in Germany!`}/>
            <iframe loading="lazy" className="CarVideo" src="https://www.youtube.com/embed/8xdQAl8Dqsw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="CarSectionIntroduction">
                <p>Continuing our winning streak, we once again achieved the fastest driving time at the F1 in Schools Championship. At the South German event, our Recoil Raptor (RR 4.7) completed the race in an impressive 1.083s, while at the German Championship, our Racing Reptile (RR 6.16) dominated with a time of 1.059s, securing us the title of German Champion.</p>
                <p>While we placed significant emphasis on optimizing our car's aerodynamics, we also conducted numerous test trials and conducted precise motion analyses to fine-tune its performance.</p>
                <p>Now, as we prepare for the World Championship, we anticipate new and formidable challenges with revised regulations and tough competition. However, with our strong foundation and the unwavering support of our sponsors, our goal is to construct the fastest car in the world and secure victory for Germany in the F1 in Schools World Championship.</p>
            </div>
            <iframe loading="lazy" className="CarVideo" src="https://www.youtube-nocookie.com/embed/M_41LTYSV-s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </WhiteBackground>
    </div>
}

export default CarSection;  