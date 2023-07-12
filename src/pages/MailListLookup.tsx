import { useEffect, useState } from "react";
import axios from "axios";

interface MailListLookupProps {

}

const MailListLookup:React.FC<MailListLookupProps> = (Props):JSX.Element => {
    const [mails, setData] = useState({});

    useEffect(() => {
        axios.get("https://recoilracingapi.finnkrause.com/mailList").then((res:any) => setData(res.data))
    }, [])

    return <div style={{margin: "20px"}}>
        <h1 style={{color: "white", userSelect:"none"}}>MailList</h1>
        {/* <button className="button" style={{marginBottom: "10px"}} onClick={() => {
             navigator.clipboard.writeText(Object.keys(mails).join("\n"));
        }}>Copy all</button> */}

        {Object.keys(mails).map(i => {
            const time = new Date(mails[i].at)
            return <div key={i} style={{display: "flex"}}>
                <p style={{color: "white", margin: 0, padding: 0, userSelect: "none"}}>{`${time.getDate()}.${time.getMonth()}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`}</p>
                <p style={{color: "white", margin: 0, padding: 0, marginLeft: "20px"}} key={i}>{i}</p>
            </div>
        })}
    </div>
}

export default MailListLookup;