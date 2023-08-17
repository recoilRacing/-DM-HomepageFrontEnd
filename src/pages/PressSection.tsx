import { useEffect, useReducer, useRef } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../style/PressSection.css"
import SectionHeader from "../components/SectionHeader"
import SectionSUBHeader from "../components/SectionSUBHeader"
import WhiteBackground from "../components/WhiteBackground"

interface PressSectionProps {
    NavBar?: boolean;
    Footer?: boolean;
}

const PressSection:React.FC<PressSectionProps> = (Props:PressSectionProps):JSX.Element => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])


    return <div id="PressSection">
        {Props.NavBar && <NavBar position="inherit" active={{name: "Press"}}></NavBar>}

        <SectionHeader header="Press"/>
        <WhiteBackground className="FlexCenter vertical">
            <SectionSUBHeader header="German Championship Recap"/>
            <iframe className="PressYouTube" src="https://www.youtube.com/embed/BYCRcr6ljUI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <SectionSUBHeader header="RacingTV Documentation (DE)"/>
            <video className="PressRacingTV" src={"https://racingtv.de/wp-content/uploads/2023/05/f1-in-schools-deutsche-meisterschaft-2023-in-sindelfingen-die-sieger.mp4"} controls controlsList="nodownload"></video>
            <video className="PressRacingTV" src={"https://www.racingtv.de/wp-content/uploads/2023/02/interviews-und-sieger-der-meisterschaft-sud-2023-formel-1-in-der-schule.mp4"} controls controlsList="nodownload"></video>
        </WhiteBackground>


        {Props.Footer && <Footer></Footer>}

    </div>
    
}

export default PressSection;  