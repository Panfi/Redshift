import React from 'react'
import sliderHeader from '../../assets/images/slider-top1.jpg';
import sliderBtn from '../../assets/images/slider-btn.fw.png';
import './slider.css'
import Carousel from 'react-bootstrap/Carousel'  
import { withRouter } from 'react-router-dom';

const  onLearnMore = () => {
    this.props.history.push({
        pathname: '/contact',
        state: { goto: "contact-form" }
      })
}

const BootstrapCarousel = () => {
    return (  
        <div>
            <div className='container-fluid' >
                <Carousel 
                    className="cyber-carousel"
                    autoPlay={false}
                    interval={5000}
                    controls={false}
                    indicators={true}>
                    <Carousel.Item style={{'height':"100%"}} >
                        <img alt="slider1" style={{'height':"auto"}} className="d-block w-100" src={sliderHeader} />
                        <Carousel.Caption>
                            <span className="c-text-line"></span>
                            <p className="c-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className="slider-btn-cell">
                                <div className="slider-btn" onClick={onLearnMore}>
                                    <img alt="slider-button" src={sliderBtn} />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"100%"}} >
                        <img alt="slider2" style={{'height':"auto"}} className="d-block w-100" src={sliderHeader} />
                        <Carousel.Caption>
                            <span className="c-text-line"></span>
                            <p className="c-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className="slider-btn-cell">
                                <div className="slider-btn" onClick={onLearnMore}>
                                    <img alt="slider-button" src={sliderBtn} />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{'height':"100%"}} >
                        <img alt="slider3" style={{'height':"auto"}} className="d-block w-100" src={sliderHeader} />
                        <Carousel.Caption>
                            <span className="c-text-line"></span>
                            <p className="c-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className="slider-btn-cell">
                                <div className="slider-btn" onClick={onLearnMore}>
                                    <img alt="slider-button" src={sliderBtn} />
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default withRouter(BootstrapCarousel)