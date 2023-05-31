import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import sonnenbrillen from "../assets/Sonnenbrillen.jpg";
import "../style/Sustainability.css"
import SectionHeader from "../components/SectionHeader"
import WhiteBackground from "../components/WhiteBackground"

interface SustainabilityPageProps {
    NavBar?: boolean;
    Footer?: boolean;
}

const SustainabilityPage:React.FC<SustainabilityPageProps> = (Props:SustainabilityPageProps):JSX.Element => {
    return <div className="SusWrapper FlexCenter">
        {Props.NavBar && <NavBar position="inherit" active={{name: "Sustainability"}}></NavBar>}
        <SectionHeader header="Nachhaltigkeit"/>
        
        <WhiteBackground >
            <p>Heutzutage ist Nachhaltigkeit ein Synonym für Zukunftsfähigkeit. Schon seit einigen Jahren steht die Formel 1 in heftiger Kritik für ihre Umweltschädlichkeit. Wir möchten nun in unserem "Formel 1 in der Schule" Wettbewerb zeigen, dass man auf verschiedenste Weisen umweltfreundlich handeln kann. Dabei haben wir in jedem Aufgabenbereich unseres multidisziplinären Wettbewerbs den grünen Aspekt beachtet und auf umweltfreundliche Alternativen zurückgegriffen.</p>
            
            <div className="AbsatzMitBild">
                <p>Für das Chassis, den Körper des Autos, entschieden wir uns bewusst für das 3D-Druckverfahren SDL mit Maisstärke. Bei diesem Prozess werden Schichten von Maisstärke mit einer erwärmten Rolle zusammengeklebt und mit einem Laser, Schicht für Schicht, in Form geschnitten. Die Maisstärke ist abbaubar und kompostierbar. Das fertige Auto wird mit nachhaltigen und ökologischen Lacken beschichtet (von unserem lokalen Partner der chemischen Industrie Erlangen). Unsere Teamkleidung erhalten wir von der Firma Puma, die ihren Hauptsitz in Herzogenaurach hat (und großen Wert auf Nachhaltigkeit legt. So sind 50% des Polyesters recycelt und sie beziehen 100% erneuerbare Energie in ihren Standorten).  Dadurch halten wir die benötigten Lieferwege gering, um den CO2-Fußabdruck klein zu halten. Nicht nur im Bekleidungsaspekt versuchen wir so klimaneutral wie möglich zu handeln, sondern auch bei unseren Ab- und Anreisen. Deshalb haben wir uns entschieden, für jegliche Fahrten die öffentlichen Verkehrsmittel zu verwenden.  </p>
                <img src={sonnenbrillen}></img>
            </div>
            
            <p>In unserer Teambox greifen wir auf abbaubare und nachwachsende Materialien zurück. Dabei wird ein Großteil unserer verwendeten Materialien auch nach dem Wettbewerb Verwendung finden und nicht entsorgt werden. </p>
            <p>Mit dem Wettbewerb möchten wir mit gutem Beispiel vorangehen und zeigen, wie essentiell das Achten auf unsere Umwelt ist. Nur so können wir in der Zukunft beständig sein.  </p>
        </WhiteBackground>


        {Props.Footer && <Footer/>}
    </div>
}

export default SustainabilityPage;