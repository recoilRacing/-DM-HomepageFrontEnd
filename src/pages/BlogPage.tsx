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
    // {date: "", content: [""]},
    {date: "2023/09/16", content: ["Sehr geehrte Damen und Herren, liebe Partner!", "Die letzten Tage in Singapur hatten wir uns ehrlich gesagt etwas anders vorgestellt: Statt Sightseeing in \"Gardens by the bay\", einem Cocktail auf dem Dach des \"Marina Bay Sands\" oder etwas Ausspannen am Pool jagt nun ein Termin den nächsten:", "Händeschütteln im Paddock (Fahrerlager des Marina Bay Street Circuits), diverse Fotoshootings und Interviews im Live TV (Sky UK) sind scheinbar das Los eines frisch gebackenen Weltmeisters ;-)", "Heute sind wir gegen 11.00 Uhr CET live zu Gast bei Sky Deutschland und dürfen dem Moderatoren Team rund um Ex-F1-Piloten Timo Glock von unserem Projekt berichten. Nach einem Abendessen im  \"Banana Leaf Apolo\" in Little India, in dem bereits 2015 das MTG Team „Vast Velocity“ seine Erfolge feierte, geht es auf die Tribüne zum Qualifying für das Rennen am morgigen Sonntag."]},
    {date: "2023/09/14", content: ["Sehr geehrte Damen und Herren, liebe Partner!", "Wir sind Weltmeister!", "Im November 2022 schickten 29.000 Schulen in 58 Ländern rund um den Globus mehr als 1 Million Schüler*innen ins Rennen um am größten Technologie-Wettbewerb „F1 in schools“ teilzunehmen. Alle einte ein Ziel: Den Titel des „World Champions“ nach Hause zu holen! Gestern Abend kam es dann zum großen Showdown im Convention Centre auf Sentosa Island. In einer spektakulären Award Gala mit den rund 500 Teilnehmern und zahlreichen Gästen aus dem Formel 1 Zirkus wurden die Sonderpreise und Platzierungen der World Finals 2023 verkündet. Nachdem wir zwei der prestigeträchtigsten Awards für „Best verbal Presentation“ und „Research and Development“ einheimsen konnten, stieg die Spannung ins Unermessliche.", "Die englische Moderatorenlegende David Croft verlas die Plätze 3 (Nightingale/England) und 2 (Propulsion/Australien), dann folgten die magischen Worte: ", "„And the world champions for 2023 - they are . . . Recoil Racing“"]},
    {date: "2023/09/13", content: ["Sehr geehrte Damen und Herren, liebe Partner!", "Am gestrigen dritten Wettkampftag ist uns etwas gelungen, was noch kein MTG-F1-Team vor uns geschafft hat: Trotz einer Strafzeit von 0,1 Sekunden (unser Heckspoiler ist 0,7 mm zu schmal) konnten wir in den ersten Knockout-Rennen die Teams aus Australien, Irland und Deutschland aus dem Rennen werfen und bis unter die letzten acht Team vorrücken. In wenigen Stunden sehen wir uns im Viertelfinale dem starken englischen Konkurrenten gegenüber, der ohne Strafzeit leicht favorisiert ist.", "Direkt im Anschluss an die Knockouts wird es dann Ernst: Wir fiebern der Award-Gala entgegen in deren Verlauf die Sonderpreise vergeben werden und der neue Weltmeister gekürt wird.", "Ein aller letztes Mal: Keep your fingers crossed!"]},
    {date: "2023/09/12", content: ["Sehr geehrte Damen und Herren, liebe Partner!", "Die ersten beiden Wettkampftage liegen hinter uns und wir blicken angestrengt aber zufrieden zurück. Unsere vier Interviews zu den drei Portfolios und unserem Messestand liefen erfolgreich. Wir konnten die Judges überzeugen, dass wir unsere Themen exzellent beherrschen und auch tiefergehende Fragen kompetent beantworten.", "Heute Mittag durften wir eine achtköpfige Delegation unseres Gold Partners Schaeffler AG an unserem Messestand begrüßen und näher mit dem Wettbewerb vertraut machen. Nach einem gemeinsamen Foto (siehe oben) wurden wir für Donnerstag zu einem Gegenbesuch in die Geschäftsräume der Niederlassung Singapur eingeladen. Ab 14.30 Uhr Ortszeit starten heute die Knockout Rennen, für die sich die schnellsten 48 Fahrzeuge qualifiziert haben.", "Keep your fingers crossed!"]},
    {date: "2023/09/11", content: ["Sehr geehrte Damen und Herren, liebe Partner!","Die World Finals 2023 in Singapur haben begonnen!" ,"Die World Finals 2023 in Singapur haben begonnen! Nach einer spektakulären Opening-Ceremony im Convention Center Singapur im \"World largest Ballroom\" haben wir den ersten Wettkampftag erfolgreich hinter uns gebracht - und der hatte es in sich: Unser Auto liegt mit nur 0,022 s Rückstand nach vier Fahrten auf einem sehr guten 10. Platz. Auch die Verbal Presentation ist uns richtig gut gelungen: Das viele Training hat sich ausgezahlt! Nach einer kurzen Mittagspause folgte das Enterprise Judging, bei dem wir intensiv zu unserem Enterprise Portfolio befragt wurden. Auch hier konnten wir alle Detailfragen zu Marketingkonzept und Businessplan kompetent beantworten. Um 20.00 Uhr kehrten wir glücklich aber erschöpft in unser Hotel zurück um uns kurz im Pool zu erfrischen. Nach dem Abendessen gingen wir wieder an die Arbeit, um uns auf die noch anstehenden Interviews zu \"Design and Engineering\" und \"Project Management\" vorzubereiten.", "Keep your fingers crossed!"]},
    {date: "2023/09/04", content: ["Zunächst möchten wir uns bei Ihnen entschuldigen, dass wir so lange nichts von uns haben hören lassen. Aber die letzten Wochen verlangten uns einiges ab, denn am vergangenen Freitag war bereits die erste wichtige Hürde zu nehmen. Spätestens um Mitternacht mussten die drei übersetzten Portfolios, sämtliche technische Zeichnungen und alle relevanten CAD Daten hochgeladen sein, damit die Jury in Singapur vorab ihre Arbeit aufnehmen kann. Um 21.30 Uhr war es dann tatsächlich geschafft: Alle von uns geforderten Dateien konnten erfolgreich in der dafür vorgesehenen Dropbox abgelegt werden.", "Bereits am Mittwoch hatten wir die Gelegenheit, erstmals unsere englischsprachige Präsentation vorzutragen. Nach einem leckeren Mittagessen und einer kurzen Einführung durch unsere Lehrer Herrn Fischer und Herrn Sauer präsentierten wir beim Rotary Club Erlangen im Bayerischen Hof den 10-minütigen Vortrag, der auch Bestandteil des Wettbewerbs sein wird. Einige wertvolle Tipps nahmen wir gerne mit auf den Heimweg und werden sie in unsere Präsentation einbauen. ", "Abschließend möchten wir uns ganz besonders bei Herrn Bernd Peetz aus der Werkstatt des Departments für Angewandte Physik bedanken, der uns auf den allerletzten Drücker Frontspoiler auf dem nigelnagelneuen Harzdrucker gefertigt hat."]},
    {date: "2023/08/14", content: ["Zuallererst möchten wir uns an dieser Stelle ganz, ganz herzlich bei zwei Menschen bedanken, die in der zurückliegenden Woche unglaublich viele Arbeitsstunden in unser Auto investiert haben. Herr Mauser aus der Zentralwerkstatt des Departments Physik konnte mit seiner ganzen Erfahrung die drei finalen Prototypen aus dem ungewohnten aber vorgeschriebenen Werkstoff Polyurethan auf der CNC Fräse fertigstellen. Gleich im Anschluss übernahm unser MTG Laborant Herr Brunner als leidenschaftlicher Modellbauer die undankbare Aufgabe, in unendlicher Fleißarbeit die rauen Oberflächen der Rohlinge immer wieder zu spachteln und zu schleifen und so zu lackieren, dass wir uns auf das zehntel Gramm genau an das perfekte Gesamtgewicht herantasten konnten! Ohne die beiden wäre eine rechtzeitige Fertigstellung unserer Wettkampfautos vollkommen undenkbar gewesen! Nochmal ein ganz großes Dankeschön!", "Parallel dazu arbeiten wir konzentriert an den drei Portfolios, in denen wir unser Projekt in den drei Kategorien Project Management, Enterprise und Engineering auf insgesamt über 30 DIN A3 Seiten qualitativ hochwertig und anschaulich dokumentiert zu Papier bringen müssen. Die Zeit drängt, da die Portfolios noch übersetzt und in digitaler Form bereits am 01.09.2023 hochgeladen werden müssen, damit die Juroren in Singapur vorab ihre Arbeit beginnen können. Es gibt also weiterhin viel zu tun!"]},
    {date: "2023/08/07", content: ["Sehr geehrte Damen und Herren, liebe Partner, diese Woche heißt es kräftig Daumen drücken! Nachdem übers Wochenende der jüngste Prototyp noch einmal gründlichst vermessen wurde und nur noch wenige Kleinigkeiten verändert werden müssen, um das Regelwerk wirklich bis ins Detail zu erfüllen, hoffen wir sehr, in den nächsten Tagen das erste fertige Chassis unseres Wettkampfautos in Händen halten zu können. Mit etwas Glück sollten auch die Achsführungen und verschiedene Spoilertypen mit der Post eintreffen, sodass wir mit den Testfahrten beginnen können! ", "Gegen Ende der Woche hoffen wir auf einen Termin an der Technischen Hochschule Nürnberg. Dort möchten wir unter fachmännischer Anleitung durch Herrn Prof. Schmid und Herrn Ganser unser Auto in der 3-Komponenten-Windkanal-Waage auf Luftwiderstand, Auf- und Abtrieb und Kippmomente hin untersuchen. Mit Hilfe der Laser-Doppler-Anemometrie lässt sich zudem die Geschwindigkeit der umströmenden Luft ermitteln.", "Hier wird sich hoffentlich die von uns entwickelte magnetische Spoilerbefestigung bezahlt machen, wenn wir durch einfaches Umstecken verschiedene Frontflügel auf ihr Zusammenspiel mit dem Chassis hin untersuchen können.", "Wir sind sehr gespannt, ob die Ergebnisse mit den theoretischen Vorhersagen, die wir mit der aufwendigen Simulationssoftware OpenFOAM gewonnen haben, übereinstimmen!?"]},
    {date: "2023/07/31", content: ["Seit einigen Tagen beschäftigen wir uns mit einem weiteren elementaren Baustein des Wettbewerbs, der sog. Teambox. Dabei handelt es sich um einen Messestand, den jedes Team am zweiten Tag der Wettbewerbe im „World largest Ballroom“ im Convention Center Sentosa aufbauen muss. Selbstverständlich geht es auch hier um Punkte, denn für den Aufbau stehen genau 120 min zur Verfügung!", "Aus Gründen der Nachhaltigkeit achten wir sorgfältig darauf, das komplette Innenleben unseres Messestandes sinnvoll wiederverwenden zu können bzw. auf gebrauchte Ausrüstung zurückzugreifen. Kernstück soll ein Ultranahdistanzbeamer werden, mit dem sich Besucher auf Knopfdruck Videos und Erläuterungen zu allen Aspekten unserer Fahrzeugentwicklung und Vermarktung anzeigen lassen können. Nach dem Wettbewerb wird der Beamer im täglichen Schulbetrieb des MTG Verwendung finden.  Im Gegensatz zu den Vorjahren darf der Messestand außerdem nicht mehr separat angeliefert werden, sondern muss vollständig im Koffer bzw. als Sondergepäck mit in unserem Flugzeug transportiert werden. Auch dadurch wird eine ausufernde Materialschlacht bewusst verhindert."]},
    {date: "2023/07/24", content: ["Wir haben Gewichtsprobleme! Das vorgeschriebene Mindestgewicht des Rennautos beträgt 50 g und ist mit Abstand der wichtigste Parameter, den es in Sachen Fahrzeit zu erfüllen gilt. Leider haben wir uns lange sehr schwer getan, im Rahmen des Regelwerks an dieses Gewicht heranzukommen. Schließlich wollen wir im Wettkampf maximal ein hundertstel Gramm darüber liegen!", "Während Herr Peetz in der Werkstatt der Angewandten Physik versucht, leichtere Räder und Achsführungen herzustellen, hat uns Herr Mauser in der Zentralwerkstatt des Departments Physik einen zweiten Prototyp aus Marleens Feder gefräst, der auf der Unterseite über mehrere Hohlräume verfügt. Parallel dazu tüftelt unser MTG Laborant Herr Brunner an einer gewichtsparenden aber hochwertigen Lackierung.", "Ein Durchbruch gelang dann am Freitagnachmittag, als wir am Süddeutschen Kunststoffzentrum in Würzburg erstmals die verschiedenen Anbauteile wie z. B. Spoiler in Empfang nehmen durften. Die dort durch selektives Lasersintern hergestellten Teile besitzen eine extrem hohe Detailgenauigkeit und erweisen sich als merklich leichter als zunächst von uns angenommen. Ein großer Schritt in die richtige Richtung!"]},
    {date: "2023/07/17", content: ["Nachdem in den letzten Wochen die Entwicklung eines neuen Autos fast unsere gesamte Aufmerksamkeit auf sich gezogen hat, wenden sich nun zumindest einige Teammitglieder der Arbeit an den sog. Portfolios zu. Dabei handelt es sich um drei DIN A3 Hochglanzbroschüren mit einem Umfang von jeweils 10 Seiten, in denen wir unsere Arbeit in den Bereichen Projektmanagement, Enterprise und Engineering gut nachvollziehbar, anschaulich illustriert und evident darstellen müssen. Ein enorm wichtiger Bestandteil des Wettbewerbs, denn fast 40 % der maximal zu erreichenden Punkte werden hier vergeben.", "Teamchefin Amélie und Marketing Managerin Caro konzentrieren sich momentan auf das Enterprise Portfolio, das eine schlüssige Social Media Strategie, Aspekte der Nachhaltigkeit, Marketing-Instrumente und Aktivitäten aufzeigen soll, die unseren Partnern ein angemessenes Return on Invest bieten. Keine einfache Aufgabe, da wir alle Inhalte durch Graphiken und Fotos untermauern möchten, die einzelnen Artikel ansprechend gesetzt und ins Englische übersetzt werden müssen. Die Zeit drängt!"]},
    {date: "2023/07/10", content: ["Gerne sind wir einer Anfrage unseres Premiumsponsors nachgekommen und haben am vergangenen Samstag im Rahmen des Siemens Campus-Festes \"Flagge gezeigt\".", "Mit der 25 m langen Fahrbahn, einer elektronischen Zeitmessung und unserem Messestand haben wir uns zwischen vielen anderen Attraktionen eingereiht und durften uns bis in die frühen Abendstunden über reges Interesse an den bis zu 80 km/h schnellen Automodellen freuen. Immer wieder gab es erstaunte Gesichter, wenn die Flitzer mit lautem Zischen die Rennstrecke in kaum mehr als einer Sekunde absolvierten.", "Außerdem nutzten wir die Gelegenheit und erklärten am Messestand den zahlreichen interessierten Besuchern die vielfältigen Herausforderungen des Wettbewerbs und knüpften den ein oder anderen nützlichen Kontakt.", "Parallel dazu arbeitet vor allem Timon an den Vorbereitungen für die ersten Testfahrten. An verschiedenen Prototypen wollen wir untersuchen, wie sich Faktoren wie Fahrzeuglänge, Abstand der Achsen, Material der Führungsösen und die Lage des Massenschwerpunkts auf die Fahrzeiten auswirken."]},
    {date: "2023/07/03", content: ["um bei den World Finals glänzen zu können, arbeiten wir mit großem Eifer weiter. Unser Hauptfokus liegt momentan darauf, unser Auto an das internationale Regelwerk anzupassen, das immerhin 60 Seiten umfasst und vom nationalen Regelwerk erheblich abweicht. So müssen beispielsweise die Fahrzeuge in Anlehnung an die „große“ Formel 1 erstmals mit einem Halo und einem Helm ausgestattet sein, der den Kopf des Formel 1 Piloten darstellen soll. Alles in allem keine leichte Aufgabe für unsere Konstrukteurin Marleen, da jeder noch so kleine Verstoß gegen das Regelwerk kostbare Punkte kostet, die in der Endabrechnung wehtun können.", "Besonderes Highlight der Woche: Der Zentralwerkstatt des Departments Physik der FAU Erlangen ist es gelungen, an einer CNC-Fräse unseres Premium Partners Siemens einen allerersten Prototyp des neuen Autos aus dem vorgeschriebenen Polyurethan herzustellen. Ein erster Meilenstein und ein großes Dankeschön an Herrn Mauser!", "Parallel dazu laufen unsere Vorbereitungen für den kommenden Samstag, wenn wir unser Projekt mit Rennbahn und Messestand beim Siemens Familientag auf dem Siemens Campus Erlangen präsentieren wollen. Wir freuen uns, den Besuchern mehr über den Wettbewerb und unser Team erzählen zu dürfen."]},
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