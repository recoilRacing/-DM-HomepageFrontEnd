import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import school from "../assets/MTG_Logo.png"
import wissenschaftmachtschule from "../assets/WissenschaftMachtSchule.jpg"
import mintEC from "../assets/MINTEC.jpg"
import "../style/OurSchoolPage.css";
import SectionHeader from "../components/SectionHeader"
import WhiteBackground from "../components/WhiteBackground"

interface OurSchoolPageProps {
    NavBar?: boolean;
    Footer?: boolean;
}

const OurSchoolPage:React.FC<OurSchoolPageProps> = (Props: OurSchoolPageProps):JSX.Element => {
    return <div className="OurSchoolPageWrapper">
        {Props.NavBar && <NavBar position="inherit" active={{name: "Our school"}}></NavBar>}
        <SectionHeader header="Our school"/>

        <WhiteBackground>
            <div className="OurSchoolAbsatz">
                <p>The "Städtisches Marie-Therese-Gymnasium" currently has an enrollment of approximately 1000 students, who are instructed by 94 teachers, including 34 STEM teachers. Since 2016, the school has maintained a distinct scientific profile. This academic offering is complemented by a range of other programs that contribute to comprehensive education, including theater, art, and music. Moreover, the school offers Chinese as a third foreign language, which aligns with STEM subjects and prepares students for the future.</p>
                <img src={school} onClick={() => window.open("https://mtg-erlangen.de/")} style={{backgroundColor: "white", padding: "10px"}}></img>
            </div>
            <div className="OurSchoolAbsatz reverseFlex">
                <p>In addition to its rigorous curriculum, the school actively engages the community through numerous high-profile events, establishing itself as a renowned institution for the natural sciences. In the summer of 2012, the school achieved a remarkable feat by generating a voltage of over 1,200 V from a potato battery during a spectacular evening event attended by more than 2,500 visitors, securing a place in the Guinness Book of Records. "Wissenschaft macht Schule" (Science conceives School) has been our flagship project for many years!
</p>
                <img src={wissenschaftmachtschule} style={{backgroundColor: "white"}}></img>

            </div>
            <div className="OurSchoolAbsatz">
                <p>Since 2018, we have proudly been a partner in the MINT EC network. Our diverse activities encompass various areas, including the ScienceLAB in middle school, robotics, ecology, and urban gardening in early high school, and a wide range of courses in later high school, such as biochemical internships, microcontroller projects, and alternative curricula like biophysics (in collaboration with the medical city of Erlangen) and astrophysics. We organize scientific excursions and collaborate with esteemed partners in P- and W-seminars, including Siemens AG, Fraunhofer IIS, Nuremberg and Bamberg observatories, TH Nuremberg, and EAM Labs at FAU Erlangen-Nuremberg.</p>
                <img src={mintEC} style={{backgroundColor: "white"}}></img>
            </div>

        </WhiteBackground>
        
        {Props.Footer && <Footer></Footer>}

    </div>;
}

export default OurSchoolPage;