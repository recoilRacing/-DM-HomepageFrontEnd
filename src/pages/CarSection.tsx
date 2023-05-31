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
            <SectionSUBHeader header={`Das schnellste "f1inschools" Auto Deutschlands!`}/>
            <iframe loading="lazy" className="CarVideo" src="https://www.youtube.com/embed/8xdQAl8Dqsw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div className="CarSectionIntroduction">
                <p>Schon zum zweiten mal in Folge erreichten wir bei der F1 in Schools Meisterschaft mit unserem Auto die schnellste Fahrzeit, zunächst bei der Süddeutschen mit dem Recoil Raptor (RR 4.7) und einer Zeit von 1,083s und nun bei der deutschen Meisterschaft mit dem Racing Reptile (RR 6.16)!</p>
                <p>Hier schafften wir es mit einer Zeit von 1,059s das Rennen zu dominieren und uns den Titel des deutschen Meisters zu sichern. Unser größtes Augenmerk lag dabei auf der Aerodynamik doch konnten wir unser Auto auch durch viele Testversuche und genaue Bewegungsanalysen optimieren.</p>
                <p>Für die Weltmeisterschaft begegnen wir jetzt aber ganz neuen Herausforderungen, mit einem neuen Regelwerk und starker Konkurrenz. Doch aufgrund unserer guten Voraussetzungen und der verlässlichen Unterstützung unserer Sponsoren haben wir uns das Ziel gesetzt das schnellste Auto der Welt bauen und den Sieg der F1 in Schools World Championship nach Deutschland zu holen!</p>
            </div>
            <iframe loading="lazy" className="CarVideo" src="https://www.youtube-nocookie.com/embed/M_41LTYSV-s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </WhiteBackground>
    </div>
}

export default CarSection;  