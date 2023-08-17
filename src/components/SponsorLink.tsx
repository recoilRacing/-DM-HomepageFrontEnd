import * as sponsors from "../SponsorLinks"
import {resizeTableType} from "../pages/PartnerSection";

interface Props {
    scale?: number;
    type: sponsors.Sponsors;
}

const getIcon = (type:sponsors.Sponsors):Array<string|undefined> => [sponsors.Images[type], sponsors.URLs[type]];

const SponsorLink:React.FC<Props> = (Props:Props):JSX.Element => {

    const [icon, url] = getIcon(Props.type);

    return <div  className="Sponsor" style={{aspectRatio: "auto", transform: (Props.scale ? `scale(${Props.scale})` : ""), backgroundImage: `url(${icon})`}}  onClick={() => url&&window.open(url)}></div>
}

export const getAllSponsorsAsElements = (except?: sponsors.Sponsors[], resizeTable?: resizeTableType):JSX.Element[] => {
    return sponsors.sponsorsArray.filter((element: sponsors.Sponsors) => {
            if (except == null) return true;
            return !(except.includes(element));
        }).map((i:any, idx: number) => {
            //@ts-expect-error
            return <SponsorLink type={i} key={idx} scale={(resizeTable != null && Object.keys(resizeTable).includes(i)) ? resizeTable[i] : undefined}></SponsorLink>
        })
}

export default SponsorLink;