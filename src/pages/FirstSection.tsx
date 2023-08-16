import { useEffect, useRef, useState } from "react";
import video from "../assets/CarTurning3.mp4";
import video2 from "../assets/CarTurning3.1.mp4";
import SocialMediaLink from "../components/SocialMediaLink";
import SectionHeader from "../components/SectionHeader"

interface FirstSectionProps {
    onIntersectingChange?: (isIntersecting: boolean) => void;
}

const FirstSection:React.FC<FirstSectionProps> = (Props:FirstSectionProps):JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    const [vidLoop, setvidLoop] = useState<boolean>(false);

    return <div ref={ref}>
            {!vidLoop && <video src={video} className='videoTag' playsInline autoPlay muted onEnded={() => {
                setvidLoop(true);
            }} >
            </video>}

            {vidLoop && <video src={video2} className='videoTag' loop autoPlay muted></video>}

            <div className="MainPageContent">

                <div className="MainPageContentLeft">
                    <SectionHeader header="RECOIL RACING" fadeIn />
                    {/* <div className="MainPageSocials">
                        <SocialMediaLink type="Instagram"></SocialMediaLink>
                        <SocialMediaLink type="YouTube"></SocialMediaLink>
                        <SocialMediaLink type="Facebook"></SocialMediaLink>
                        <SocialMediaLink type="Twitter"></SocialMediaLink>
                    </div> */}
                </div>

                <div className="MainPageContentRight"></div>
            </div>
    </div>
}

export default FirstSection;