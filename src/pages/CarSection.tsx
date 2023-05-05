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
            <h1 className="CarHeader">Der Recoil Raptor</h1>
        </div>

        <div className="CarSectionWrapper FlexCenter vertical">

            {/* <div className="CarSectionIntroduction"> */}
                {/* <h2>Servus</h2> */}
                <h2>Das ist unser Auto, mit dem wir die Süddeutsche Meisterschaft gewonnen haben!</h2>
            {/* </div> */}


            <iframe loading="lazy" className="CarVideo" src="https://www.youtube-nocookie.com/embed/M_41LTYSV-s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        
            <div className="CarSectionIntroduction">
            <p>Bei den Rennen hat uns unser Auto nicht enttäuscht. Wir können stolz verkünden, dass wir die Knock-Out Rennen, den Preis für das schnellste Auto und den Konstruktionspreis gewonne haben. Doch so ganz zufällig kam das natürlich nicht: Die Wochen und Monate vor der Meisterschaft haben wir uns sehr intensiv mit der Konstruktion und Optimierung unseres Recoil Raptors beschäftigt.</p>
            <p>Für die anstehende Deutsche Meisterschaft im Mai in Sindelfingen arbeiten wir fleißig daran, unser Auto noch weiter zu optimieren</p>
            </div>
        </div> 
    </div>
    
}

export default CarSection;  