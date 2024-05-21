import "./MainPage.css"
import mainImage from "../../assets/Main.jpg"
import { useState } from "react";
import CheckBoxOption from "../CheckBoxOption/CheckBoxOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown
} from "@fortawesome/fontawesome-free-solid";
function MainPage() {
    const destinations = ["Egypt", "Dubai", "Morocco", "African Safari", "Saudi Arabia", "Jordan", "Oman", "Turkey"];
    const tripTypes = ["Any", "Packages", "Cruises", "Excursions", "Shore Excursions"];
    const [isTripTypeOpen, setTripTypeOpen] = useState(true);
    const [isDestinationOpen, setDestinationIsOpen] = useState(true);
    const handleDestinationOpening = () => {
        setDestinationIsOpen((prev) => !prev);
    };
    const handleTripTypeOpening = () => {
        setTripTypeOpen((prev) => !prev);
    };
    const destinationCheckboxes = destinations.map(destination => {
        return (<CheckBoxOption key={destination} value={destination} />)
    })

    const tripTypeCheckboxes = tripTypes.map(tripType => {
        return (<CheckBoxOption key={tripType} value={tripType} />)
    })
    return (
        <div className="d-flex main-container mt-6">
            {/* First Part */}
            <div className="row justify-content-center align-items-center mb-5">
                <div className=" main-image" >
                    <img src={mainImage} style={{ height: "100%", width: "100%", borderRadius: "8%" }} />

                </div>
                <div className="col-lg align-text-left d-flex flex-column justify-content-center pt-6">
                    <h1>Crusies & Tours In Egypt</h1>
                    <div className="">Get a taste of the past on our trips to Egypt, where you&apos;ll take a walk
                        through the footsteps of the pharoahs through ancient temples and monuments. Whilte on your trip to Egypt,
                        spend your days in Cairo vising the Great Pyramids of Giza and the Sphinx, and then sail away on a luxury Nile cruise
                        to Luxor and Aswan. </div>
                </div>
            </div>
            {/* Filter + content     */}
            <div className="row">

                <div className="col-2 d-flex pe-0 flex-column justify-content-start align-items-start">
                    <div className="font-600">
                        Destinations
                        <button type="button" className="btn" onClick={handleDestinationOpening}>
                            {!isDestinationOpen ? (
                                <FontAwesomeIcon icon={faChevronDown} />
                            ) : (
                                <FontAwesomeIcon icon={faChevronUp} />
                            )}
                        </button>
                    </div>
                    {isDestinationOpen && destinationCheckboxes}
                    <hr style={{ height: "10px", width: "70%" }} />
                    <div className="font-600">
                        Trip Type
                        <button type="button" className="btn" onClick={handleTripTypeOpening}>
                            {!isDestinationOpen ? (
                                <FontAwesomeIcon icon={faChevronDown} />
                            ) : (
                                <FontAwesomeIcon icon={faChevronUp} />
                            )}
                        </button>
                    </div>
                    {isTripTypeOpen && tripTypeCheckboxes}
                    <hr style={{
                        height: "10px", width: "100%", margin: "0.25rem 0"
                    }} />
                    <div className="font-600">Price Range</div>
                </div>
                <div className="col-10">Trips</div>
            </div>
        </div >
    )
}

export default MainPage;