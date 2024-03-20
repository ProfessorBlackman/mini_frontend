import {useState} from "react";
import "./landingfaqs.css";

export function LandingFAQS() {
    const faqs = [
        {
            question: "What is a url shortener?", answer: "What are you doing here?\n" +
                "Seriously, if you don’t know what a url shortener is then what are you doing here.\n" +
                "Besides this is a question for google, don’t come and bother me with this nonsense. Mtcheew",
            id:"2ff36d73-78c3-4416-ad55-30bee75998ca"
        },
        {
            question: "Benefits of a url shortener?", answer: "What are you doing here?\n" +
                "Seriously, if you don’t know what a url shortener is then what are you doing here.\n" +
                "Besides this is a question for google, don’t come and bother me with this nonsense. Mtcheew",
            id:"e9194bd1-0f7a-44ae-b37c-3b0851babba7"
        },
        {
            question: "Benefits of a url shortener?", answer: "What are you doing here?\n" +
                "Seriously, if you don’t know what a url shortener is then what are you doing here.\n" +
                "Besides this is a question for google, don’t come and bother me with this nonsense. Mtcheew",
            id:"96dd898a-3d64-495a-b20e-d35a5e2d583a"
        },
        {
            question: "Why choose Mini?", answer: "ARE YOU KIDDING ME?\n" +
                "Seriously, haven’t you checked our features page?\n" +
                "If not us then who? Bit.ly? Jesus Christ, these guys still haven’t discovered byte, they are still at bit. Such a backwards service, is that what you want huh?",
            id:"6b7f3019-8135-4e0f-afdb-68949f8ee7e1"
        }
    ]

    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };

    return (
        <section className="Section FAQS">
            <h1 className="Big-Red-Title">Frequently asked questions</h1>
            {faqs.map((item, ) => (
                <div key={item.id} className="accordion-item">
                    <div className="faq-title" onClick={() => handleClick(item.id)}>
                        <p className="accordion-item-header sign">{openIndex === item.id ? "-" : "+"}</p>
                        <p className={`accordion-item-header ${openIndex === item.id ? 'open' : ''}`}>
                            {item.question}
                        </p>
                    </div>
                    {openIndex === item.id && (
                        <div className="accordion-item-content">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </section>
    )
}