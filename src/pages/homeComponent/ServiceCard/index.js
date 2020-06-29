import React from 'react'
import "../home.css";
import { Col } from "reactstrap";
import Lottie from 'react-lottie';

const defaultOptions = {
    loop: true,
    autoplay: false,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet'
    }
};




const ServiceCard = ({ ref, icon, description, title }) => {
    let _lottieHeartRef = React.useRef(null);

    const onRefLottie = (ref) => {
        _lottieHeartRef = ref;
    }

    const onMouseEnter = () => {
        _lottieHeartRef && _lottieHeartRef.play();
    };

    const onMouseLeave = () => {
        _lottieHeartRef && _lottieHeartRef.stop();
    };



    return (
        <Col md="6" style={{ color: "white" }} >
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Lottie
                    options={{
                        ...defaultOptions,
                        animationData: icon,
                    }}
                    ref={onRefLottie}
                    height={250}
                />
                <h5
                    style={{
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: "bold"
                    }}
                >
                    {title}
                </h5>
                <p style={{ color: "#C3C3C3" }} dangerouslySetInnerHTML={{ __html: description }}>

                </p>
            </div>
        </Col>
    )
}

export default ServiceCard
