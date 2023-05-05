import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import school from "../assets/MTG_Logo.png"
import wissenschaftmachtschule from "../assets/WissenschaftMachtSchule.jpg"
import mintEC from "../assets/MINTEC.jpg"
import "../style/OurSchoolPage.css";

interface OurSchoolPageProps {
    NavBar?: boolean;
    Footer?: boolean;
}

const OurSchoolPage:React.FC<OurSchoolPageProps> = (Props: OurSchoolPageProps):JSX.Element => {
    return <div className="OurSchoolPageWrapper">
        {Props.NavBar && <NavBar position="inherit" active={{name: "Unsere Schule"}}></NavBar>}

        <div className="OurSchoolHeaderWrapper FlexCenter">
            <h1 className="OurSchoolHeader">Unsere Schule</h1>
        </div>

        <div className="OurSchoolContent FlexCenter">
            <div className="OurSchoolAbsatz">
                <p>Aktuell besuchen exakt 800 Schülerinnen und Schüler das „Städtische Marie-Therese-Gymnasium“, die von 94 Lehrkräften (davon 34 MINT-Lehrkräfte) unterrichtet werden. Die Schule weist seit 2016 ein rein naturwissenschaftliches Profil auf: Dieses Unterrichtsangebot wird von weiteren Angeboten flankiert, die zu einer vertieften Allgemeinbildung gehören: Musik, Theater, Kunst und Zirkus. 
Als dritte, spätbeginnende Fremdsprache bietet das MTG Chinesisch an, zukunftsorientiert und perfekt mit MINT kombinierbar.</p>
                <img src={school} onClick={() => window.open("https://mtg-erlangen.de/")} style={{backgroundColor: "white", padding: "10px"}}></img>
            </div>
            <div className="OurSchoolAbsatz reverseFlex">
                <p>Neben dem fundierten Unterricht präsentiert sich die Schule immer wieder mit zahlreichen hochkarätigen Veranstaltungen einem breiten Publikum und hat sich zu einer renommierten Adresse in Sachen Naturwissenschaften an Schulen gemausert: Im Sommer 2012 gelang in einer spektakulären Abendveranstaltung vor über 2500 Besuchern der Eintrag ins Guinnessbuch der Rekorde: Aus einer Kartoffelbatterie erzeugten die Schülerinnen und Schüler eine Spannung von über 1200 V! Seit vielen Jahren ist die Großveranstaltung "Wissenschaft macht Schule" unser Leuchtturmprojekt!
</p>
                <img src={wissenschaftmachtschule} style={{backgroundColor: "white"}}></img>

            </div>
            <div className="OurSchoolAbsatz">
                <p>Seit 2018 sind wir stolzer Partner im MINT EC Netzwerk. Schwerpunkte unserer vielfältigen Aktivitäten sind das ScienceLAB in der Unterstufe, Robotik, Ökologie und Urban Gardening in der Mittelstufe, vielseitige Oberstufenkurse (Biochemisches Praktikum, Mikrocontroller, die Lehrplanalternativen Biophysik (Medizinstadt Erlangen) und Astrophysik), naturwissenschaftliche Exkursionen sowie die Zusammenarbeit mit unseren hochkarätigen Partnern in P- und W-Seminaren (Siemens AG, Fraunhofer IIS, Sternwarten Nürnberg und Bamberg, TH Nürnberg, EAM Labs der FAU Erlangen-Nürnberg).</p>
                <img src={mintEC} style={{backgroundColor: "white"}}></img>
            </div>

        </div>
        
        {Props.Footer && <Footer></Footer>}

    </div>;
}

export default OurSchoolPage;