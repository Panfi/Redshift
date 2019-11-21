import React, { useState } from 'react';
import Quote from '../../assets/images/quote.png';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

const items = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam consequat dolor, eget pharetra enim convallis non. ',
    altText: 'Patric Malvoy',
    caption: 'CEO of ThunderSafe'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam consequat dolor, eget pharetra enim convallis non.',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquam consequat dolor, eget pharetra enim convallis non.',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const MyCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}>
        <div className="bg-testimonials">
          <ul>
            <li><img src={Quote} alt="" /></li>
            <li><p style={{ width:"300px", margin: "0 auto", paddingBottom: "30px"}}>{item.content} <br/><br/>{item.altText}<br/><small style={{ color:"#9f9f9f"}}>{item.caption}</small></p></li>
            <li><img src={Quote} alt="" /></li>
          </ul>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}>
          
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default MyCarousel;