import React, { useState } from "react";
import { Carousel as BCarousel } from "react-bootstrap"
import _ from "lodash"

/**
 * 
 * @param {
 *  {
 *      staticImgs: {
 *          label: string,
 *          text: string,
 *          alt: string,
 *          src: string,
 *          grayscale: booleam
 *      }[]
 *  }
 * } props 
 */
const Carousel = ({contents}) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
        <BCarousel activeIndex={index} onSelect={handleSelect}>
            {_.map(contents, (content, i) => (
                <BCarousel.Item key={i}>
                <img 
                    className="d-block w-100"
                    src={content.src}
                    alt={content.alt}
                    />
                <BCarousel.Caption>
                    <h3 style={{color: 'lightgray'}}> {content.label} </h3>
                    <p style={{color: 'lightgray'}}> {content.text} </p>
                </BCarousel.Caption>
            </BCarousel.Item>
            ))}
        </BCarousel>
    )
} 


export default Carousel;