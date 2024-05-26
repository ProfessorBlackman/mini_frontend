import {PricingCard} from "../PricingCard/PricingCard.jsx";
import PropTypes from "prop-types";
import "./pricingcardwrapper.css";

export function PricingCardWrapper({pricingInfo}) {
    return (
        <div>
            {pricingInfo.isPopular ?
                <div className="popular">
                    <h3 className="text-3xl text-center mt-3">MOST POPULAR</h3>
                    <PricingCard priceData={pricingInfo}/>
                </div>
                :
                <PricingCard priceData={pricingInfo}/>
            }
        </div>
    )
}

PricingCardWrapper.propTypes = {
    pricingInfo: PropTypes.object.isRequired,
}