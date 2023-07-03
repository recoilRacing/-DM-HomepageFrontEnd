import Content from "../components/Content";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import SectionSUBHeader from "../components/SectionSUBHeader";
import WhiteBackground from "../components/WhiteBackground";
import "../style/BlogPage.css";


interface BlogPageProps {
    NavBar?: boolean;
    Footer?: boolean;
}

interface BlogPost {
    date: string;
    content: string[];
}

const Blogposts:BlogPost[] = [
    {date: "07/03/2023", content: ["um bei den World Finals glänzen zu können, arbeiten wir mit großem Eifer weiter. Unser Hauptfokus liegt momentan darauf, unser Auto an das internationale Regelwerk anzupassen, das immerhin 60 Seiten umfasst und vom nationalen Regelwerk erheblich abweicht. So müssen beispielsweise die Fahrzeuge in Anlehnung an die „große“ Formel 1 erstmals mit einem Halo und einem Helm ausgestattet sein, der den Kopf des Formel 1 Piloten darstellen soll. Alles in allem keine leichte Aufgabe für unsere Konstrukteurin Marleen, da jeder noch so kleine Verstoß gegen das Regelwerk kostbare Punkte kostet, die in der Endabrechnung wehtun können.", "Besonderes Highlight der Woche: Der Zentralwerkstatt des Departments Physik der FAU Erlangen ist es gelungen, an einer CNC-Fräse unseres Premium Partners Siemens einen allerersten Prototyp des neuen Autos aus dem vorgeschriebenen Polyurethan herzustellen. Ein erster Meilenstein und ein großes Dankeschön an Herrn Mauser!", "Parallel dazu laufen unsere Vorbereitungen für den kommenden Samstag, wenn wir unser Projekt mit Rennbahn und Messestand beim Siemens Familientag auf dem Siemens Campus Erlangen präsentieren wollen. Wir freuen uns, den Besuchern mehr über den Wettbewerb und unser Team erzählen zu dürfen."]}
]

const BlogPage:React.FC<BlogPageProps> = (Props):JSX.Element => {
    return <>
        {Props.NavBar && <NavBar position="inherit" active={{name: "Blog"}}></NavBar>}
        <SectionHeader header="Blog"></SectionHeader>
        
        <Content >
            <WhiteBackground translucent>
                {Blogposts.map(i => <Blog date={i.date} content={i.content}></Blog>)}
            </WhiteBackground>
        </Content>
        
        {Props.Footer && <Footer></Footer>}
    </>
}

const Blog:React.FC<BlogPost> = (Props):JSX.Element => {
    return <div >
        <h2 className="BlogDate">{Props.date}</h2>
        <div className="Blog">
            {Props.content.map(i => <p>{i}</p>)}
        </div>
    </div>
}


export default BlogPage;