import {FeatureBox} from "../iconbar/FeatureBox.jsx";
import "./landingfeature.css";

export function LandingFeature() {
    const iconsArray = [
        {
            alt: "link",
            url: "https://ik.imagekit.io/methuselah/Mini/icons/Link.svg?updatedAt=1710852154598",
            text: "Url shortening",
            description: "Instantly shorten urls without hassle. Each short url contains a unique identifier which prevents multiple urls being the same and allows for quick redirection"
        },
        {
            alt: "analytics",
            url: "https://ik.imagekit.io/methuselah/Mini/icons/Analytics.svg?updatedAt=1710852149724",
            text: "Analytics",
            description: "Track your urls. know your audience. We’ll provide you with valuable metrics, like the location of your users and how many times your url is accessed."
        },
        {
            alt: "security_shield",
            url: "https://ik.imagekit.io/methuselah/Mini/icons/Security%20Shield.svg?updatedAt=1710852148704",
            text: "Secured urls",
            description: "Shortened urls can be secured with an authorization layer if you want. This prevents unauthorized personnels from accessing the url and only people you specify or a certain demographic can access it"
        },
        {
            alt: "settings",
            url: "https://ik.imagekit.io/methuselah/Mini/icons/Settings.svg?updatedAt=1710852148070",
            text: "Custom short urls",
            description: "Create your own unique url with your own unique indentifier. You can also use your own domain instead of ours to make your url unique to your audience"
        },
    ]
    return (
        <section className="Section Features">
            <div className="corner-1">
                <FeatureBox iconbardetails={iconsArray}/>
                <FeatureBox iconbardetails={iconsArray}/>
            </div>
            <h1 className="Big-Red-Title">Features</h1>
            <div className="corner-1">
                <FeatureBox iconbardetails={iconsArray}/>
                <FeatureBox iconbardetails={iconsArray}/>
            </div>
            <p className="know-more">To know more visit <a href="/" id="know-more-link">features</a> page</p>
        </section>
    )
}