interface ContentProps {
    children?: JSX.Element
}

const Content:React.FC<ContentProps> = (Props:ContentProps):JSX.Element => {
    return <div className="FlexCenter">
         {Props?.children}
    </div>
}

export default Content;