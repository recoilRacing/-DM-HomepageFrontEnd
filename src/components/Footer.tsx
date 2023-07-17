import "../style/footer.css";
import SocialMediaLink from "./SocialMediaLink";

const Footer:React.FC = (Props):JSX.Element => {
    return <footer id="footer">
        <div className="FooterTop">
            <div id="copyright">
                ©RecoilRacing 2023
            </div>
            <div id="socials">
                <SocialMediaLink type="Facebook"></SocialMediaLink>
                <SocialMediaLink type="LinkedIn"></SocialMediaLink>
                <SocialMediaLink type="Instagram"></SocialMediaLink>
                <SocialMediaLink type="Twitter"></SocialMediaLink>
                <SocialMediaLink type="YouTube"></SocialMediaLink>
            </div>
        </div>
        <div id="privacy" className="FooterBottom">
            <a href="impressum">Impressum</a>
            <a href="privacy">Datenschutz</a>
        </div>
    </footer>
}

export default Footer;