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
        <SectionHeader header="Sustainability"/>
        
        <WhiteBackground >
            <p>In today's world, sustainability is synonymous with ensuring long-term viability. Formula 1 has faced significant criticism in recent years for its environmental impact. However, with our participation in the "F1 in Schools" competition, we aim to demonstrate that it is possible to act in an eco-friendly manner in various aspects. Therefore, we have incorporated environmentally conscious practices in each area of our multidisciplinary competition.</p>
            
            <div className="AbsatzMitBild">
                <div>
                    <p>For the car's chassis, we consciously opted for the SDL 3D printing process using corn starch. This method involves bonding layers of corn starch together with a heated roller and shaping them with a laser, layer by layer. The corn starch material is both degradable and compostable. Additionally, we apply sustainable and ecological paints to the car's exterior, provided by our local partner, CHING.</p>
                    <p>Our team clothing is exclusively sourced from German eco-friendly companies. Puma, one of our sponsors, utilizes 50% recycled polyester in their garments and operates their facilities on 100% renewable energy. By minimizing delivery distances, we reduce our carbon footprint. We extend our commitment to climate neutrality beyond clothing and incorporate it into our transportation practices. As a result we exclusively rely on public transportation for all our trips.</p>

                </div>
                <img src={sonnenbrillen}></img>
            </div>
            
            <p>Our team box is constructed from degradable and renewable materials, ensuring that nearly 100% of the materials find purpose beyond the competition rather than being discarded.</p>
            <p>Through this competition, we aim to set a positive example and underscore the importance of environmental stewardship. It is only by doing so that we can ensure a sustainable future.</p>
        </WhiteBackground>


        {Props.Footer && <Footer/>}
    </div>
}

export default SustainabilityPage;