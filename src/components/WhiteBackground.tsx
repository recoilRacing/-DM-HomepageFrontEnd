import "../style/WhiteBackground.css";

interface WhiteBackgroundProps {
    className?: string;
    children: JSX.Element[] | JSX.Element;
}

const WhiteBackground:React.FC<WhiteBackgroundProps> = (Props):JSX.Element => {
    return <div className={`WhiteContainer ${Props.className}`}>
        {Props.children}
    </div>
}

export default WhiteBackground;