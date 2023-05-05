import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../style/ContactPage.css";

interface ContactPageProps {
    NavBar?: boolean;
    Footer?: boolean;
}

const ContactPage:React.FC<ContactPageProps> = (Props:ContactPageProps):JSX.Element => {
    return <div className="ContactWrapper FlexCenter">
        {Props.NavBar && <NavBar position="inherit" active={{name: "Kontakt"}}></NavBar>}

        <div className="ContactHeaderWrapper FlexCenter">
            <h1 className="ContactHeader">Kontakt</h1>
        </div>
        

        <div className="ContactContent">
            <h1>Lehrer</h1>
            <p>Axel Fischer: <br/><br/>Tel: <a href="tel:+49 172 8132540">+49 172 8132540</a><br/>Mail: <a href="mailto:axel.fischer@stadt.erlangen.de">axel.fischer@stadt.erlangen.de</a></p>
            <br/>
            <p>Martin Sauer: <br/><br/>Tel: <a href="tel:+49 176 21365534">+49 176 21365534</a><br/>Mail: <a href="mailto:martin.sauer@stadt.erlangen.de">martin.sauer@stadt.erlangen.de</a></p>
            <br/>
            <br/>
            <h1>Marketinganfragen</h1>
            <p>Caroline Schalk: <br/><br/>Tel: <a href="tel:+49 173 5472374">+49 173 5472374</a><br/>Mail: <a href="mailto:info@recoil-racing.de">caroline@recoil-racing.de</a></p>
            <br/>
            <br/>
            <h1>Website</h1>
            <p>Finn Krause: <br/><br/>Tel: <a href="tel:+49 176 21443001">+49 176 21443001</a><br/>Mail: <a href="mailto:finn@recoil-racing.de">finn@recoil-racing.de</a></p>

        </div>

        {/* <a href="mailto:info@recoil-racing.de">info@recoil-racing.de</a> */}

        {Props.Footer && <Footer/>}
    </div>
}

export default ContactPage;