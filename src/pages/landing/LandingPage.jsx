import "./LandingPage.css";
import {LandingHeader} from "../../components/LandingHeader/LandingHeader.jsx";
import {LandingFeature} from "../../components/landingfeature/LandingFeature.jsx";
import {LandingFAQS} from "../../components/landingfaqs/LandingFAQS.jsx";

export default function LandingPage() {


    return (
        <main className="Landing-Container">
            <LandingHeader />
            <LandingFeature />
            <LandingFAQS />
        </main>
    );
}

