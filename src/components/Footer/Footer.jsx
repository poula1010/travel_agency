import "./Footer.css"
import LogoBlack from "../../assets/ugb.png"
function Footer() {

    return (
        <div className="footer-container d-flex flex-column mt-5">
            <div>
                <img className="footer-logo" src={LogoBlack} />
            </div>
            <div className="d-flex mt-3 gap-3 justify-content-center">
                <div className="footer-link">
                    DESTINATIONS
                </div>
                <div className="footer-link">
                    MULTI-COUNTRY TOURS
                </div >
                <div className="footer-link">
                    TAILOR A TOUR
                </div>
                <div className="footer-link">
                    BLOG
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-center">
                All rights belong to Travel Today Agency 2024.
            </div>
        </div>
    )
}

export default Footer;