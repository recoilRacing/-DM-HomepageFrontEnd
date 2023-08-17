import "../style/WhiteBackground.css";

interface WhiteBackgroundProps {
    className?: string;
    children?: any;
    translucent?: boolean;
}

const WhiteBackground:React.FC<WhiteBackgroundProps> = (Props):JSX.Element => {
    return <div className={`WhiteContainer ${Props.className} ${Props.translucent && "translucent"}`}>
        {Props?.children}
    </div>
}

export default WhiteBackground;