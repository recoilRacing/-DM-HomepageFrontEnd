import NavBar from "../components/NavBar"
import "../style/MainPage.css"
import { Section } from "../customInterfaces";
import FirstSection from "./FirstSection";
import TeamSection from "./TeamSection";
import CarSection from "./CarSection";
import Footer from "../components/Footer";
import { useState } from "react";
import PartnerSection from "./PartnerSection";
import DMFirstSection from "./DMFirstSection";
import AchievementsSection from "./AchievementsSection";

interface MainPageProps {
    section?: Section;
}

const MainPage:React.FC<MainPageProps> = (Props:MainPageProps):JSX.Element => {

    const [component1IsIntersecting, setComponent1IsIntersecting] = useState(false);
    const [component2IsIntersecting, setComponent2IsIntersecting] = useState(false);
    const [component3IsIntersecting, setComponent3IsIntersecting] = useState(false);
    const [component4IsIntersecting, setComponent4IsIntersecting] = useState(false);

    setTimeout(() => {
        if (Props.section?.referenceElementID) {
            const section = document.getElementById(Props.section.referenceElementID);
            if (section) {
                section.scrollIntoView({behavior: "auto"})
            }
        }
    }, 100)
    
    return <div id="MainPage">
        <NavBar active={Props.section}/>

        <section id="FirstSection">
            <FirstSection onIntersectingChange={setComponent1IsIntersecting}></FirstSection>
        </section>
        
        <section id="TeamSection" className="MTOP">
            <TeamSection onIntersectingChange={setComponent2IsIntersecting}></TeamSection>
        </section>

        <section id="CarSection" className="MTOP">
            <CarSection onIntersectingChange={setComponent3IsIntersecting}></CarSection>
        </section>

        {/* <section id="AchievementsSection" className="MTOP">
            <AchievementsSection></AchievementsSection>
        </section> */}

        <section id="PartnerSection" className="MTOP">
            <PartnerSection onIntersectingChange={setComponent4IsIntersecting}></PartnerSection>
        </section>

        <div style={{height: "100px"}}></div>
        
        <Footer></Footer>

    </div>

}

export default MainPage;