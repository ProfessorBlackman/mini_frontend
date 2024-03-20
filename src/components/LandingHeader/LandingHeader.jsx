import "./landingsection.css";
export function LandingHeader() {
    return (
        <section className="Section Header">
            <div className="Left-Div">
                <h1 className="Heading">Build stronger digital </h1>
                <h1 className="Heading" id="red-heading">connections,</h1>
                <p className="Body-Text">
                    Improve engagement with your audience,<br/>
                    With a url service that cares for your every need,<br/>
                    Free yourself and focus on what matters most;
                </p>
                <p className="Body-Text" id="your-audience">your audience</p>
                <div>
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