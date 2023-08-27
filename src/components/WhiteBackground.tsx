import "../style/WhiteBackground.css";

interface WhiteBackgroundProps {
    className?: string;
    children?: any;
    translucent?: boolean;
    customColor?: string;
}

const WhiteBackground:React.FC<WhiteBackgroundProps> = (Props):JSX.Element => {
    return <div style={{backgroundColor: Props.customColor}} className={`WhiteContainer ${Props.className} ${Props.translucent && "translucent"}`}>
        {Props?.children}
    </div>
}

export default WhiteBackground;