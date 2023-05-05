
interface NavBarItemProps {
    displayName: string;
    active?: boolean;
    callback?: (displayName: string) => void
}

const NavBarItem:React.FC<NavBarItemProps> = (Props:NavBarItemProps):JSX.Element => {
    return <button className={`NavBarItem${Props.active ? " active" : ""}`} onClick={() => {
            if (Props.callback) Props.callback(Props.displayName)
        }}>{Props.displayName}</button>
    
}

export default NavBarItem;