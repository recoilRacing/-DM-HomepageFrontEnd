import TH from "../assets/Sponsors/TH-Nürnberg.png"
import CHING from "../assets/Sponsors/CHING.png"
import FAU from "../assets/Sponsors/FAU.png"
import Fraunhofer from "../assets/Sponsors/Fraunhofer.jpg"
import Puma from "../assets/Sponsors/PumaTransparentBackground.png"
import Siemens from "../assets/Sponsors/Siemens.png"
import Myonic from "../assets/Sponsors/Myonic.png"
import Print4You from "../assets/Sponsors/print4you2.jpg"
import Weineck from "../assets/Sponsors/weineck.jpg"

import { THURL, CHINGURL, FAUURL, FraunhoferURL, MyonicURL, WeineckURL, PumaURL, SiemensURL, Print4YouURL } from "../Links"

type Sponsors = "TH" | "CHING" | "FAU" | "Fraunhofer" | "Puma" | "Siemens" | "Weineck" | "Print4You" | "Myonic";

interface Props {
    height?: number;
    width?: number;
    type: Sponsors;
}

function getIcon(type:Sponsors):Array<string|undefined> {
    switch (type){
        case "TH":
            return [TH, THURL];
        case "CHING":
            return [CHING, CHINGURL];
        case "FAU":
            return [FAU, FAUURL];
        case "Fraunhofer":
            return [Fraunhofer, FraunhoferURL];
        case "Puma":
            return [Puma, PumaURL];
        case "Siemens":
            return [Siemens, SiemensURL];
        case "Weineck":
            return [Weineck, WeineckURL];
        case "Print4You":
            return [Print4You, Print4YouURL];
        case "Myonic":
            return [Myonic, MyonicURL];
    }
}

const SocialMediaLink:React.FC<Props> = (Props:Props):JSX.Element => {

    const [icon, url] = getIcon(Props.type);

    return <img loading="lazy" className="Sponsor" height={Props.height+"px" || "25px"} width={Props.width+"px" || undefined} style={{aspectRatio: "auto"}} src={icon} onClick={() => url&&window.open(url)}></img>
}

export default SocialMediaLink;