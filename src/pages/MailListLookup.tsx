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
        {Object.keys(mails).map(i => <p style={{color: "white", margin: 0, padding: 0}} key={i}>{i}</p>)}
    </div>
}

export default MailListLookup;