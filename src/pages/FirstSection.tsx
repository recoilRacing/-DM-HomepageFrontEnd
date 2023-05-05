import { useEffect, useRef, useState } from "react";
import video from "../assets/CarTurning.mp4";
import SocialMediaLink from "../components/SocialMediaLink";

interface FirstSectionProps {
    onIntersectingChange?: (isIntersecting: boolean) => void;
}

const FirstSection:React.FC<FirstSectionProps> = (Props:FirstSectionProps):JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //   const observer = new IntersectionObserver(
    //     ([entry]) => {
    //       Props.onIntersectingChange(entry.isIntersecting);
    //     },
    //     {
    //       root: null,
    //       rootMargin: "0px",
    //       threshold: 0.6,
    //     }
    //   );

    //   if (ref.current) {
    //     observer.observe(ref.current);
    //   }
    //   return () => {
    //     if (ref.current) {
    //       observer.unobserve(ref.current);
    //     }
    //   };
    // }, [ref]);
    
    return <div ref={ref}>
            <video className='videoTag' playsInline autoPlay muted>
                <source src={video}  type='video/mp4' />
            </video>

            <div className="MainPageContent">

                <div className="MainPageContentLeft">
                    <h1 className="MainPageTitle">
                        Recoil Raptor 
                    </h1>
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