import Person from "../components/Person";
import SectionHeader from "../components/SectionHeader"
import "../style/TeamSection.css";

import finn from "../assets/Teamkarten/Finn WM.jpg";
import amelie from "../assets/Teamkarten/Amélie WM.jpg";
import benno from "../assets/Teamkarten/Benno WM.jpg";
import marleen from "../assets/Teamkarten/Marleen WM.jpg";
import caroline from "../assets/Teamkarten/Caro WM.jpg";
import timon from "../assets/Teamkarten/Timon WM.jpg";
import { useEffect, useRef, useState } from "react";

interface TeamSectionProps {
    onIntersectingChange?: (isIntersecting: boolean) => void;
}

function shuffleArray(array: {name: string, job: string, url: string, teamcard: any}[]) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const TeamSection:React.FC<TeamSectionProps> = (Props:TeamSectionProps):JSX.Element => {
    
    const ref = useRef<HTMLDivElement>(null);

    const persons = [
      {name: "Amélie Niessen", job: "Teammanagerin", url: "https://www.youtube.com/watch?v=8XwirPnx6FU", teamcard: amelie},
      {name: "Benno Wörand", job: "Entwicklung", url: "https://www.youtube.com/watch?v=wsBpT7bBCX4", teamcard: benno},
      {name: "Timon Schlenk", job: "Fertigung & Teambox", url: "https://www.youtube.com/watch?v=hlFNWaBeMzA", teamcard: timon},
      {name: "Marleen Stollberg", job: "Konstruktion", url: "https://www.youtube.com/watch?v=sy3KnsPS8xk", teamcard: marleen},
      {name: "Caroline Schalk", job: "Kommunikation und Marketing", url: "https://www.youtube.com/watch?v=TxY6JOwWc5I", teamcard: caroline},
      {name: "Finn Krause", job: "Social Media & Design", url: "https://www.youtube.com/watch?v=hTmcD6w7Mms", teamcard: finn}
    ]

    return <div ref={ref} className="TeamSectionWrapper">
        <SectionHeader header="We are Recoil Racing"/>

        <div className="PersonsWrapper">
            {shuffleArray(persons).map((i, idx) => {
              return <Person key={idx} name={i.name} job={i.job} learnMoreURL={i.url} teamcard={i.teamcard}></Person>
            })}
        </div>
    </div> 
}

export default TeamSection;