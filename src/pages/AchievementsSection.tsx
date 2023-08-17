import "../style/AchievementsSection.css";
import SectionHeader from  "../components/SectionHeader";



interface AchievementsSectionProps {

}

const AchievementsSection:React.FC<AchievementsSectionProps> = (Props):JSX.Element => {
    return <div id="AchievementsSection">
        <SectionHeader header="Achievements"/>
        
        <div className="AchievementsContainer FlexCenter">
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
            </table>
        </div>

    </div>
}

export default AchievementsSection;