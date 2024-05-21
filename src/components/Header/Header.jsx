import { useState } from "react";
import "./Header.css"
import UGLogo from '../../assets/ugw.png'
function Header() {
    const [currency, setCurrency] = useState("$USD")
    function handleCurrencyChange(event) {
        setCurrency(event.target.value);
    }
    return (
        <div className="header-container mb-5">
            <div className="d-flex align-items-center justify-content-between">
                <div className="font-small">Egypt&apos;s Top Travel Agency since 1990</div>
                <div className="currency-select-container">
                    <select onChange={handleCurrencyChange} className="form-select font-small" aria-label="Select currency" name="currency" id="curreny-select">
                        <option value="USD">USD ($)</option>
                        <option value="Euro">Euro (€)</option>
                        <option value="EGP">EGP (£)</option>
                    </select>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between mt-3">
                <div className=" d-flex justify-content-start align-items-center">
                    <img src={UGLogo} className="logo me-3" />
                    <form >
                        <input className="search-input" type="email" placeholder="Search your next trip" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </form>
                </div>
                <div className="d-flex">
                    <div className="header-option">
                        DESTINATIONS
                    </div>
                    <div className="header-option">
                        MULTI-COUNTRY TOURS
                    </div>
                    <div className="header-option">
                        TAILOR A TOUR
                    </div>
                    <div className="header-option">
                        ABOUT US
                    </div>
                    <div className="header-option">
                        CONTACT US
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;