import "./pricingcard.css";
import PropTypes from "prop-types";

export function PricingCard({priceData}) {

    return (
        <div className="flex flex-col justify-evenly items-center free-card">
            <h4 id="free">{priceData.name}</h4>
            <p className="text-base"><b className="text-xl">${priceData.cost}</b>/month</p>
            {
                priceData.features.map((feature, index) => {
                    return (
                        <p key={index} className="text-base">{feature}</p>
                    )
                })
            }
            <button className="Get-Started">Get Started</button>
            <div className="incl"><b className="text-xl">{priceData.xh}</b></div>
            <ul>
                {
                    priceData.also.map((feature1, index) => {
                        return (
                            <li key={index} className="flex flex-row justify-normal included">
                                <img className="mr-2" src={priceData.icons[index]} alt="icon svg"/>
                                <p className="text-sm">{feature1}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

PricingCard.propTypes = {
    priceData: PropTypes.object.isRequired,
}