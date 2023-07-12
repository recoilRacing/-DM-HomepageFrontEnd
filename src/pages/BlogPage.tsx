import { useEffect, useRef, useState } from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import SectionSUBHeader from "../components/SectionSUBHeader";
import WhiteBackground from "../components/WhiteBackground";
import "../style/BlogPage.css";
import axios from "axios";

interface BlogPageProps {
    NavBar?: boolean;
    Footer?: boolean;
}

interface BlogPost {
    date: string;
    content: string[];
}

const Blogposts:BlogPost[] = [
    {date: "07/11/2023", content: ["Gerne sind wir einer Anfrage unseres Premiumsponsors nachgekommen und haben am vergangenen Samstag im Rahmen des Siemens Campus-Festes \"Flagge gezeigt\".", "Mit der 25 m langen Fahrbahn, einer elektronischen Zeitmessung und unserem Messestand haben wir uns zwischen vielen anderen Attraktionen eingereiht und durften uns bis in die frühen Abendstunden über reges Interesse an den bis zu 80 km/h schnellen Automodellen freuen. Immer wieder gab es erstaunte Gesichter, wenn die Flitzer mit lautem Zischen die Rennstrecke in kaum mehr als einer Sekunde absolvierten.", "Außerdem nutzten wir die Gelegenheit und erklärten am Messestand den zahlreichen interessierten Besuchern die vielfältigen Herausforderungen des Wettbewerbs und knüpften den ein oder anderen nützlichen Kontakt.", "Parallel dazu arbeitet vor allem Timon an den Vorbereitungen für die ersten Testfahrten. An verschiedenen Prototypen wollen wir untersuchen, wie sich Faktoren wie Fahrzeuglänge, Abstand der Achsen, Material der Führungsösen und die Lage des Massenschwerpunkts auf die Fahrzeiten auswirken.", "Es grüßt Sie ganz "]},
    {date: "07/03/2023", content: ["um bei den World Finals glänzen zu können, arbeiten wir mit großem Eifer weiter. Unser Hauptfokus liegt momentan darauf, unser Auto an das internationale Regelwerk anzupassen, das immerhin 60 Seiten umfasst und vom nationalen Regelwerk erheblich abweicht. So müssen beispielsweise die Fahrzeuge in Anlehnung an die „große“ Formel 1 erstmals mit einem Halo und einem Helm ausgestattet sein, der den Kopf des Formel 1 Piloten darstellen soll. Alles in allem keine leichte Aufgabe für unsere Konstrukteurin Marleen, da jeder noch so kleine Verstoß gegen das Regelwerk kostbare Punkte kostet, die in der Endabrechnung wehtun können.", "Besonderes Highlight der Woche: Der Zentralwerkstatt des Departments Physik der FAU Erlangen ist es gelungen, an einer CNC-Fräse unseres Premium Partners Siemens einen allerersten Prototyp des neuen Autos aus dem vorgeschriebenen Polyurethan herzustellen. Ein erster Meilenstein und ein großes Dankeschön an Herrn Mauser!", "Parallel dazu laufen unsere Vorbereitungen für den kommenden Samstag, wenn wir unser Projekt mit Rennbahn und Messestand beim Siemens Familientag auf dem Siemens Campus Erlangen präsentieren wollen. Wir freuen uns, den Besuchern mehr über den Wettbewerb und unser Team erzählen zu dürfen."]},
]

const BlogPage:React.FC<BlogPageProps> = (Props):JSX.Element => {

    const [showolderPosts, setOlderPostsShown] = useState<boolean>();
    const [error, setErrorMessage] = useState<string>();
    const submitButtonRef = useRef<any>();
    const emailInputRef = useRef<any>();
    const checkBoxRef = useRef<any>();

    const checkSubmissionForValidity = ():boolean => {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const result = regexp.test(emailInputRef.current?.value??"")

        if (result && checkBoxRef.current?.checked) {
            submitButtonRef.current?.classList.remove("inactive")
            return true;
        }
        else {
            submitButtonRef.current?.classList.add("inactive")
            return false;
        }
    }

    const submitMail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const mail = emailInputRef.current?.value;
        if (!mail) return;

        axios.post(`https://recoilracingapi.finnkrause.com/signup/${mail}`).then(res => {
            if (res.data.error) {
                setErrorMessage(res.data.message);
            }
            else {
                setErrorMessage(undefined)
                localStorage.setItem("signedUp", "true");
                alert("Thank you for signing up to our weekly newsletter! You should receive regular emails from now on every Monday!")
                location.reload();
            }
        })
    }

    return <>
        {Props.NavBar && <NavBar position="inherit" active={{name: "Blog"}}></NavBar>}
        <SectionHeader header="Blog"></SectionHeader>

        {localStorage.getItem("signedUp") != "true" && <Content>
            <WhiteBackground>
                <h3>Sign up to our weekly newsletter</h3>

                <form onSubmit={submitMail}>
                    <input ref={emailInputRef} onChange={checkSubmissionForValidity} className="emailInput" type="text" placeholder="email"></input>
                    <div className="emailCheckboxContainer">
                        <input ref={checkBoxRef} onChange={checkSubmissionForValidity} className="newsletterCheckbox" type="checkbox"></input>
                        <p>I want to receive weekly updates about the current status of the project</p>
                    </div>
                    {error && <p className="errorMessage">{error}</p>}
                    <input ref={submitButtonRef} className="button inactive" type="submit" value="Sign up" ></input>
                    
                </form>

            </WhiteBackground>
        </Content>}
        
        <Content>
            <WhiteBackground translucent>
                <Blog date={Blogposts[0].date} content={Blogposts[0].content}></Blog>,
                {!showolderPosts && <h3 onClick={() => {
                    setOlderPostsShown(!showolderPosts)
                }} className="BlogMehrAnzeigen">view older posts</h3>}
                {showolderPosts && Blogposts.map((i:BlogPost, idx: number) => idx!=0 && <Blog date={i.date} content={i.content}></Blog>)}
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