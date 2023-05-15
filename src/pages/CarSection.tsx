import { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import "../style/CarSection.css"

interface CarSectionProps {
    NavBar?: boolean;
    onIntersectingChange?: (isIntersecting: boolean) => void;
}

const CarSection:React.FC<CarSectionProps> = (Props:CarSectionProps):JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       Props.onIntersectingChange(entry.isIntersecting);
    //     },
    //     {
    //       root: null,
    //       rootMargin: "0px",
    //       threshold: 0.6,
    //     }
    //   );

    //   if (ref.current) {
    //     observer.observe(ref.current);
    //   }
    //   return () => {
    //     if (ref.current) {
    //       observer.unobserve(ref.current);
    //     }
    //   };
    // }, [ref]);

    return <div ref={ref} id="CarSection" className="FlexCenter vertical">

        {Props.NavBar && <NavBar position="inherit" active={{name: "Auto"}}></NavBar>}

        <div className="CarHeaderWrapper FlexCenter">
            <h1 className="CarHeader">Das Racing Reptile</h1>
        </div>

        <div className="CarSectionWrapper FlexCenter vertical">

            {/* <div className="CarSectionIntroduction"> */}
                {/* <h2>Servus</h2> */}
                <h2>Das schnellste "f1inschools" Auto Deutschlands!</h2>
            {/* </div> */}


            <iframe loading="lazy" className="CarVideo" src="https://www.youtube.com/embed/8xdQAl8Dqsw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
            <div className="CarSectionIntroduction">
            <p>Schon zum zweiten mal in Folge erreichten wir bei der F1 in Schools Meisterschaft mit unserem Auto die schnellste Fahrzeit, zunächst bei der Süddeutschen mit dem Recoil Raptor (RR 4.7) und einer Zeit von 1,083s und nun bei der deutschen Meisterschaft mit dem Racing Reptile (RR 6.16)!</p>
            <p>Hier schafften wir es mit einer Zeit von 1,059s das Rennen zu dominieren und uns den Titel des deutschen Meisters zu sichern. Unser größtes Augenmerk lag dabei auf der Aerodynamik doch konnten wir unser Auto auch durch viele Testversuche und genaue Bewegungsanalysen optimieren.</p>
            
            <p>Für die Weltmeisterschaft begegnen wir jetzt aber ganz neuen Herausforderungen, mit einem neuen Regelwerk und starker Konkurrenz. Doch aufgrund unserer guten Voraussetzungen und der verlässlichen Unterstützung unserer Sponsoren haben wir uns das Ziel gesetzt das schnellste Auto der Welt bauen und den Sieg der F1 in Schools World Championship nach Deutschland zu holen!</p>
            
            </div>
            <iframe loading="lazy" className="CarVideo" src="https://www.youtube-nocookie.com/embed/M_41LTYSV-s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div> 
    </div>
    
}

export default CarSection;  