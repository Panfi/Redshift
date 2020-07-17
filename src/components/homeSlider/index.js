import React, { Component } from 'react'
import sliderHeader from '../../assets/images/slider-top1.jpg';
import sliderBtn from '../../assets/images/slider-btn.fw.png';
import './slider.css'
import Carousel from 'react-bootstrap/Carousel'  


export class BootstrapCarousel extends Component {  

    render() {  
        return (  
            <div>
               
                <div className='container-fluid' >
                    <Carousel autoPlay={false}
                    interval={5000}
                    controls={false}
                    indicators={true}>
                        <Carousel.Item style={{'height':"100%"}} >
                            <img style={{'height':"auto"}} className="d-block w-100" src={sliderHeader} />
                            <Carousel.Caption>
                                <span class="c-text-line"></span>
                                <p class="c-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <div class="slider-btn-cell">
                                    <a href="#"  class="slider-btn">
                                        <img src={sliderBtn} />
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item  >

                        <Carousel.Item style={{'height':"100%"}} >
                            <img style={{'height':"auto"}} className="d-block w-100" src={sliderHeader} />
                            <Carousel.Caption>
                                <span class="c-text-line"></span>
                                <p class="c-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <div class="slider-btn-cell">
                                    <a href="#"  class="slider-btn">
                                        <img src={sliderBtn} />
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item  >

                        <Carousel.Item style={{'height':"100%"}} >
                            <img style={{'height':"auto"}} className="d-block w-100" src={sliderHeader} />
                            <Carousel.Caption>
                                <span class="c-text-line"></span>
                                <p class="c-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <div class="slider-btn-cell">
                                    <a href="#"  class="slider-btn">
                                        <img src={sliderBtn} />
                                    </a>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item  >

                       
                           
                    </Carousel>
                </div>
            </div>
        )
    }
}  

export default BootstrapCarousel  