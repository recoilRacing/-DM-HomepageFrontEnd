import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SponsorLink, {getAllSponsorsAsElements, getAllSponsorsByCategory} from "../components/SponsorLink";
import SectionHeader from "../components/SectionHeader"
import WhiteBackground from "../components/WhiteBackground"
import * as sponsors from "../SponsorLinks";

import "../style/PartnerSection.css"
import SectionSUBHeader from "../components/SectionSUBHeader";


interface PartnerSectionProps {
    NavBar?: boolean;
    Footer?: boolean;

    onIntersectingChange: (isIntersecting: boolean) => void;
}

export type resizeTableType = {
    [K in sponsors.Sponsors]?: number
}

const PartnerSection:React.FC<PartnerSectionProps> = (Props:PartnerSectionProps):JSX.Element => {
    
    const ref = useRef<HTMLDivElement>(null);

    const resizeTable:resizeTableType = {
        CHING: .8,
        Puma: .8,
        Elsner_Stiftung: 0.8,
        Rotary_Club: 0.8,
        SKZ: .8,
        F3G: .8,
        Weineck: .8,
    }
    
    return <div ref={ref} id="PartnerSection">
        {Props.NavBar && <NavBar position="inherit" active={{name: "Press"}}></NavBar>}

        <SectionHeader header="Our sponsors"/>

        <WhiteBackground>
            <h1 style={{color: "#e10600"}}>Premium Sponsor</h1>
            <div className="logos">
                <SponsorLink type="Siemens"></SponsorLink>
            </div>
        </WhiteBackground>

        <WhiteBackground>
            <h1 style={{color: "#097b41"}}>Academical Sponsors</h1>
            <div className="logos">
                {getAllSponsorsByCategory("Academical", undefined, resizeTable).map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)}
            </div>
        </WhiteBackground>
            
        <WhiteBackground>
            <h1 style={{color: "gold"}}>Gold Sponsors</h1>
            <div className="logos">
                {getAllSponsorsByCategory("Gold", undefined, resizeTable).map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)}
            </div>
        </WhiteBackground>

        <WhiteBackground>
            <h1 style={{color: "silver"}}>Silver Sponsors</h1>
            <div className="logos">
                {getAllSponsorsByCategory("Silver", undefined, resizeTable).map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)}
            </div>
        </WhiteBackground>

        <WhiteBackground>
            <h1 style={{color: "silver"}}>Value Sponsors</h1>
            <div className="logos">
                {getAllSponsorsByCategory("Value", undefined, resizeTable).map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)}
                {/* {getAllSponsorsByCategory("Queue", undefined, resizeTable).map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)} */}
            </div>
        </WhiteBackground>

        {Props.Footer && <Footer></Footer>}
    </div>
    
}

export default PartnerSection;  