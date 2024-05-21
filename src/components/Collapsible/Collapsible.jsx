
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown
} from "@fortawesome/fontawesome-free-solid";


// eslint-disable-next-line react/prop-types
const Collapsible = ({ open, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>



            <button type="button" className="btn" onClick={handleFilterOpening}>
                {!isOpen ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                    <FontAwesomeIcon icon={faChevronUp} />
                )}
            </button>




            <div>{isOpen && <div className="p-3">{children}</div>}</div>
        </>
    );
}; export default Collapsible;