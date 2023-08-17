import "../style/SectionSUBHeader.css";


interface SectionSUBHeaderProps {
    header: string;
}

const SectionSUBHeader:React.FC<SectionSUBHeaderProps> = (Props):JSX.Element => {
    return <>
        <h2 className="SectionSUBHeader">{Props.header}</h2>
    </>
}

export default SectionSUBHeader;