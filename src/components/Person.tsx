interface PersonProps {
    name?: string;
    job?: string;
    teamcard?: string;
    learnMoreURL?: string;
}

const Person:React.FC<PersonProps> = (Props:PersonProps):JSX.Element => {
    return <div className="Person" onClick={() => window.open(Props.learnMoreURL)}>    
        <div className="PersonWrapper" style={{backgroundImage: `url("${Props.teamcard}")`}}>  
            <div>
                <div className="PersonHeader FlexCenter">
                    {/* <h1 className="PersonName">{Props.name}</h1> */}
                </div>

                <div className="PersonJobWrapper FlexCenter">
                    {/* <h1 className="PersonJob">{Props.job}</h1> */}
                </div>
            </div>
        </div>

        <div className="PersonLearnMoreWrapper FlexCenter">
            {Props.learnMoreURL && <button className="PersonLearnMore button" onClick={() => {
                window.open(Props.learnMoreURL)
            }}>
                Watch Introduction
            </button>} 
        </div>
    </div>
}

export default Person;