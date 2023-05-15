import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SponsorLink from "../components/SponsorLink";


import "../style/PartnerSection.css"


interface PartnerSectionProps {
    NavBar?: boolean;
    Footer?: boolean;

    onIntersectingChange: (isIntersecting: boolean) => void;
}

const PartnerSection:React.FC<PartnerSectionProps> = (Props:PartnerSectionProps):JSX.Element => {
    
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
    
    return <div ref={ref} id="PartnerSection">
        {Props.NavBar && <NavBar position="inherit" active={{name: "Presse"}}></NavBar>}

        <div className="TeamHeaderWrapper FlexCenter">
            <h1 className="TeamHeader">Unsere Partner</h1>
        </div>

        <div className="logos">
            <SponsorLink type="Siemens"></SponsorLink>
            <SponsorLink type="CHING"></SponsorLink>
            <SponsorLink type="FAU"></SponsorLink>
            <SponsorLink type="Fraunhofer"></SponsorLink>
            <SponsorLink type="Myonic"></SponsorLink>
            <SponsorLink type="Puma"></SponsorLink>
            <SponsorLink type="Weineck" height={70}></SponsorLink>
            <SponsorLink type="TH"></SponsorLink>
            <SponsorLink type="Print4You"></SponsorLink>
        </div>

        {Props.Footer && <Footer></Footer>}

    </div>
    
}

export default PartnerSection;  