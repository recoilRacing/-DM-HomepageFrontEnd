import InstaIcon from "../assets/Instagram.png";
import YouTubeIcon from "../assets/YouTube.png";
import TwitterIcon from "../assets/Twitter.png";
import FacebookIcon from "../assets/Facebook.png";
import LinkedInIcon from "../assets/LinkedIn.png";
import { YouTubeChannelURL } from "../Links";
import { InstaURL } from "../Links";
import { FacebookURL } from "../Links";
import { TwitterlURL } from "../Links";
import { LinkedInURL } from "../Links";

type SocialMediaKanäle = "YouTube" | "Facebook" | "Instagram" | "Twitter" |"LinkedIn";

interface Props {
    height?: number;
    width?: number;
    type: SocialMediaKanäle;
}

function getIcon(type:SocialMediaKanäle):Array<string> {
    switch (type) {
        case "YouTube":
            return [YouTubeIcon, YouTubeChannelURL];
        case "Facebook":
            return [FacebookIcon, FacebookURL];
        case "Twitter":
            return [TwitterIcon, TwitterlURL];
        case "Instagram":
            return [InstaIcon, InstaURL];
        case "LinkedIn":
            return [LinkedInIcon, LinkedInURL];
    }
}

const SocialMediaLink:React.FC<Props> = (Props:Props):JSX.Element => {

    const [icon, url] = getIcon(Props.type);

    return <img loading="lazy" height={Props.height || "25px"} width={Props.width || "25px"} src={icon} onClick={() => window.open(url)}></img>
}

export default SocialMediaLink;