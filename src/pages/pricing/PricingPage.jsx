import './pricing.css';
import {PricingCardWrapper} from "../../components/pricingcardwrapper/PricingCardWrapper.jsx";
import SwitchButton from "../../components/pricingtoggle/SwitchButton.jsx";
import {useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export function PricingPage() {
    const [value, setValue] = useState(false);
    const pricingData = [
        {
            id: 1,
            cost: 0,
            name: "Free",
            features: ["10 links per month", "3 QR codes/month"],
            xh: "Includes:",
            also: ["Unlimited clicks and QR code scans"],
            icons: ["https://ik.imagekit.io/methuselah/Mini/icons/Natural%20User%20Interface%202.svg?updatedAt=1711361238954"],
            isPopular: false
        },
        {
            id: 2,
            cost: 8,
            name: "Basic",
            features: ["100 links per month", "6 QR codes/month", "10 secured links/month"],
            xh: "everything in free, plus:",
            also: ["30 days of click & scan analytics", "url customization", "get notifications from url and QR code usage"],
            icons: ["https://ik.imagekit.io/methuselah/Mini/icons/Analytics-1.svg?updatedAt=1711361238755", "https://ik.imagekit.io/methuselah/Mini/icons/Settings.svg?updatedAt=1711361239147", "https://ik.imagekit.io/methuselah/Mini/icons/Notification.svg?updatedAt=1711361238982"],
            isPopular: true
        },
        {
            id: 3,
            cost: 29,
            name: "Premium",
            features: ["500 links/month", "20 secured links/month", "12 QR Codes/month"],
            xh: "everything in basic, plus:",
            also: ["use your own domain name for urls", "40 days of click & scan analytics", "demographics based secured links", "control url access based on personas"],
            icons: ["https://ik.imagekit.io/methuselah/Mini/icons/Website.svg?updatedAt=1711361238925", "https://ik.imagekit.io/methuselah/Mini/icons/Analytics.svg?updatedAt=1711361239307", "https://ik.imagekit.io/methuselah/Mini/icons/Security%20Shield.svg?updatedAt=1711361239188", "https://ik.imagekit.io/methuselah/Mini/icons/Secure.svg?updatedAt=1711361239013"],
            isPopular: false
        }
    ]
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="flex justify-between items-center flex-col p-16">
            <h1 className="Big-Pricing-Title">Start for free and grow as you go</h1>
            <SwitchButton handleToggle={() => setValue(!value)} isOn={value}/>
            <div className="flex justify-evenly pricing">
                {/*<PricingCardWrapper pricingInfo={pricingData[0]}/>*/}
                {/*<PricingCardWrapper pricingInfo={pricingData[1]}/>*/}
                {/*<PricingCardWrapper pricingInfo={pricingData[2]}/>*/}

                {window.innerWidth >= 768 ? (
                    <>
                        <PricingCardWrapper pricingInfo={pricingData[0]}/>
                        <PricingCardWrapper pricingInfo={pricingData[1]}/>
                        <PricingCardWrapper pricingInfo={pricingData[2]}/>
                    </>
                ) : (

                    <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile"}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {pricingData.map(pricing => (
                            <PricingCardWrapper key={pricing.id} pricingInfo={pricing}/>
                        ))}
                    </Carousel>
                )}
            </div>
        </div>
    )
}