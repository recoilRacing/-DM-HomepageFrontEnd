import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SponsorLink from "../components/SponsorLink";
import SectionHeader from "../components/SectionHeader"
import WhiteBackground from "../components/WhiteBackground"


import "../style/PartnerSection.css"


interface PartnerSectionProps {
    NavBar?: boolean;
    Footer?: boolean;

    onIntersectingChange: (isIntersecting: boolean) => void;
}

const PartnerSection:React.FC<PartnerSectionProps> = (Props:PartnerSectionProps):JSX.Element => {
    
    const ref = useRef<HTMLDivElement>(null);
    
    return <div ref={ref} id="PartnerSection">
        {Props.NavBar && <NavBar position="inherit" active={{name: "Presse"}}></NavBar>}

        <SectionHeader header="Unsere Partner"/>

        <WhiteBackground className="logos">
            <SponsorLink type="Siemens"></SponsorLink>
            <SponsorLink type="CHING"></SponsorLink>
            <SponsorLink type="FAU"></SponsorLink>
            <SponsorLink type="Fraunhofer"></SponsorLink>
            <SponsorLink type="Myonic"></SponsorLink>
            <SponsorLink type="Puma"></SponsorLink>
            <SponsorLink type="Weineck" height={70}></SponsorLink>
            <SponsorLink type="TH"></SponsorLink>
            <SponsorLink type="Print4You"></SponsorLink>
        </WhiteBackground>

        {Props.Footer && <Footer></Footer>}

    </div>
    
}

export default PartnerSection;  