import "../style/NavBar.css"
import logo from "../assets/RecoilRacingTransparent.png"
import { useNavigate } from "react-router-dom";
import NavBarItem from "./NavBarItem"
import { useEffect, useState } from "react";
import { Section } from "../customInterfaces";

interface NavBarProps {
    position?: "fixed" | "inherit";
    active?: Section;
    delay?: number;
}

const NavBar:React.FC<NavBarProps> = (Props:NavBarProps):JSX.Element => {
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);

    const [Routes, setRoutes] = useState<Section[]>(
        [
            {name: "Home", subURL: "/home"},
            {name: "Team", subURL: "/team"},
            {name: "Car", subURL: "/car"},
            // {name: "Achievements", subURL: "/achievements"},
            {name: "Sponsors", subURL: "/partner"},
            {name: "Blog", subURL: "/blog"},
            {name: "Press", subURL: "/press"},
            {name: "Our school", subURL: "/school"},
            {name: "Sustainability", subURL: "/sustainability"},
            {name: "Contact", subURL: "/contact"}
        ]
    );

    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        function handleResize() {
                setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        const listener = window.addEventListener('resize', handleResize)

    }, [])

    return <nav className="FlexCenter NavBar" style={{position: Props.position || "fixed"}}>

            <div className="NavBarLeft">
                <img className="NavBarLogo" src={logo} onClick={() => navigate("/home")}></img>
            </div>
            
            {(dimensions.width >= 1250) && <div className="NavBarRight">
                <ul className="NavBarContent">
                    {Routes.map((i, idx) => <NavBarItem key={idx} active={i.name==Props.active?.name} displayName={i.name} callback={() => navigate(i.subURL || "/home")}></NavBarItem>)}
                </ul>
            </div>}

            {(dimensions.width < 1250) && <div className="NavBarRight noPadding">
            <svg onClick={() => setOpen(!open)} style={{margin: 10}} width="50px" height="50px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" fillRule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2H2a1 1 0 100 2h16zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2H2a1 1 0 100 2h16z"></path> </g></svg>
            
            {open && <div className="NavBarDropdown noPadding">
                <ul className="NavBarContent vertical">
                        {Routes.map((i, idx) => {
                            return <NavBarItem key={idx} active={i.name==Props.active?.name} displayName={i.name} callback={() => {
                                navigate(i.subURL ?? "/home")
                                setOpen(false)
                            }}></NavBarItem>
                        })}
                </ul>
            </div>}
        
        </div>}
        </nav>
}

export default NavBar;