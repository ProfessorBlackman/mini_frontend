import {FeatureBox} from "../iconbar/FeatureBox.jsx";
import "./landingfeature.css";

export function LandingFeature() {
    const iconsArray = [
        {
            icon: {
                alt: "link",
                url: "https://ik.imagekit.io/methuselah/Mini/icons/Link.svg?updatedAt=1710852154598"
            },
            text: "Url shortening",
            description: "Instantly shorten urls without hassle. Each short url contains a unique identifier which prevents multiple urls being the same and allows for quick redirection"
        },
        {
            icon: {
                alt: "analytics",
                url: "https://ik.imagekit.io/methuselah/Mini/icons/Analytics.svg?updatedAt=1710852149724"
            },
            text: "Analytics",
            description: "Track your urls. know your audience. We’ll provide you with valuable metrics, like the location of your users and how many times your url is accessed."
        },
        {
            icon: {
                alt: "security_shield",
                url: "https://ik.imagekit.io/methuselah/Mini/icons/Security%20Shield.svg?updatedAt=1710852148704"
            },
            text: "Secured urls",
            description: "Shortened urls can be secured with an authorization layer if you want. This prevents unauthorized personnels from accessing the url and only people you specify or a certain demographic can access it"
        },
        {
            icon: {
                alt: "settings",
                url: "https://ik.imagekit.io/methuselah/Mini/icons/Settings.svg?updatedAt=1710852148070"
            },
            text: "Custom short urls",
            description: "Create your own unique url with your own unique indentifier. You can also use your own domain instead of ours to make your url unique to your audience"
        },
    ]
    return (
        <section className="Section Features">
            <h1 className="Big-Red-Title features1">Features</h1>
            <div className="corner-1">
                <FeatureBox iconbardetails={iconsArray[0]}/>
                <FeatureBox iconbardetails={iconsArray[1]}/>
            </div>
            <h1 className="Big-Red-Title features2">Features</h1>
            <div className="corner-1">
                <FeatureBox iconbardetails={iconsArray[2]}/>
                <FeatureBox iconbardetails={iconsArray[3]}/>
            </div>
            <p className="know-more">To know more visit <a href="/" id="know-more-link">features</a> page</p>
        </section>
    )
}