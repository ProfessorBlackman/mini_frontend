import "./landingheader.css";
export function LandingHeader() {
    return (
        <section className="Section Header">
            <div className="Left-Div flex justify-evenly flex-col">
                <div className="flex flex-col justify-between headings">
                    <h1 className="Heading">Build stronger digital </h1>
                    <h1 className="Heading" id="red-heading">connections,</h1>
                </div>
                <div className="bodies flex flex-col justify-between">
                    <p className="Body-Text md:h-24 lg:h-32">
                        Improve engagement with your audience,<br/>
                        With a url service that cares for your every need,<br/>
                        Free yourself and focus on what matters most;
                    </p>
                    <u className="Body-Text" id="your-audience">your audience</u>
                </div>
                <div className="button-div flex justify-center">
                    <button className="Get-Started_Btn">Get Started for free</button>
                </div>
            </div>
            <div className="Right-Div">
                <img
                    src="https://ik.imagekit.io/methuselah/Mini/www-amico.svg?updatedAt=1710848498794"
                    className="Image"
                    alt="Welcome.gif"/>
            </div>
        </section>
    )
}