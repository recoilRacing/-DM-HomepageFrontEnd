import "../style/SectionHeader.css";


interface SectionHeaderProps {
    header: string;
    fadeIn?: boolean;
}

const SectionHeader:React.FC<SectionHeaderProps> = (Props):JSX.Element => {
    return <>
        <div className="SectionHeader FlexCenter">
            <h1 className={`Header${Props.fadeIn ? " fade" : ""}`}>{Props.header}</h1>
        </div>
    </>
}

export default SectionHeader;